/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */
import Watcher from "./observer/watcher.js";


// src/lifecycle.js
export function mountComponent(vm, el) {
  // 上一步模板编译解析生成了render函数
  // 下一步就是执行vm._render()方法 调用生成的render函数 生成虚拟dom
  // 最后使用vm._update()方法把虚拟dom渲染到页面

  // 真实的el选项赋值给实例的$el属性 为之后虚拟dom产生的新的dom替换老的dom做铺垫
  vm.$el = el;
  //   _update和._render方法都是挂载在Vue原型的方法  类似_init
  // vm._update(vm._render());

  let updateComponent = ()=>{
    console.log('页面刷新----- lifecycle')
    vm._update(vm._render());
  }
  new Watcher(vm,updateComponent,null,true)
}



// src/lifecycle.js

import { patch } from "./vdom/patch.js";
export function lifecycleMixin(Vue) {
  // 把_update挂载在Vue的原型
  Vue.prototype._update = function (vnode) {
    const vm = this;
    // patch是渲染vnode为真实dom核心
    vm.$el =  patch(vm.$el, vnode);
  };
}
