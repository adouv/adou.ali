import UploadComponent from "./upload.vue";

export default {
  install(Vue, PluginOptions = {}) {
    const Constructor = Vue.extend(UploadComponent);
    Vue.component('ad-upload', Constructor);
  }
}
