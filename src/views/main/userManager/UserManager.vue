<!--  -->
<template>
  <div class="UserManager">
    <el-dialog
      center
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <c-form :formLabel="operateFormLabel" :form="operateForm"></c-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
    <header>
      <div><el-button @click="addUser" type="primary">+ 新增</el-button></div>
      <c-form
        @input="searchData"
        inline
        :formLabel="formLabel"
        :form="searchForm"
      >
        <el-button @click="getList()" type="primary">搜索</el-button>
      </c-form>
    </header>
    <main>
      <c-table
        :tableData="tableData"
        :tableLabel="tableLabel"
        :config="config"
        @changePage="getList"
        @edit="editUser"
        @delete="deleteUser"
      ></c-table>
    </main>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CTable from 'components/common/CTable'
import CForm from 'components/common/CForm'
export default {
  //import引入的组件需要注入到对象中才能使用
  name: 'UserManager',
  components: {
    CForm,
    CTable
  },
  props: {},
  data() {
    //这里存放数据
    return {
      searchInfo: null,
      operateType: 'add',
      isShow: false,
      operateForm: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      operateFormLabel: [
        {
          model: 'name',
          label: '姓名'
        },
        {
          model: 'age',
          label: '年龄'
        },
        {
          model: 'sexLabel',
          label: '性别',
          type: 'select',
          options: [
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 0
            }
          ]
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date'
        },
        {
          model: 'addr',
          label: '地址'
        }
      ],
      tableData: [],
      tableLabel: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'sexLabel',
          label: '性别'
        },
        {
          prop: 'birth',
          label: '出生日期',
          width: '120'
        },
        {
          prop: 'addr',
          label: '地址',
          width: '250'
        }
      ],
      config: {
        page: 1,
        pageTotal: 20,
        total: null,
        loading: false
      },
      searchForm: {
        keyword: ''
      },
      formLabel: [
        {
          model: 'keyword',
          label: '',
          options: []
        }
      ]
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    searchData(val) {
      this.searchInfo = val
    },
    getList() {
      this.config.loading = true
      this.$request({
        url: '/api/user/getUser',
        params: {
          page: this.config.page,
          name: this.searchInfo
        }
      }).then(res => {
        this.tableData = res.data.list.map(item => {
          item.sexLabel = item.sex === 0 ? '女' : '男'
          return item
        })
        this.config.total = res.data.count
        this.config.loading = false
      })
    },
    addUser() {
      this.operateType = 'add'
      this.isShow = true
    },
    editUser(current) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = current
    },
    deleteUser(current) {
      this.$confirm('此操作将永久删除该文件，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$request({
            url: '/api/user/del',
            params: {
              id: current.id
            }
          })
            .then(res => {
              this.isShow = false
              this.$message({
                message: res.data.message,
                center: true,
                type: 'success'
              })
              this.$message({
                message: res.data.message,
                center: true,
                type: 'error'
              })
              this.getList()
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(() => {
          this.$message({
            message: '已取消删除',
            center: true,
            type: 'info'
          })
        })
    },
    confirm() {
      if (this.operateType === 'edit') {
        this.$request({
          method: 'post',
          url: '/api/user/edit',
          data: JSON.stringify(this.operateForm)
        })
          .then(res => {
            this.isShow = false
            this.$message({
              message: res.data.data.message,
              center: true,
              type: 'success'
            })
            this.getList()
          })
          .catch(err => {
            this.$message({
              message: err.data.data.message,
              center: true,
              type: 'error'
            })
          })
      } else if (this.operateType === 'add') {
        console.log(this.operateForm)
        this.$request({
          method: 'post',
          url: 'api/user/add',
          data: JSON.stringify(this.operateForm)
        })
          .then(res => {
            console.log(res)
            this.isShow = false
            this.$message({
              message: res.data.data.message,
              center: true,
              type: 'success'
            })
            this.getList()
          })
          .catch(err => {
            this.$message({
              message: err.data.data.message,
              center: true,
              type: 'error'
            })
          })
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getList()
  },
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
.UserManager {
  height: 100%;
  header {
    display: flex;
    justify-content: space-between;
  }
  main {
    height: calc(100% - 43px);
  }
}
/* @import url(); 引入公共css类'*/
</style>
