
const REG = /<script>([\s\S]+?)<\/script>/
module.exports = function (source) {

  console.log(source,'-=== jl =loader')
  const  __source = source.match(REG)

  return __source && __source[1] ? __source[1]: source
}



if(require.main === module){
  const soure = `<script>
const p = '12334'
console.log(p);
</script>`
  const mathc = soure.match(REG)
  console.log(mathc)
}
