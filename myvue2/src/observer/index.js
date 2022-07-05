/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍: 响应式逻辑
 */


import {arrayMethods} from "./array.js";
import Dep from "./dep.js";


  // src/obserber/index.js
class Observer {
  // 观测值
  constructor(value) {
    this.value = value
    this.dep = new Dep()
    Object.defineProperty(value,'__ob__',{
      value:this, // 值 指向的 Observer 的实力
      enumerable:false, // 不可枚举
      writable:true,
      configurable:true
    })

    if(Array.isArray(value)){
      // 这里对数组做了额外判断
      // 通过重写数组原型方法来对数组的七种方法进行拦截
      value.__proto__ = arrayMethods
        // 如果数组里面还包含数组，需要递归判断
      this.observeArray(value)
    }else {
      this.walk(value);
    }
  }

  observeArray(item){
    for(let i=0;i<item.length;i++){
      observe(item[i])
    }
  }

  walk(data) {
    // 对象上的所有属性依次进行观测
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = data[key];
      defineReactive(data, key, value);
    }
  }



}
// Object.defineProperty数据劫持核心 兼容性在ie9以及以上
function defineReactive(data, key, value) {
  let childOb =  observe(value); // 递归关键
  let dep = new Dep()
  // --如果value还是一个对象会继续走一遍odefineReactive 层层遍历一直到value不是对象才停止
  //   思考？如果Vue数据嵌套层级过深 >>性能会受影响
  Object.defineProperty(data, key, {
    get() {
      console.log("响应式---获取值",Dep.target);
      // 页面取值的时候 可以把watcher收集到dep里面--依赖收集
      if (Dep.target) {
        // 如果有watcher dep就会保存watcher 同时watcher也会保存dep
        dep.depend();
        if (childOb) {
          // 这里表示 属性的值依然是一个对象 包含数组和对象 childOb指代的就是Observer实例对象  里面的dep进行依赖收集
          // 比如{a:[1,2,3]} 属性a对应的值是一个数组 观测数组的返回值就是对应数组的Observer实例对象
          childOb.dep.depend();
          if (Array.isArray(value)) {
            // 如果数据结构类似 {a:[1,2,[3,4,[5,6]]]} 这种数组多层嵌套  数组包含数组的情况  那么我们访问a的时候 只是对第一层的数组进行了依赖收集 里面的数组因为没访问到
            // 所以五大收集依赖  但是如果我们改变了a里面的第二层数组的值  是需要更新页面的  所以需要对数组递归进行依赖收集
            if (Array.isArray(value)) {
              // 如果内部还是数组
              dependArray(value); // 不停的进行依赖收集
            }
          }
        }
      }
      return value;
    },
    set(newValue) {
      if (newValue === value) return;
      console.log("响应式---设置值");
      // 如果赋值的新值也是一个对象  需要观测
      observe(newValue)
      value = newValue;
      dep.notify() //通知渲染
    },
  });
}
export function observe(value) {
  // 如果传过来的是对象或者数组 进行属性劫持
  if (
    Object.prototype.toString.call(value) === "[object Object]" ||
    Array.isArray(value)
  ) {
    return new Observer(value);
  }
}

// 递归手机数组依赖
function dependArray(value){
  for(let e,i=0, l=value.length;i<l;i++){
    e = value[i]
    e&&e.__ob__ &&e.__ob__.depend()
    if(Array.isArray(e)){
      dependArray(e)
    }
  }
}
