import Vue from 'vue'
import datePickerDirective from "./date-picker-directive";
import downloadDirective from "./download-directive";


export default {
  LoadDirectives() {
    Vue.use(datePickerDirective);
    Vue.use(downloadDirective);
  }
}
