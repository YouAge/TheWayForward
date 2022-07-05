console.log('123')
import Vue from 'vue'
import App from "./App.vue";
import '@/style/globle.less'

const sfc= require('vue-loader!./App.vue')
console.log(sfc)
new Vue({
  render: (h) => h(App)
}).$mount("#app");
