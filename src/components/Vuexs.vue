<template>
  <div class="page">
    <div class="page-header">
        <h1 class="page-title">状态</h1>
    </div>

    <div class="page-content">
        <div class="panel">
            <div class="panel-body container-fluid">
                <div>
                  {{name}}<br />
                  {{age}}<br />
                  {{other}}
                </div>
                <button type="button" class="btn btn-primary" @click="btnGet();">get</button>
                <button type="button" class="btn btn-primary" @click="btnAdd();">add</button>
                <button type="button" class="btn btn-primary" @click="btnModify();">modify</button>
                <button type="button" class="btn btn-primary" @click="btnDelete();">delete</button>

                <button type="button" class="btn btn-primary" @click="showModal();">modal</button>
                <button type="button" class="btn btn-primary" @click="showTip();">tip</button>
                <button type="button" class="btn btn-primary" @click="showAlert();">alert</button>
            </div>
        </div>
    </div>
    <!-- <modal title="Modal Title" :show="show" @ok="ok" @cancel="cancel">
        Modal Text
    </modal> -->
    <!-- <component :is="currentView"></component> -->
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "StoreComponent",
  components: {},
  data() {
    return {
      show: false
    };
  },
  methods: {
    showModal() {
      this.$modal("全局", true);
    },
    showTip() {
      this.$tip("这个是tip");
    },
    showAlert() {
      this.$alert("这个是alert");
    },
    ok() {
      this.show = true;
    },
    cancel() {
      this.show = false;
    },
    btnList() {},
    btnGet() {
      alert(this.other);
    },
    btnAdd() {},
    btnModify() {
      let item = { name: "adou", age: 26 };
      this.nameAsyn(item);
    },
    btnDelete() {},
    ...mapMutations({
      setName: "SET_NAME"
    }),
    ...mapActions(["nameAsyn"])
  },
  computed: {
    ...mapGetters(["name", "age", "other"]),
    currentView() {
      return ModalComponent;
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-body {
  span {
    font-size: 20px;
    color: #f00;
  }
}
</style>


