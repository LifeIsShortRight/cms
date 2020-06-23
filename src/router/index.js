import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   component: () => import('@/App')
  // }
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('views/main/home/Home')
  // },
  // {
  //   path: '/videoManager',
  //   name: 'videoManager',
  //   component: () => import('views/main/videoManager/VideoManager')
  // },
  // {
  //   path: '/userManager',
  //   name: 'userManager',
  //   component: () => import('views/main/userManager/UserManager')
  // },
  // {
  //   path: '/other',
  //   name: 'other',
  //   component: () => import('views/main/other/Other'),
  //   children: [
  //     {
  //       path: '/other',
  //       redirect: '/page1'
  //     },
  //     {
  //       path: '/page1',
  //       name: 'page1',
  //       component: () => import('views/main/other/Page1')
  //     },
  //     {
  //       path: '/page2',
  //       name: 'page2',
  //       component: () => import('views/main/other/Page2')
  //     }
  //   ]
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/main/login/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
