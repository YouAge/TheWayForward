
let babel = require('@babel/core')
let loaderUtils = require('loader-utils')
function loader(source){
  let option = loaderUtils.getOptions(this)
  let cd = this.async()
  babel.transform(source,{
    ...optionm

  },function (err,result) {
    cd(err,result)
  })

  return source
}

module.exports = loader
