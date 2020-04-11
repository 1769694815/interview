/*
 * @Author: xwen
 * @Date: 2020-04-03 09:14:41
 * @LastEditTime: 2020-04-07 10:35:55
 * @LastEditors: xwen
 * @Description: 
 */

function observe (value, cb) {
  Object.keys(value).forEach((key) => defineReactive(value, key, value[key], cb))
}

function defineReactive (obj, key, val, cb) {

  const dep = new Dep()

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      dep.addSub(Dep.target)
      return val
    },
    set: newVal => {
      val = newVal
      dep.notify()
      cb()
    }
  })
}

function _proxy (data) {
  const that = this
  Object.keys(data).forEach(key => {
    Object.defineProperty(that, key, {
      enumerable: true,
      configurable: true,
      get: function proxyGetter () {
        return that._data[key]
      },
      set: function proxySetter (val) {
        that._data[key] = val
      }
    })
  })
}

class Vue {
  constructor(options) {
    this._data = options.data
    _proxy.call(this, options.data)
    observe(this._data, options.render)
    // new Watcher()

    // console.log('render~', this._data.text1)
  }
}

class Dep {
  constructor() {
    // 存放 watcher 对象的数据
    this.subs = []
  }

  // 在 subs 中添加 watcher 对象
  addSub (sub) {
    this.subs.push(sub)
  }

  // 通知所有的 watcher 对象更新视图
  notify () {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}

class Watcher {
  constructor() {
    Dep.target = this
  }

  // 更新视图的方法
  update() {
    console.log('视图更新了')
  }
}

Dep.target = null

let app = new Vue({
  el: '#app',
  data: {
    text1: 'text1',
    text2: 'text2'
  },
  render () {
    console.log('视图更新', app._data.text1)
  }
})

setTimeout(() => {
  app.text3 = '测试3'
  console.log(app)
  // app._data.text1 = '测试'
  // app.text1 = '测试2'
}, 1000)