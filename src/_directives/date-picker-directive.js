/**
 * 时间指令
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
    Vue.directive('datePicker', {
      /**
       * 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
       */
      bind(el, binding, vnode, oldVnode) {
        console.log("bind");
        /**
         * 设置默认日期
         */
        let _date = new Date();
        let _nowYear = _date.getFullYear().toString();
        let _nowMonth = (_date.getMonth() + 1).toString();
        if (_nowMonth.length == 1) {
          _nowMonth = 0 + _nowMonth;
        }
        let _nowDay = _date.getDate().toString();
        if (_nowDay.length == 1) {
          _nowDay = 0 + _nowDay;
        }
        let value = binding.value[el.name];
        if (value === null || value === '') {
          binding.value[el.name] = _nowYear + '-' + _nowMonth + '-' + _nowDay;
        }
        /**
         * 时间格式化参数
         * @param format 时间格式
         * @param formatArr 时间格式数组
         */
        let format = '';
        let formatArr = ['yyyy', 'mm', 'dd'];
        for (let i = 0; i < formatArr.length; i++) {
          if (format != '') format += '-';
          format += formatArr[i];
        }
        /**
         * 时间控件参数
         * @param language 语言
         * @param autoclose 选中之后自动隐藏日期选择框
         * @param clearBtn 是否显示清除按钮
         * @param todayBtn 是否显示今日按钮
         * @param format 日期格式 yyyy-MM-dd
         * @param todayHighlight 当日为高亮显示
         * @param startDate 最小限制日期
         * @param endDate 最大限制日期
         * 
         */
        let options = {
          language: "zh-CN",
          autoclose: true,
          clearBtn: false,
          todayBtn: false,
          format: format,
          todayHighlight: true
        };
        /**
         * 绑定时间控件
         */
        $(el).datepicker(options);
      },
      /**
       * 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
       */
      inserted(el, binding, nodeDom) {
        console.log('inserted');
      },
      /**
       * 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
       */
      update(el, binding, nodeDom) {
        console.log('update');
        /**
         * 当前元素发生改变时,更新v-model
         */
        el.onchange = function () {
          binding.value[el.name] = el.value;
        }
        //给当前元素添加监听事件
        el.addEventListener('input', el.onchange);
      },
      /**
       * 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
       */
      componentUpdated(el, binding, nodeDom) {
        console.log('componentUpdated');
      },
      /**
       * 只调用一次，指令与元素解绑时调用。
       */
      unbind(el, binding, nodeDom) {
        console.log('unbind');
        //删除事件
        el.removeEventListener('input', el.onchange);
      }
    })
  }
}
