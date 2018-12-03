import IdentifyComponent from "./identify.vue";

export default {
  install(Vue, PluginOptions = {}) {
    const Constructor = Vue.extend(IdentifyComponent);
    Vue.component('ad-code', Constructor);
  }
}
