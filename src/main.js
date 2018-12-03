// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Service from "@/_common/index";
import Components from "@/_components/index";
import Directives from "@/_directives/index";
import Validtor from "@/_validator/index";
import store from "@/_store/store";
import 'es6-promise/auto';
import '@lib/bootstrap/dist/css/bootstrap.min.css';
import '@node/bootstrap-select/dist/css/bootstrap-select.min.css';
import "@node/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import '@scss/index.scss';
import '@node/font-awesome/scss/font-awesome.scss';
import '@lib/Ionicons/scss/ionicons.scss';
import '@lib/webicons/scss/web-icons.scss';
import '@lib/themify-icons/themify-icons.css';

Vue.config.productionTip = false
//http请求
Service.Interceptor.LoadAxios();
//全局组件
Components.LoadComponets();
//全局指令
Directives.LoadDirectives();
//表单验证
Validtor.LoadValidator();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
