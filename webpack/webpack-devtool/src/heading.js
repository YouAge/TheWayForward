
export default ()=>{

  console.log('甲乐科技')

  const element = document.createElement('h2')

  element.textContent = '欢迎加入 甲乐科技 大家庭'
  element.classList.add('le')
  element.addEventListener('click',()=>{
    alert('欢迎学习 webpack')
  })
  return element
}
