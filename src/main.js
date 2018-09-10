// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './style/base.less'
import hljs from 'highlight.js';
import 'highlight.js/styles/solarized-dark.css';

Vue.config.productionTip = false
Vue.use(elementUi)
// 自定义指令: 页面代码渲染, 使用方法: 在代码标签最外层添加'v-highlight'
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
