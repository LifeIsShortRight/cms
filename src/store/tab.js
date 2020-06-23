import Cookie from 'js-cookie'
export default {
  state: {
    isCollapse: false,
    menu: [],
    currentMenu: {},
    tagsList: [
      {
        path: '/',
        label: '首页',
        icon: 's-home'
      }
    ]
  },
  mutations: {
    setMenu(state, val) {
      state.menu = val
      Cookie.set('menu', JSON.stringify(val))
    },
    clearMenu(state) {
      state.menu = []
      Cookie.remove('menu')
    },
    addMenu(state, router) {
      if (!Cookie.get('menu')) return
      let menu = JSON.parse(Cookie.get('menu'))
      state.menu = menu
      let currentMenu = [
        {
          path: '/',
          component: () => import('views/main/Main'),
          children: []
        }
      ]
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`views/main/${item.url}`)
            return item
          })
          currentMenu[0].children.push(...item.children)
        } else {
          item.component = () => import(`views/main/${item.url}`)
          currentMenu[0].children.push(item)
        }
      })
      router.addRoutes(currentMenu)
    },
    selectMenu(state, val) {
      if (val.label !== '首页') {
        state.currentMenu = val
        let result = state.tagsList.findIndex(item => item.label === val.label)
        if (result === -1) state.tagsList.push(val)
      } else {
        state.currentMenu = {}
      }
    },
    closeTag(state, val) {
      let result = state.tagsList.findIndex(item => item.label === val.label)
      state.tagsList.splice(result, 1)
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {}
}
