<!--
 * @Author: xwen
 * @Date: 2020-05-27 10:44:52
 * @LastEditTime: 2020-05-27 11:33:32
 * @LastEditors: xwen
 * @Description: 
--> 
# Vue.nextTick([callback, context])
用法：在下次DOM更新循环结束之后执行延迟回调，在修改数据之后立即使用这个方法，获取更新后的DOM。

# Vue.directive(id, [definition])
用法：注册或获取全局指令。
钩子函数：（参数：el、binding、vnode和oldVnode）
  bind： 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  inserted：被绑定元素插入父节点时调用（仅保证父节点存在，但不一定已被插入文档中）。
  update：所在组件的 VNode 更新时调用，但是可以能发生在其子 VNode 更新之前。
  componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
  unbind： 只调用一次，指令与元素解绑时调用。

# Vue.filter(id, [definition])
用法：注册或获取全局过滤器。
注：当全局过滤器和局部过滤器重名时，会采用局部过滤器。
过滤器函数总接收表达式的值（之前的操作链的结果）作为第一个参数。过滤器可以串联。

# Vue.component(id, [definition])
用法：注册或者获取全局组件。组件还会自动使用给定的 id 设置组件的名称。
```
// 注册组件，传入一个扩展过的构造器
Vue.component('my-component', Vue.extend({/* ... */}))

// 注册组件，传入一个选项对象（自动调用Vue.extend）
Vue.component('my-component', {/* ... */ })

// 获取注册的组件（始终返回构造器）
var MyComponent = Vue.component('my-component')
```

# Vue.use(plugin)
用法：安装Vue.js插件，如果插件是一个对象，必须提供install方法。如果插件是一个函数，它会被
作为install方法。install方法调用时，会将Vue作为参数传入。
该方法需要在调用 new Vue() 之前被调用。
当install方法被同一个插件多次调用，插件只会被安装一次。

# Vue.mixin(mixin)
用法：全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注
入自定义的行为。不推荐在应用代码中使用。
  选项合并：
    当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。
    注：1、数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
        2、同名狗子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩
        子之前调用。