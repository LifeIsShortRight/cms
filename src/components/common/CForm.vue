<!--  -->
<template>
  <el-form inline :model="form" ref="form" label-width="100px">
    <el-form-item v-for="item in formLabel" :key="item.model">
      <el-input
        v-model="form[item.model]"
        :placeholder="'请输入' + item.label"
        v-if="!item.type"
        @input="clg"
      ></el-input>
      <el-select
        v-model="form[item.model]"
        placeholder="请选择"
        v-if="item.type === 'select'"
      >
        <el-option
          v-for="ite in item.options"
          :key="ite.value"
          :label="ite.label"
          :value="ite.value"
        ></el-option>
      </el-select>
      <el-switch
        v-model="form[item.model]"
        v-if="item.type === 'switch'"
      ></el-switch>
      <el-date-picker
        v-model="form[item.model]"
        v-if="item.type === 'date'"
        placeholder="选择日期"
      ></el-date-picker>
    </el-form-item>
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: 'CForm',
  components: {},
  props: {
    form: Object,
    formLabel: Array,
    inline: Boolean
  },
  data() {
    //这里存放数据
    return {}
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    clg(val) {
      this.$emit('input', val)
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
.el-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
/* @import url(); 引入公共css类'*/
</style>
