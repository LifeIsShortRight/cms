<!--  -->
<template>
  <header>
    <div class="l-content">
      <el-button
        @click="collapseMenu"
        type="primary"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="currentMenu.path">{{
          currentMenu.label
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h3 class="c-content">我的课堂后台管理系统</h3>
    <el-dropdown trigger="click" size="mini">
      <span class="el-dropdown-link">
        <img :src="userImg" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { mapState } from 'vuex'
export default {
  //import引入的组件需要注入到对象中才能使用
  name: 'Header',
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      userImg: require('assets/logo.png')
    }
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState({
      currentMenu: state => state.tab.currentMenu
    })
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    collapseMenu() {
      this.$store.commit('collapseMenu')
    },
    logOut() {
      this.$store.commit('clearMenu')
      this.$store.commit('clearToken')
      location.reload()
    }
  },
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
header {
  position: relative;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .l-content {
    display: flex;
    align-items: center;
    .el-breadcrumb {
      margin-left: 20px;
      /deep/.el-breadcrumb__item {
        .el-breadcrumb__inner {
          color: #eee;
          font-weight: bold;
          cursor: pointer;
        }
      }
      /deep/.el-breadcrumb__item:first-child {
        .el-breadcrumb__inner {
          color: #eee;
          font-weight: normal;
        }
      }
    }
  }
  .c-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #eee;
  }
  .el-dropdown-link img {
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
}

/* @import url(); 引入公共css类'*/
</style>
