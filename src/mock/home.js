import Mock from 'mockjs'

export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: 'SpringBoot',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Java',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'C',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Vue',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'React',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Js',
            value: Mock.Random.float(1000, 10000, 0, 2)
          }
        ],
        tableData: [
          {
            name: 'SpringBoot',
            todayBuy: Mock.Random.float(100, 1000, 0, 0),
            monthBuy: Mock.Random.float(1000, 5000, 0, 0),
            totalBuy: Mock.Random.float(10000, 50000, 0, 0)
          },
          {
            name: 'Java',
            todayBuy: Mock.Random.float(100, 1000, 0, 0),
            monthBuy: Mock.Random.float(1000, 5000, 0, 0),
            totalBuy: Mock.Random.float(10000, 50000, 0, 0)
          },
          {
            name: 'C',
            todayBuy: Mock.Random.float(100, 1000, 0, 0),
            monthBuy: Mock.Random.float(1000, 5000, 0, 0),
            totalBuy: Mock.Random.float(10000, 50000, 0, 0)
          },
          {
            name: 'Vue',
            todayBuy: Mock.Random.float(100, 1000, 0, 0),
            monthBuy: Mock.Random.float(1000, 5000, 0, 0),
            totalBuy: Mock.Random.float(10000, 50000, 0, 0)
          },
          {
            name: 'React',
            todayBuy: Mock.Random.float(100, 1000, 0, 0),
            monthBuy: Mock.Random.float(1000, 5000, 0, 0),
            totalBuy: Mock.Random.float(10000, 50000, 0, 0)
          },
          {
            name: 'Js',
            todayBuy: Mock.Random.float(100, 1000, 0, 0),
            monthBuy: Mock.Random.float(1000, 5000, 0, 0),
            totalBuy: Mock.Random.float(10000, 50000, 0, 0)
          }
        ],
        orderData: {
          data: RandomData(14),
          date: [
            '20191001',
            '20191002',
            '20191003',
            '20191004',
            '20191005',
            '20191006',
            '20191007'
          ]
        },
        userData: {
          data: [
            {
              new: Mock.Random.integer(0, 100),
              active: Mock.Random.integer(100, 800)
            },
            {
              new: Mock.Random.integer(0, 100),
              active: Mock.Random.integer(100, 800)
            },
            {
              new: Mock.Random.integer(0, 100),
              active: Mock.Random.integer(100, 800)
            },
            {
              new: Mock.Random.integer(0, 100),
              active: Mock.Random.integer(100, 800)
            },
            {
              new: Mock.Random.integer(0, 100),
              active: Mock.Random.integer(100, 800)
            },
            {
              new: Mock.Random.integer(0, 100),
              active: Mock.Random.integer(100, 800)
            },
            {
              new: Mock.Random.integer(0, 100),
              active: Mock.Random.integer(100, 800)
            }
          ]
        }
      }
    }
    function RandomData(n) {
      let list = []
      for (let i = 0; i < n; i++) {
        list.push(
          Mock.mock({
            SpringBoot: Mock.Random.float(100, 8000, 0, 2),
            Java: Mock.Random.float(100, 8000, 0, 2),
            C: Mock.Random.float(100, 8000, 0, 2),
            Vue: Mock.Random.float(100, 8000, 0, 2),
            React: Mock.Random.float(100, 8000, 0, 2),
            Js: Mock.Random.float(100, 8000, 0, 2)
          })
        )
      }
      return list
    }
  }
}
