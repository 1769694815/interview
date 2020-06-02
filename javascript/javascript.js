/*
 * @Author: xwen
 * @Date: 2020-05-26 14:12:47
 * @LastEditTime: 2020-05-26 16:05:46
 * @LastEditors: xwen
 * @Description: 原型到原型链
 */ 

let steep = 3
//=======>> 构造函数、实例原型和实例之间的关系 start
if (steep == 1) {
  // 构造函数创建对象
  function Person() {

  }
  var person = new Person()
  person.name = 'xwen'
  console.log('person.name', person.name)

  /**
   * prototype
   * 函数的 prototype 属性指向一个对象，这个对象正是调用该构造函数而创建的 实例 的原型
   * 原型：每一个js对象（null除外）在创建的时候就会与之关联另一个对象，这个对象就是原型，每一个对象都会从原型“继承”属性
   * Person（构造函数）-- prototype ---> Person.prototype(实例原型)
   */
  Person.prototype.name = 'xwen'
  var person1 = new Person()
  var person2 = new Person()
  console.log('person1.name', person1.name)
  console.log('person2.name', person2.name)
  
  /**
   * proto
   * 每一个javascript对象（除了null）都具有的一个属性，叫 proto，这个属性会指向该对象的原型
   * person -- __proto__ ---> Person.prototype(实例原型)
   */
  console.log('person.__proto__ === Person.prototype', person.__proto__ === Person.prototype) // true
  
  /**
   * constructor
   * 每一个原型都有一个 constructor 属性指向关联的构造函数
   * Person.prototype(实例原型) -- constructor --> Person
   */
  console.log('Person === Person.prototype.constructor', Person === Person.prototype.constructor) // true
  
  // es5获取对象的原型的方法
  console.log('Object.getPrototypeOf(person) === Person.prototype', Object.getPrototypeOf(person) === Person.prototype)
}

//=======>> 构造函数、实例原型和实例之间的关系 end

//=======>> 实例与原型 start
if (steep == 2) {
  function Person() {

  }

  Person.prototype.name = 'xwen'

  var person = new Person()

  person.name = 'daisy'
  console.log('person.name', person.name)

  delete person.name
  console.log('person.name', person.name)
  // 总结：当读取实例的属性时，如果找不到，就会查找与对象关联的原型的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。
  // person的原型就是 person.__proto__ === Person.prototype

  // 原型的原型
  var obj = new Object()
  obj.name = 'xwen'
  console.log('obj.name', obj.name)
  /**
   * 原型对象就是通过Object构造函数生成，实例的 proto 指向构造函数的prototype
   * Person.prototpye(实例原型) ---__proto__---> Object.prototype
   */
}
//=======>> 实例与原型 end

//=======>> 原型链 start
if (steep == 3) {
  /**
   * Object.prototype 的原型指向 null
   */
  console.log('Object.prototype.__proto__ === null', Object.prototype.__proto__ === null) // true

  /**
   * 扩展 null和undefined
   * 最初的设计：null 是一个表示“无”的对象，转为数值时为0；undefined是一个表示“无”的原始值，转为数值时为NaN
   * 目前的用法：
   *    null 表示“没有对象”，即该处不应该有值。 
   *      1） 作为函数的参数，表示该函数的参数不是对象
   *      2） 作为对象原型链的终点
   *    undefined 表示“缺少值”，就是此处应该有一个值，但是还没有定义
   *      1）变量被声明了，但没有赋值时，就等于 undefined
   *      2）调用函数时，应该提供的参数没有提供，该参数等于 undefined
   *      3）对象没有赋值的属性，该属性的值为 undefined
   *      4）函数没有返回值时，默认返回 undefined
   */

}
//=======>> 原型链 end

//=======>> 补充 start
/**
 * constructor
 * person.constructor === Person // true
 * person并没有 constructor 属性，当不能读取到 constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取
 * Person.prototype.constructor === Person
 */

/**
 * proto
 * 绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，
 * 与其说是一个属性，不如说是一个 getter/setter，当使用 obj.proto 时，可以理解成返回了 Object.getPrototypeOf(obj)。
 */

/**
 * 真的是继承么？
 * “每一个对象都会从原型‘继承’属性” P23
 * 《你不知道的JavaScript》
 * 继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，
 * 这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。
 */
//=======>> 补充 end
