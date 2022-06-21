

const loaderUtils=require("loader-utils");
const {validate} = require('schema-utils');
let fs =require('fs')
module.exports = function (source){
  this.cacheable && this.cacheable()
  let option = loaderUtils.getOptions(this)
  let cb = this.async()
  let schema = {
    type:"object",
    properties:{
      text:{
        type: 'string'
      },
      filename:{
        type: 'string'
      }
    }
  }
  validate(schema,option,'banner-loader')
  if(option.filename){
    this.addDependency(option.filename); // 自动的添加文件依赖
    fs.readFile(option.filename,'utf8',function (err,data) {
      cb(err,`/**${data}**/${source}`)
    })
  }else {
    cb(null,`/**${option.text}**/${source}`)
  }
}
