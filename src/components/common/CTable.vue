<!--  -->
<template>
  <div class="CTable">
    <el-table
      height="calc(100% - 100px)"
      :data="tableData"
      v-loading="config.loading"
      stripe
    >
      <el-table-column label="序号" width="85">
        <template slot-scope="scope">
          <span style="margin-left:10px">{{
            (config.page - 1) * 20 + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :label="item.label"
        :key="item.prop"
        :min-width="item.width || 'auto'"
      >
        <template slot-scope="scope">
          <span style="margin-left:10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="150" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :background="true"
      layout="prev,pager,next"
      :total="config.total"
      :page-size="config.pageTotal"
      :current-page.sync="config.page"
      @current-change="changePage"
    ></el-pagination>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: 'CTable',
  components: {},
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object
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
    changePage() {
      this.$emit('changePage')
    },
    handleEdit(current) {
      this.$emit('edit', current)
    },
    handleDelete(current) {
      this.$emit('delete', current)
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
.CTable {
  text-align: center;
  height: 100%;
  .el-pagination {
    margin-top: 20px;
  }
}
/* @import url(); 引入公共css类'*/
</style>
