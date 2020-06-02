/*
 * @Author: xwen
 * @Date: 2020-05-26 19:57:15
 * @LastEditTime: 2020-05-26 20:22:03
 * @LastEditors: xwen
 * @Description: 深拷贝
 */ 

// WeakMap: 是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。

/**
 * @description: 通用的 forEach 遍历
 * @param {array} array 数组
 * @param {function}  iteratee 遍历的回调函数，他可以接收每次遍历的 value 和 index 二个参数
 * @return: 
 */
function forEach(array, iteratee) {
  let index = -1
  const length = array.length
  while (++index < length) {
    iteratee(array[index], index)
  }
  return array
}

function deepclone(target, map = new Map()) {
  if (typeof target === 'object') {
    const isArray = Array.isArray(target)
    let cloneTarget = isArray ? [] : {}
    if (map.get(target)) { // 判断有无克隆过的对象
      return map.get(target)
    }
    map.set(target, cloneTarget)
    // 遍历数组时，直接使用 forEach 进行遍历；遍历对象时，使用 Object.keys 取出所有的 key 进行遍历
    // 然后在遍历时把 forEach 回调函数的 value 当作 key 使用：
    const keys = isArray ? undefined : Object.keys(target)
    forEach(keys || target, (value, key) => {
      if (keys) {
        key = value
      }
      cloneTarget[key] = deepclone(target[key], map)
    })
    return cloneTarget
  } else {
    return target
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8],
  f: { f: {f: { f: { f: { f: {}}}}}}
}

target.target = target

console.time()
const result = deepclone(target)
console.timeEnd()
console.log(result)
