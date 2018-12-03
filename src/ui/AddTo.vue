<template>
    <div class="page page-display">
        <div class="page-content">
            <a @click="close();">关闭</a><a @click="save();">保存</a>
            <div class="row row-lg">
                <div class="col-sm-12 col-md-12">
                    <div class="example-wrap">
                        <h4 class="example-title">订单号{{params.OrderId}}</h4>
                        <input type="text" class="form-control" placeholder="订单号" v-model="params.OrderId">
                    </div>
                </div>
                <hr>
                <div class="col-sm-12 col-md-12">
                    <div class="example-wrap">
                        <h4 class="example-title">还款状态{{params.Status}}</h4>
                        <select class="form-control" v-model="params.Status" name="Status" id="Status">
                            <option v-for="item in StatusArray" :key="item.id" v-bind:value="item.id">
                                {{item.text}}
                            </option>
                        </select>
                    </div>
                </div>
                <hr>
                <div class="col-sm-12 col-md-12">
                    <div class="example-wrap">
                        <h4 class="example-title">是否显示{{params.IsShow}}</h4>
                        <div class="radio-custom radio-primary" v-for="item in IsShowArray" :key="item.id">
                            <input type="radio" :id="item.id" name="IsShow" v-bind:value="item.id" v-model="params.IsShow">
                            <label :for="item.id">{{item.text}}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "AddToComponent",
  props: {
    params: {
      type: Object,
      default: {}
    }    
  },
  data() {
    return {
      StatusArray: [
        { id: 0, text: "全部" },
        { id: 1, text: "未还款" },
        { id: 2, text: "账单还款" },
        { id: 3, text: "提前还款" },
        { id: 4, text: "逾期还款" },
        { id: 5, text: "已确认还款" }
      ],
      IsShowArray: [{ id: 0, text: "否" }, { id: 1, text: "是" }]
    };
  },
  methods:{
      save(){
        this.$emit('save');
      },
      close(){
          this.$emit('close');
      }
  }
};
</script>

<style lang="scss">
.page-content {
  padding: 0px;
  .example-wrap {
    margin-bottom: 10px !important;
  }
}
</style>
