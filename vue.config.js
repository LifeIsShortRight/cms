const path = require('path') //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
  devServer: {
    open: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
      .set('api', resolve('src/api'))
      .set('common', resolve('src/common'))
    //set第一个参数：设置的别名，第二个参数：设置的路径
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~assets/scss/_variable.scss";`
      }
    }
  }
}
