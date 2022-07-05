
```js
import { render, staticRenderFns } from "./home.vue?vue&type=template&id=1fa66eb8&scoped=true&"
import script from "./home.vue?vue&type=script&lang=js&"
export * from "./home.vue?vue&type=script&lang=js&"


/* normalize component */
import normalizer from "!../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "1fa66eb8",
  null
  
)

/* hot reload */
if (module.hot) {
  var api = require("D:\\2022年前端\\TheWayForward\\webpack\\web5-model\\node_modules\\vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('1fa66eb8')) {
      api.createRecord('1fa66eb8', component.options)
    } else {
      api.reload('1fa66eb8', component.options)
    }
    module.hot.accept("./home.vue?vue&type=template&id=1fa66eb8&scoped=true&", function () {
      api.rerender('1fa66eb8', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/home.vue"
export default component.exports
```