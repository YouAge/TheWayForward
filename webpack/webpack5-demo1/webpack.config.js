
const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'development', // "development", // production
  // devtool: 'source-map', // 编译模式
  entry: './src/index.js',
  output:{
    path: path.resolve( __dirname,'./dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /.css$/, use: [ 'style-loader','css-loader']},
      {test: /.md$/, use: ['html-loader',path.resolve(__dirname,'./loader/marked-loader.js')]}
      // {test: /.jl$/, use: [path.resolve(__dirname,'./loader/jl-loader.js')]}
    ]
  },
  plugins: [
     new webpack.BannerPlugin({
       banner: "欢迎大家 来学习 webpack"
     })
  ]
}
