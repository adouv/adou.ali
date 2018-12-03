<template>
  <div class="page">
    <div class="page-header">
        <h1 class="page-title">弹出框/提示框</h1>
    </div>

    <div class="page-content">
        <div class="panel">
            <div class="panel-body container-fluid">
              <button type="button" class="btn btn-primary" @click="showModal();">modal</button>
              <button type="button" class="btn btn-primary" @click="showCusModal();">customModal</button>
              <button type="button" class="btn btn-primary" @click="showTip();">tip</button>
              <button type="button" class="btn btn-primary" @click="showAlert();">alert</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import AddComponent from "@/ui/Add.vue";
import AddToComponent from "@/ui/AddTo.vue";
export default {
  name: "UiAlertifyComponent",
  data() {
    return {
      show: false
    };
  },
  methods: {
    showModal() {
      let modalOptions = {
        componentName: AddComponent,
        save: (params, close) => {
          this.demos(params, close);
          //alert(JSON.stringify(params));
        },
        params: { OrderId: "7842091401806", Status: 1, IsShow: 1 }
      };
      this.$modal(modalOptions);
    },
    showCusModal() {
      let modalOptions = {
        componentName: AddToComponent,
        save: function(params) {
          alert(JSON.stringify(params) + "1");
        },
        params: { OrderId: "订单号", Status: 1, IsShow: 1 }
      };
      this.$cusmodal(modalOptions);
    },
    showTip() {
      this.$tip("全局tip");
    },
    showAlert() {
      this.$alert("全局alert");
    },
    save(params) {
      console.log(params);
    },
    demos(params, close) {
      console.log(params);
    }
  }
};
</script>
