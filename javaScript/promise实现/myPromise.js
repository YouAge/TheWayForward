

// 先定义三个常量表示状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class myPromise{

  // 初始话状态
  constructor(executor){
    this.status = PENDING // 默认状态
    this.result = null // 结果
    // this.reason = null // 失败后的原因
    this.fulledCallbacks =[] // 成功回调
    this.rejectedCallbacks = [] //失败回调
    try{
      // 执行函数阐述， 携带2个状态函数
      executor(this.resolve.bind(this),this.reject.bind(this))
    }catch(e){
        this.reject(e) // 错误回调
    }
  }


  resolve(value){
    if(this.status === PENDING){
      this.status = FULFILLED
      this.result = value
      //成功回调队列，拿出来执行
      while (this.fulledCallbacks.length){
        this.fulledCallbacks.shift()()
      }
    }
  }

  reject(value){
      if(this.status === PENDING){
        this.status = REJECTED
        this.result = value
        while(this.rejectedCallbacks.length){
          this.rejectedCallbacks.shift()()
        }
      }
  }

  then(onFulfilled,onRejected){
    // 判断参数 ，如果不知函数， 直接返回参数值
    const successCallback = typeof onFulfilled === 'function'?onFulfilled:value=>value
    const failCallback = typeof onRejected === 'function'?onRejected:reason=> {throw reason}
    
    const promsie2 = new myPromise((resolve,reject)=>{
        const fulfilledMicrotask = ()=>{
          //创建一个微任务等待 promise2 完成初始化
          queueMicrotask(()=>{
            try{
              const x = successCallback(this.result)
               // 传入 resolvePromise 集中处理
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值 直接调用resolve
              // 如果是promise对象 查看promsie对象返回的结果
              // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
              resolvePromise(promsie2,x,resolve,reject)
            }catch(e){
              reject(e)
            }
          })
        }

        const rejectedMicrotask = ()=>{
          queueMicrotask(()=>{
            try {
              const x = failCallback(this.result)
              // 传入 resolvePromise 集中处理
              resolvePromise(promsie2,x,resolve,reject)
            } catch (error) {
              reject(error)
            }
          })
        }
        
        if(this.status === FULFILLED){
          fulfilledMicrotask()
        }else if(this.status === REJECTED){
          rejectedMicrotask()
        }else if(this.status === PENDING){
          // 等待
           // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
        // 等到执行成功失败函数的时候再传递
          this.fulledCallbacks.push(fulfilledMicrotask)
          this.rejectedCallbacks.push(rejectedMicrotask)

        }

    })
    return promsie2

  }
  catch(reject){
    return this.then(undefined,reject)
  }

  /**
   * 都会调用
   */
  finally(callback){
    return this.then(value=>{
      return myPromise.resolve(callback()).then(()=>value)
    },reason=>{
      return myPromise.resolve(callback()).then(()=>{throw reason})
    })
  }
  /**
   * 静态方法
   * */
  static resolve(parameter){
    if(parameter instanceof myPromise){
      return parameter
    }
    return new myPromise(resolve=>{
      resolve(parameter)
    })
  }
  static reject(reason){
    return new myPromise((resolve,reject)=>{
      reject(reason)
    })
  }



  /**
   * 等待所有一起执行
   * */
  static all(array){
    let result =[] //结果存储
    let index =0
    return new myPromise((resolve,reject)=>{
      if (Array.isArray(array)) {
        function dalData(key,value){
          result[key] = value
          index++
          if(index === array.length){
            resolve(result)
          }
        }
        for (let i=0;i<array.length;i++){
          let current = array[i]
          if(current instanceof myPromise){
            //promise 对象处理
            current.then(value=>dalData(i,value),reason=>reject(reason))
          }else {
            dalData(i,array[i])
          }
        }
      }else {
        return reject(new TypeError('Argument is not iterable'))
      }
    })
  }

}


function resolvePromise(promise2, x, resolve, reject) {

  if(promise2 === x){
    return reject(new TypeError('The promise and the return value are the same'))
  }
 if(typeof x ==='object' || typeof x === 'function'){
    if(x === null){
      return resolve(x)
    }
    let then
    try {
      then = x.then
    } catch (error) {
      return reject(error)
    }

    if(typeof then === 'function'){
      let called = false
      try {
        then.call(x,y=>{
          if(called) return
          called = true
          resolvePromise(promise2,y,resolve,reject)
        },
        r=>{
          if(called) return
          called = true
          reject(r)
        }
        )
      } catch (error) {
        if(called) return 
        reject(error)
      }
    }else{
      resolve(x)
    }

  }else{
    resolve(x)
  }
}


/*
myPromise.resolve().then(() => {
  console.log(0);
  return myPromise.resolve(4);
}).then((res) => {
  console.log(res)
})

myPromise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() =>{
  console.log(6);
})
*/

function p1 () {
  return new myPromise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p1')
    }, 2000)
  })
}
function p2 () {
  return new myPromise(function (resolve, reject) {
    // reject('失败')
    resolve('成功');
  })
}

p2()
   .then(value => console.log(value))
   .catch(reason => console.log(reason))
   .finally(a=>console.log('这是很明'))

p1().then(f=>console.log(f))