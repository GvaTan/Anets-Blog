// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import VueLazyLoad from 'vue-lazyload';
//使用图片懒加载
Vue.use(VueLazyLoad,{
  preLoad:1.3,
  error:'http://img03.taobaocdn.com:80/tfscom/TB1I_UadliE3KVjSZFMXXbQhVXa',
  loading:'http://img02.taobaocdn.com:80/tfscom/TB1J4pYXAY2gK0jSZFgXXc5OFXa',
  attempt:1
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
