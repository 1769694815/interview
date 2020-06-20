<!--
 * @Author: xwen
 * @Date: 2020-06-19 13:52:56
 * @LastEditTime: 2020-06-19 14:17:33
 * @LastEditors: xwen
 * @Description: 
--> 

# Vue-Router的实现原理简介

## 如何在vue中使用Vue-Router？
1、Vue使用组件，即调用Vue的use方法；
    Vue.use(Router)
2、实例化router，并配置router的配置对象，含routers路由：
```
    export default new Router({
        mode: 'hash',
        routers: [
            {
                path: '/hello',
                component: HelloWorld
            }, {
                path: '/',
                component: VuexTest
            }, {
                path: '/form',
                component: Form
            }
        ]
    })
```
3、在vue实例上配置router实例；
4、使用

## vue-router内部都做了什么？
router-link和router-view是二个Vue全局组件，必定是在vue-router中实现了全局定义的两个组件，
他们分别用来跳转路由和展示路由对应的组件内容。
我们点击了router-link时导致路由变了，vue-router内部必然是在监听路由变化，根据路由规则找到
匹配的组件，然后在router-view中渲染。
所以，路由切换最终是页面的不同组件的展示，而没有真正的去刷新页面。

## vue-router核心实现原理

1、实现一个静态install方法，应为作为插件必须有这个方法，给Vue.use()去调用；
2、可以监听路由变化；
3、解析配置的路由，即解析router的配置项routers，能根据路由匹配到对应组件；
4、实现两个全局组件router-link和router-view；

Vue.use(Router)时，会调用router的install方法并把Vue作为参数转入，混入beforeCreate方法，
即在Vue实例后 挂载前在vue原型上挂个$router方法（因为这样后面才能用this.$router.push()）,
然后调用router实例的init方法；
在init方法中完成了监听路由，解析路由(路由mapping匹配)和定义组件；

需要注意的是，存储当前路由的变量this.app.current非一般的变量，而是借用Vue的响应式定义的，
所以当路由变化时只需要给这个this.app.current赋值，而router-view组件刚好引用到这个值，当
其改变时所有的引用到的地方都会改变，则得到的要展示的组件也会发生响应式的变化。
