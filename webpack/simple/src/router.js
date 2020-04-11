/*
 * @Author: xwen
 * @Date: 2020-04-08 09:06:20
 * @LastEditTime: 2020-04-08 09:41:22
 * @LastEditors: xwen
 * @Description:
 */

import foo from './views/foo'
import bar from './views/bar'

const routes = {
  '/foo': foo,
  '/bar': bar
}

class Router {
  start() {
    window.addEventListener('popstate', () => {
      this.load(location.pathname)
    })

    this.load(location.pathname)
  }

  go(path) {
    history.pushState({}, '', path)
    this.load(path)
  }

  load(path) {
    if (path === '/') {
      path = '/foo'
    }

    const view = new routes[path]()
    view.mount(document.body)
  }
}

export default new Router()