const path = require('path')
const modules = require('./build/module.js')
const {DefinePlugin} = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackBar = require('webpackbar');
// const chalk = require("chalk");
module.exports =  {
  mode: "development",
  devtool: 'source-map', // 编译模式
  entry: './src/main.js',
  output:{
    path: path.resolve( __dirname,'./dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: modules(),
  plugins: [
   new HtmlWebpackPlugin({
     filename: "index.html",
     template: path.resolve(__dirname,'./public/index.html')
   }),
     new CleanWebpackPlugin(), // 清楚
     // html中使用 <%= BASE_URL %>
    new DefinePlugin({
      BASE_URL:'"./"',
      // TITLE: '项目
    }),
     // 拷贝某个目录下
     new CopyWebpackPlugin(
        {
          patterns: [
             'public/favicon.ico',
             'public/**/*',
            { from:'public/**/*', force: true,
              toType: 'dir',
              globOptions:{ignore:["**/index.html",  "**/.DS_Store"]} },
          ],
        }
     ),
     new VueLoaderPlugin(), // vue解析
    // 进度条
    new WebpackBar({
      color: "#85d",  // 默认green，进度条颜色支持HEX
      basic: false,   // 默认true，启用一个简单的日志报告器
      profile:false,  // 默认false，启用探查器。
    })
  ]
}
