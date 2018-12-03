import Vue from 'vue'
import VeeValidate, {
    Validator
} from 'vee-validate';
/**
 * 验证配置
 */
const config = {
    aria: true,
    classNames: {},
    classes: false,
    delay: 0,
    dictionary: null,
    errorBagName: 'errors', // change if property conflicts
    events: 'input|blur',
    fieldsBagName: 'fields',
    i18n: null, // the vue-i18n plugin instance
    i18nRootKey: 'validations', // the nested key under which the validation messsages will be located
    inject: true,
    locale: 'zh_CN',
    strict: true,
    validity: false,
};
/** 
 * 表单验证
 */
export default {
    LoadValidator() {
        Vue.use(VeeValidate, config);
        Validator.localize({
            zh_CN: {
                messages: {
                    required: function(name) {
                        // return "*" + document.getElementsByName(name)[0].placeholder + "不能为空！";
                        return "*不能为空！"
                    },
                }
            }
        });
        Validator.extend('email', {
            getMessage: function() {
                return "*邮箱格式无效！"
            },
            validate: function(value) {
                return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
            }
        });
        Validator.extend('zhname', {
            getMessage: function() {
                return "*中文名称无效！"
            },
            validate: function(value) {
                return /[\u4e00-\u9fa5]/.test(value);
            }
        });
        Validator.extend('password', {
            getMessage: function() {
                return "*密码6-16位！"
            },
            validate: function(value) {
                return /^\d{6,16}$/.test(value);
            }
        });
        Validator.extend('password2', {
            getMessage: function() {
                return "*密码输入不一致！"
            },
            validate: function(value) {
                return document.getElementsByName("userpwd")[0].value === value;
            }
        });
    }
}