import './index.css'
const title = require('./title.js')
console.log('hello webapck',title);
console.log('hello webapck2');

import './test.jl'
import  md from './webpack.md'

console.log(md)
const div =  document.createElement('div')
div.innerHTML = md
if(document.body){
  document.body.appendChild(div)
}

