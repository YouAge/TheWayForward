export default ()=>{
  const element = document.createElement('h2')
  element.textContent = 'webpack'
  element.addEventListener('click',()=>alert('你好呀'))
  return element
}
