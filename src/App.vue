<!--  -->
<template>
  <div>
    <el-container v-if="$route.path !== '/login'" id="app">
      <el-aside width="auto"><Aside /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <Tags />
        <el-main><Main /></el-main>
      </el-container>
    </el-container>
    <router-view v-else></router-view>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Aside from 'views/aside/Aside'
import Header from 'views/header/Header'
import Main from 'views/main/Main'
import Tags from 'components/this/Tags'
export default {
  //import引入的组件需要注入到对象中才能使用
  name: 'app',
  components: {
    Aside,
    Header,
    Main,
    Tags
  },
  props: {},
  data() {
    //这里存放数据
    return {}
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss" scoped>
#app {
  height: 100vh;
  .el-container {
    background-color: #eee;
    .el-header {
      background-color: gray;
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
