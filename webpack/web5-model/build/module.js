const path = require("path");


module.exports = function () {
  return {
    rules: [
      {test: /\.vue$/, use: ["vue-loader"]},
      {test:/\.css$/,use: ['vue-style-loader', 'style-loader','css-loader',]},
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader',{
          // 配置全局变量
          loader: 'style-resources-loader' ,
          options:{
            patterns:[
               path.resolve(__dirname,'../','src/style/*.less')
            ],
            injector: 'append' // prepend 或者 append， 表示资源导入的位置，在之前还是之后，样式后导入的会覆盖前面导入的
            // resolveUrl： 是否允许@import形式导入，默认true
          }
        }]
      },
       //https://webpack.docschina.org/loaders/babel-loader/
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      { // 配置图片文件加载
        test: /\.(png|jpe?g|gif|tif?f|bmp|webp|svg)(\?.*)?$/,
        exclude:"/node_modules/",
        // type: 'asset/resource',
        generator:{
          filename: 'img/[name][hash:8].[ext]' // 打包路径
        },
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024*10,// 小于10k的图片采用baseurl，大于和等于8k的就正常打包成图片
            // esModule: false,
            // filename:"img/[name].[ext]"
          }
        },
        // type: 'javascript/auto'
      }, { // 配置字体文件加载
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        exclude: /(node_modules|bower_components)/,
        generator:{
          filename: '/font/[name][hash:8].[ext]' // 打包路径
        },
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            limit: 10000,
            name:"/font/[name].[ext]"
          }
        }
      }
    ]

  }
}
