<!--  -->
<template>
  <el-row class="Home" :gutter="20">
    <el-col class="left" :span="8">
      <el-card class="top" shadow="hover">
        <div class="user-info">
          <img :src="userImg" />
          <div class="info">
            <p class="name">Nick</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2020-1-1 11:11:11</span></p>
          <p>上次登录地点：<span>广州</span></p>
        </div>
      </el-card>
      <el-card class="bottom" shadow="hover">
        <el-table :data="tableData">
          <el-table-column
            show-overflow-tooltip
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col class="right" :span="16">
      <div class="top">
        <el-card v-for="item in countData" shadow="hover" :key="item.name">
          <i
            :class="`el-icon-${item.icon}`"
            :style="{ backgroundColor: item.color }"
          ></i>
          <div class="detail">
            <p class="total">￥{{ item.value }}</p>
            <p class="text">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <div class="middle">
        <el-card shadow="hover">
          <echarts :Data="echartsData.order"></echarts>
        </el-card>
      </div>
      <div class="bottom">
        <el-card shadow="hover">
          <echarts :Data="echartsData.user"></echarts>
        </el-card>
        <el-card shadow="hover">
          <echarts :isAxisChart="false" :Data="echartsData.video"></echarts>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Echarts from 'common/echarts/Echarts'
export default {
  //import引入的组件需要注入到对象中才能使用
  name: 'Home',
  components: {
    Echarts
  },
  props: {},
  data() {
    //这里存放数据
    return {
      userImg: require('assets/logo.png'),
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 213,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 513,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 3333,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 789,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1113,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ],
      tableData: [],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      echartsData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          series: []
        },
        video: {
          series: []
        }
      }
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$request({
      url: '/api/home/getData'
    }).then(res => {
      res = res.data.data
      this.tableData = res.tableData
      //折线图
      this.echartsData.order.xData = res.orderData.date
      let orderDataKey = Object.keys(res.orderData.data[0])
      orderDataKey.forEach(key => {
        this.echartsData.order.series.push({
          name: key,
          data: res.orderData.data.map(item => item[key]),
          type: 'line'
        })
      })
      //柱状图
      this.echartsData.user.series.push({
        name: '新增用户',
        data: res.userData.data.map(item => item.new),
        type: 'bar'
      })
      this.echartsData.user.series.push({
        name: '活跃用户',
        data: res.userData.data.map(item => item.active),
        type: 'bar',
        barGap: 0
      })
      //饼图
      // res.videoData.forEach(item => {
      //   this.echartsData.video.series.push({
      //     name: item.name,
      //     data: item.value,
      //     type: 'pie'
      //   })
      // })
      this.echartsData.video.series.push({
        data: res.videoData,
        type: 'pie'
      })
    })
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
@import '~assets/scss/home.scss';
</style>
