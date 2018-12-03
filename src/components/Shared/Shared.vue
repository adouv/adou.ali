<template>
    <div class="wrapper">
        <app-header></app-header>
        
        <app-sidebar></app-sidebar>
        
        <div class="content-wrapper" @click="contentToggle($event);">
            <section class="content">
                <router-view></router-view>
            </section>
        </div>

        <app-footer></app-footer>
        
    </div>
</template>

<script>
/**
 * 引入js文件
 */
import "@lib/bootstrap/dist/js/bootstrap.min";
import "@node/bootstrap-datepicker/dist/js/bootstrap-datepicker.min";
import "@node/bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min";
/**
 * 引入自定义组件
 */
import HeaderComponent from "./header";
import SidebarComponent from "./sidebar";
import FooterComponent from "./footer";
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import Service from "@/_common/index";

export default {
  name: "SharedComponent",
  components: {
    "app-header": HeaderComponent,
    "app-sidebar": SidebarComponent,
    "app-footer": FooterComponent
  },
  methods: {
    contentToggle($event) {
      Service.Element.contentToggle($event, this.sidebarList);
    }
  },
  computed: {
    ...mapGetters(["sidebarList"])
  }
};
</script>
