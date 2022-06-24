console.log('123')
import Vue from 'vue'
import App from "./App.vue";
import '@/style/globle.less'
new Vue({
  render: (h) => h(App)
}).$mount("#app");
