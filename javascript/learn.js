/*
 * @Author: xwen
 * @Date: 2020-04-17 14:02:08
 * @LastEditTime: 2020-06-02 09:57:14
 * @LastEditors: xwen
 * @Description: 继承
 */

function SuperType(name) {
  this.name = name || 'ken'
  this.sexy = ['man', 'woman', 'unknow']
  this.showName = function () {
    console.log(`my name is ${this.name}`)
  }
}
SuperType.prototype.age = 18

// 原型继承
// 优点：实例可继承父类构造函数属性、实例构造函数属性和父类原型的属性
// 缺点：无法实现多继承，所有新实例都会共享父类实例的属性，子实例不可向父实例传参
function SubType() {
  this.name = 'coder'
}
SubType.prototype = new SuperType() // 子类的原型 等于 父类的实例
var subFun = new SubType()
console.log('----原型继承----')
console.log(subFun.name)
console.log(subFun.sexy)
console.log(subFun.age)
subFun.showName()

// 构造继承
// 特点： 子类只继承父类构造函数的属性，不继承父类原型上的属性，可以继承多个构造函数的属性，在子实例中可向父实例传参
// 缺点： 只能继承父类构造函数的属性，无法实现构造函数的复用，每一个实例都有父类构造函数的副本，臃肿
function SubType2() {
  SuperType.call(this)
}
let instance1 = new SubType2()
console.log('----构造继承-----')
instance1.sexy.push('all') // 传参
console.log(instance1.sexy) // 继承构造函数的属性
console.log(instance1.age) // 不继承父类原型的属性
instance1.showName()
let instance2 = new SubType2()
console.log(instance2.sexy) // 每一个实例都有自己父类构造函数的副本

// 组合继承
// 特点： 利用原型链继承父类的原型属性和方法，利用构造函数继承实例属性和方法
// 缺点： 调用了两次父类构造函数，生成了两个实例
function SubType3(name) {
  SuperType.call(this, name)
}

SubType3.prototype = new SuperType()
let instance3 = new SubType3('newCoder')
console.log('----组合继承----')
console.log(instance3.name)
console.log(instance3.age)

//使用 ES5 extends 进行继承
class A {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  getName() {
    return this.name
  }
}

class B extends A {
  constructor(name, age) {
    super(name, age)
    this.job = 'IT'
  }
  getJob() {
    return this.job
  }
  getNameAndJob() {
    return super.getName() + this.job
  }
}
var b = new B('Tom', 20)
console.log('----ES6 extends继承----')
console.log(b.name)
console.log(b.age)
console.log(b.getJob())
console.log(b.getName())
console.log(b.getNameAndJob())

function deepCopyTwo(obj) {
  let objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj == 'object') {
    for (const key in obj) {
      // 判断obj子元素是否为对象，如果是，递归复制
      if (obj[key] && typeof obj[key] === 'object') {
        objClone[key] = deepCopyTwo(obj[key])
      } else {
        objClone[key] = obj[key]
      }
    }
  }
  return objClone
}

function SuperType(name) {
  this.name = name || 'ken'
  this.sexy = ['man', 'woman', 'unknow']
  this.showName = function () {
    console.log(`my name is ${this.name}`)
  }
}
SuperType.prototype.age = 18

// 原型继承
// 优点：实例可继承父类构造函数属性、实例构造函数属性和父类原型的属性
// 缺点：无法实现多继承，所有新实例都会共享父类实例的属性，子实例不可向父实例传参
function SubType() {
  this.name = 'coder'
}
SubType.prototype = new SuperType() // 子类的原型 等于 父类的实例
var subFun = new SubType()
console.log('----原型继承----')
console.log(subFun.name)
console.log(subFun.sexy)
console.log(subFun.age)
subFun.showName()

// 构造继承
// 特点： 子类只继承父类构造函数的属性，不继承父类原型上的属性，可以继承多个构造函数的属性，在子实例中可向父实例传参
// 缺点： 只能继承父类构造函数的属性，无法实现构造函数的复用，每一个实例都有父类构造函数的副本，臃肿
function SubType2() {
  SuperType.call(this)
}
let instance1 = new SubType2()
console.log('----构造继承-----')
instance1.sexy.push('all') // 传参
console.log(instance1.sexy) // 继承构造函数的属性
console.log(instance1.age) // 不继承父类原型的属性
instance1.showName()
let instance2 = new SubType2()
console.log(instance2.sexy) // 每一个实例都有自己父类构造函数的副本

// 组合继承
// 特点： 利用原型链继承父类的原型属性和方法，利用构造函数继承实例属性和方法
// 缺点： 调用了两次父类构造函数，生成了两个实例
function SubType3(name) {
  SuperType.call(this, name)
}

SubType3.prototype = new SuperType()
let instance3 = new SubType3('newCoder')
console.log('----组合继承----')
console.log(instance3.name)
console.log(instance3.age)

//使用 ES5 extends 进行继承
class A {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  getName() {
    return this.name
  }
}

class B extends A {
  constructor(name, age) {
    super(name, age)
    this.job = 'IT'
  }
  getJob() {
    return this.job
  }
  getNameAndJob() {
    return super.getName() + this.job
  }
}
var b = new B('Tom', 20)
console.log('----ES6 extends继承----')
console.log(b.name)
console.log(b.age)
console.log(b.getJob())
console.log(b.getName())
console.log(b.getNameAndJob())



/**
 * @description: 函数防抖(debounce) 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行
 * @param {Function} fn
 * @param {Number} interval
 * @return: 
 */
function debounce(fn, interval =  300) {
  let timeout = null
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, interval)
  }
}

/**
 * @description: 函数节流(throttle) 指定时间间隔内执行一次任务
 * @param {Function} fn
 * @param {Number} interval
 * @return: 
 */
function throttle(fn, interval = 300) {
  let canRun = true
  return function() {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      canRun = true
    }, interval)
  }
}

/**
 * @description: instanceof
 * @param {type} 
 * @return: 
 */
function instance_of(P, L) {
  var O = P.prototype
  L = L.__proto__
  while(true) {
    if (L === null) {
      return false
    }
    if (L === O) {
      return true
    }
    L = L.__proto__
  }
}