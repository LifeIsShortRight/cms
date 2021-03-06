import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/scss/reset.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { request } from 'api/request'
import './mock'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$request = request
router.beforeEach((to, from, next) => {
  store.commit('getToken')
  let token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.commit('addMenu', this.$router)
  }
}).$mount('#app')
