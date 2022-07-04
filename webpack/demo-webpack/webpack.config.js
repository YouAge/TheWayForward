const path = require('path')
module.exports = {
  mode: 'development', // // "development", // production
  // devtool: 'none',
  entry: './src/index.js', // 入口文件地址
  // 出口地址， 可以是单个{}，也可以是多个[{}]
  output:{
    path: path.resolve( __dirname,'./dist'),
    filename: 'bundle.js'
  },
}
