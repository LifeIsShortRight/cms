<!--  -->
<template>
  <div style="height:100%" class="Echarts" ref="Echarts"></div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Echarts from 'echarts'
export default {
  //import引入的组件需要注入到对象中才能使用
  name: 'Echarts',
  components: {},
  props: {
    Data: {
      type: Object,
      default() {
        return {}
      }
    },
    isAxisChart: {
      type: Boolean,
      default: true
    }
  },
  data() {
    //这里存放数据
    return {
      echarts: null,
      axisOpition: {
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            }
          }
        ],
        series: [],
        legend: {
          textStyle: {
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '15%'
        },
        color: [
          '#61a0a8',
          '#d48265',
          '#91c7ae',
          '#749f83',
          '#ca8622',
          '#bda29a',
          '#6e7074',
          '#546570',
          '#c4ccd3'
        ]
      },
      normalOption: {
        series: [],
        tooltip: {
          trigger: 'item'
        },
        color: [
          '#0f78f4',
          '#dd536b',
          '#9462e5',
          '#a6a6a6',
          '#e1bb22',
          '#39c362',
          '#3ed1cf'
        ]
      }
    }
  },
  //监听属性 类似于data概念
  computed: {
    options() {
      return this.isAxisChart ? this.axisOpition : this.normalOption
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  //监控data中的数据变化
  watch: {
    Data: {
      handler: function() {
        this.initECharts()
      },
      deep: true
    },
    isCollapse() {
      setTimeout(() => {
        this.resiseEcharts()
      }, 300)
    }
  },
  //方法集合
  methods: {
    initECharts() {
      this.initData()
      if (!this.echarts) this.echarts = Echarts.init(this.$refs.Echarts)
      this.echarts.setOption(this.options)
    },
    initData() {
      if (this.isAxisChart) {
        this.axisOpition.xAxis.data = this.Data.xData
        this.axisOpition.series = this.Data.series
      } else {
        this.normalOption.series = this.Data.series
      }
    },
    resiseEcharts() {
      this.echarts ? this.echarts.resize() : ''
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    window.addEventListener('resize', () => {
      this.resiseEcharts()
    })
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {
    window.removeEventListener('resize', this.resiseEcharts)
  }, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入公共css类'*/
</style>
