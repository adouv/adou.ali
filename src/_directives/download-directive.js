import Vue from 'vue'
import Service from "../_common/index";
/**
 * 下载指令
 * @param {*} el 指令所绑定的元素，可以用来直接操作 DOM 。
 * @param {*} binding 一个对象，包含以下属性：
 * @param {*} vnode Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
 * @param {*} oldVnode 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
 */
export default {
  /**
   * 安装指令方法
   * @param {*} Vue Vue实例
   * @param {*} PluginOptions 选项
   */
  install(Vue, PluginOptions = {}) {
    Vue.directive('downloadDir', {
      /**
       * 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
       */
      bind(el, binding, vnode, oldVnode) {
        //请求地址
        let url = binding.value.url;
        //请求参数
        let params = Service.Encrypt.DataEncryption(binding.value.params);
        //文件名称
        let fileName = el.attributes["filename"].nodeValue;
        /**
         * 当前元素点击请求事件
         */
        el.onclick = function () {
          el.setAttribute("disabled", "disabled");
          //下载前验证
          let valid = binding.value.beforeCallback();
          if (valid) {
            setTimeout(function () {
              if (el.getAttribute("disabled") == "disabled") {
                Vue.http.post(url, params)
                  .then(response => {
                    let data = response.data;
                    if (data.Status == 100 || data.Data != null) {
                      if (data.ErrorCode == "1000") {
                        Vue.tip(data.Message);
                      } else {
                        let url = Service.Util.excelBase64ToBlob(data.Data);
                        el.setAttribute("href", url);
                        el.setAttribute("download", fileName);
                        el.setAttribute("onclick", "");
                        el.click("return false");
                      }
                    } else {
                      Vue.tip(data.Message);
                    }
                    el.removeAttribute("disabled");
                  }, error => {
                    el.removeAttribute("disabled");
                  });
              }
            }, 2000);
          } else {
            el.removeAttribute("disabled");
          }
        }
      },
      /**
       * 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
       */
      inserted(el, binding, nodeDom) {},
      /**
       * 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
       */
      update(el, binding, nodeDom) {},
      /**
       * 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
       */
      componentUpdated(el, binding, nodeDom) {},
      /**
       * 只调用一次，指令与元素解绑时调用。
       */
      unbind(el, binding, nodeDom) {}
    })
  }
}
