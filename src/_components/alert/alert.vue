<template>

<div class="alertify" v-show="show">
    <div class="dialog">
        <div>
            <p class="msg">{{message}}</p>
            <nav>
                <button class="ok btn btn-primary" tabindex="1" @click="close();">确定</button>
            </nav>
        </div>
    </div>
</div>

</template>


<script>
export default {
  name: "AlertComponent",
  data() {
    return {
      message: "这是一个 alert 对话框",
      show: false
    };
  },
  methods: {
    close() {
      this.show = false;
    }
  }
};
</script>
