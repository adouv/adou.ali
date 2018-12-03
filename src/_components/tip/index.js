import TipComponent from "./tip.vue";
/** 
 * Tip提示扩展  默认带消失时间参数的，用的时候可以不写
 * 页面调用：this.$tip('这里是提示内容');
 *          this.$tip('这里是提示内容',5000);
 * 服务调用：先引用Vue
 *          import Vue from 'vue';
 *          调用：Vue.tip('这里是提示内容');
 *               Vue.tip('这里是提示内容'，5000);
*/
export default {
  install(Vue, PluginOptions = {}) {
    const TipConstructor = Vue.extend(TipComponent);
    let tip = null;

    function $tip(message, duration = 3500) {
      tip = new TipConstructor();
      tip.$mount();
      document.querySelector(PluginOptions.container || 'body').appendChild(tip.$el);
      tip.message = message;
      tip.show = true;
      setTimeout(() => {
        tip.show = false;
      }, duration)
    }

    Vue.tip = Vue.prototype.$tip = $tip;
  }
}
