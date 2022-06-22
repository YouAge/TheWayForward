
const { ConcatSource } = require("webpack-sources");
class FooterPlugin{
  // 获取参数
  constructor(options) {
    this.options = options
  }
  apply(compiler){
    compiler.hooks.compilation.tap('FooterPlugin',compiltaion=>{ // 注册组件
      compiltaion.hooks.processAssets.tap('FooterPlugin',()=>{
        const chunks =  compiltaion.chunks
        console.log('FooterPlugin', chunks)
        for (const chunks of  compiltaion.chunks){
          for(const  file of chunks.files){ // 获取文件
            const comment = `/* ${this.options.banner} */`
            // 更新内容
            compiltaion.updateAsset(file,old=>new ConcatSource(old,'\n',comment))
          }
        }
      })
    })
  }
}

module.exports = FooterPlugin
