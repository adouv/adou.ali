import AlertComponent from "./alert.vue";
/** 
 * Alert弹出框扩展
 * 页面调用：this.$alert('这里是弹出内容');
 * 服务调用：先引用Vue
 *          import Vue from 'vue';
 *          调用：Vue.alert('这里是弹出内容');
*/
export default {
  install(Vue, PluginOptions = {}) {
    const AlertConstructor = Vue.extend(AlertComponent);
    let alert = null;

    function $alert(message) {
      alert = new AlertConstructor();
      alert.$mount();
      document.querySelector(PluginOptions.container || 'body').appendChild(alert.$el);
      alert.message = message;
      alert.show = true;
    }

    Vue.alert = Vue.prototype.$alert = $alert;
  }
}
