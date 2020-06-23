<!--  -->
<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#33aef0"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <el-menu-item
      :index="item.path + ''"
      v-for="item in noChildren"
      :key="item.path"
      @click="disMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      :index="item.path + ''"
      v-for="(item, index) in hasChildren"
      :key="index"
      @click="disMenu(item)"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path + ''"
          v-for="(subItem, subIndex) in item.children"
          :key="subIndex"
          @click="disMenu(subItem)"
          >{{ subItem.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: 'Aside',
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      asideMenu: [
        {
          path: '/',
          label: '首页',
          icon: 's-home'
        },
        {
          path: '/videoManager',
          label: '视频管理',
          icon: 'video-play'
        },
        {
          path: '/userManager',
          label: '用户管理',
          icon: 'user'
        },
        {
          path: '/other',
          label: '其他',
          icon: 'setting',
          children: [
            {
              path: '/page1',
              label: '页面1'
            },
            {
              path: '/page2',
              label: '页面2'
            }
          ]
        }
      ]
    }
  },
  //监听属性 类似于data概念
  computed: {
    noChildren() {
      return this.menu.filter(item => !item.children)
    },
    hasChildren() {
      return this.menu.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    menu() {
      return this.$store.state.tab.menu
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    disMenu(val) {
      this.$router.push(val.path)
      this.$store.commit('selectMenu', val)
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
.el-menu {
  height: 100vh;
  border: none;
}

.el-menu i {
  color: inherit;
}
/deep/ i.el-submenu__icon-arrow {
  color: #fff;
}
/* @import url(); 引入公共css类'*/
</style>
