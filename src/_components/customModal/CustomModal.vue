<template>
  <div class="modal-extends" v-if="show">
    <div class="modal fade" v-if="show" v-bind:class="{in:show}" id="examplePositionTop" aria-hidden="true" aria-labelledby="examplePositionTop" role="dialog" tabindex="-1">
      <div class="modal-dialog" :class="modalOptions.position">
        <div class="modal-content">
          <div class="modal-body">
            <component :is="modalOptions.componentName" :params="modalOptions.params" @save="btnSave();" @close="btnClose();"></component>
          </div>
          <!-- <div class="modal-footer">
                      <button type="button" class="btn btn-default" @click="btnClose();">取消</button>
                      <button type="button" class="btn btn-primary" @click="btnSave();">保存</button>
                  </div> -->
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade" v-if="show" v-bind:class="{in:show}"></div>
  </div>
</template>

<script>
export default {
  name: "CustomModalComponent",
  props: {},
  data() {
    return {
      show: false,
      modalOptions: {
        position: "modal-top",
        componentName: null,
        params: {},
        save: (params, close) => {}
      }
    };
  },
  methods: {
    btnClose() {
      this.show = !this.show;
    },
    btnSave() {
      this.modalOptions.save(this.modalOptions.params, this.btnClose);
    }
  },
  computed: {},
  created() {},
  beforeDestroy() {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: block;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
</style>

