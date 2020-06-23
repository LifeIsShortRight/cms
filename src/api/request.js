import axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: '',
    timeout: 3000
  })
  //拦截请求
  instance.interceptors.request.use(
    res => {
      return res
    },
    err => {
      console.log(err)
    }
  )
  //拦截响应
  instance.interceptors.response.use(
    response => {
      let res = {}
      res.status = response.status
      res.data = response.data
      return res
    },
    err => {
      console.log(err)
    }
  )
  return instance(config)
}
