/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */


import {initState} from './state.js'
import {compileToFunctions} from "./compiler/index.js";
import {mountComponent} from "./lifecycle.js";
export function initMixin(Vue){
  Vue.prototype._init = function (option){
    const vm = this

    vm.$options = option
    // 初始化状态
    initState(vm)

    // 如果有el属性，进行模板渲染
    if(vm.$options.el){
      vm.$mount(vm.$options.el)
    }
  }

  // 这块代码在源码里面的位置其实是放在entry-runtime-with-compiler.js里面
  // 代表的是Vue源码里面包含了compile编译功能 这个和runtime-only版本需要区分开
  Vue.prototype.$mount = function (el) {
      const vm = this
      const options = vm.$options
     el = document.querySelector(el)

    // 如果不存在render属性
    if(!options.render){
      let template = options.template
      if(!template && el){
        template = el.outerHeight
      }
      // 最终需要把tempalte模板转化成render函数
      if (template) {
        const render = compileToFunctions(template); // template 转成 render函数
        options.render = render;
      }
    }

    // 将当前组件实例挂载到真实的el节点上面
    console.log(vm,el)
    return mountComponent(vm, el);
  }

}
