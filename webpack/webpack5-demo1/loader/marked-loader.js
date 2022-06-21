// 处理 md 文件

const {marked} = require("marked");
module.exports = function (source) {
  const html = marked(source)
  console.log(html)
  return html
}
