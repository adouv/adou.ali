<template>
    <aside class="main-sidebar">
        <section class="sidebar">
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header">导航</li>
                <li class="active treeview">
                    <router-link to="/">
                        <i class="fa fa-dashboard"></i>
                        <span>控制面板</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </router-link>
                </li>
                <li class="treeview" v-for="item in sidebarList" :key="item.id" v-bind:class="{'menu-open':item.isSubShow}">
                    <a href="Javascript:void(0);" @click="showToggle(item);">
                        <i :class="item.icon"></i>
                        <span>{{item.text}}</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <transition name="sidebar">
                        <ul class="treeview-menu" v-show="item.isSubShow" transiton="sidebar">
                            <li v-for="items in item.children" :key="items.id">
                                <router-link :to="items.path">
                                    {{items.text}}
                                </router-link>
                            </li>
                        </ul>
                    </transition>
                </li>
            </ul>
        </section>
    </aside>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "SidebarComponent",
  methods: {
    ...mapActions(["sidebarListAsyn"]),
    showToggle(item) {
      this.sidebarList.forEach(element => {
        if (item.id == element.id) {
          item.isSubShow = !item.isSubShow;
        } else {
          element.isSubShow = false;
        }
      });
    }
  },
  created() {
    this.sidebarListAsyn();
  },
  computed: {
    ...mapGetters(["sidebarList"])
  }
};
</script>

<style lang="scss">
.sidebar-enter-active,
.sidebar-leave-active {
  transition: opacity 0.2s;
}
.sidebar-enter,
.sidebar-leave-active {
  opacity: 0;
}
</style>

