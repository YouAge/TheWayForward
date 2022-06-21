
const { ConcatSource } = require("webpack-sources");
class FooterPlugin{
  constructor(options) {
    console.log()
  }

  apply(compiler){
    console.log('')
    compiler.hooks.compilation.tap('FooterPlugin',compiltaion=>{
      compiltaion.hooks.processAssets.tap('FooterPlugin',()=>{


      })
    })
  }


}
