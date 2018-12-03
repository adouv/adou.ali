import CustomModalComponent from "./CustomModal.vue";

export default {
  install(Vue, PluginOptions = {}) {

    Object.defineProperty(Vue.prototype, '$cusmodal', {
      get() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        return (options) => {
          const Constructor = Vue.extend(CustomModalComponent);
          const Instance = new Constructor({
            data() {
              return {
                show: true,
                modalOptions: options
              }
            }
          }).$mount(div);
        }
      }
    });
    
    Vue.cusmodal = Vue.prototype.$cusmodal;
  }
};
