
const path = require('path')
const webpack = require('webpack')
const FooterPlugin = require('./plugin/FooterPlugin.js')
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
      {test: /.md$/, use: ['html-loader',path.resolve(__dirname,'./loader/marked-loader.js')]},
      {test: /.js$/, use: {
          loader: path.resolve(__dirname,'./loader/banner-loader.js'),
          options:{
            text:'甲乐',
            filename: path.resolve(__dirname,'banner.js')
          }
        }},
    ]
  },
  plugins: [
     new webpack.BannerPlugin({
       banner: "欢迎大家 来学习 webpack"
     }),
    new FooterPlugin({
      banner: "webpack 插件"
    })
  ]
}
