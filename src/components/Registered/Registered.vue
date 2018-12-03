
<template>
  <div class="page page-display">
    <div class="modal-header">
      <button type="button" class="close" @click="close();">
        <span aria-hidden="true">×</span>
      </button>
      <h4 class="modal-title" id="exampleModalTitle">
        新用户注册
      </h4>
    </div>

    <div class="page-content">
      <div class="row row-lg">
        <div class="form-group">
          <div class="input-group input-group-icon">
            <span class="input-group-addon">
              <span class="icon wb-book" aria-hidden="true"></span>
            </span>
            <input type="text" v-model="params.companyname" name="companyname" v-validate="'required|zhname'" class="form-control" placeholder="公司名称">
          </div>
          <span class="validate-tip" v-show="errors.has('companyname')">{{ errors.first('companyname')}}</span>
        </div>
        <div class="form-group">
          <div class="input-group input-group-icon">
            <span class="input-group-addon">
              <span class="icon wb-user" aria-hidden="true"></span>
            </span>
            <input type="text" v-model="params.username" name="username" v-validate="'required|email'" class="form-control" placeholder="用户名">
          </div>
          <span class="validate-tip" v-show="errors.has('username')">{{ errors.first('username')}}</span>
        </div>
          <div class="form-group">
              <div class="input-group input-group-icon">
                <span class="input-group-addon">
                  <span class="icon wb-lock" aria-hidden="true"></span>
                </span>
                <input type="password" name="userpwd" v-validate="'required|password'" v-model="params.userpwd"  class="form-control" placeholder="密码">
                </div>
                <span class="validate-tip" v-show="errors.has('userpwd')">{{ errors.first('userpwd')}}</span>
            </div>
            <div class="form-group">
              <div class="input-group input-group-icon">
                <span class="input-group-addon">
                  <span class="icon wb-lock" aria-hidden="true"></span>
                </span>
                <input type="password" name="userpwd2" v-validate="'password2'" class="form-control" placeholder="确认密码">
              </div>
              <span class="validate-tip" v-show="errors.has('userpwd2')">{{ errors.first('userpwd2')}}</span>
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-block btn-primary" @click="save();">立即注册</button>
            </div>
            <div class="col col-lg">
      <span class="col-front">或</span>
    </div>

    <div class="col col-btn">
      <button type="button" class="btn btn-block btn-success" @click="close();">直接登录</button>
    </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "RegisteredComponent",
  props: {
    params: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
 
    };
  },
  methods: {
    save() {
      this.$emit("save");
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.page.page-display {
  .modal-header {
    background-color: white;
  }
  .page-content {
    .row.row-lg {
      .form-control {
        width: 55%;
       
      }
      .validate-tip{
            color: red;
        }
      .btn.btn-block.btn-primary {
        width: 20%;
      }
    }
    .col.col-lg {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 64%;
      margin: 0;
      padding: 0;
      width: auto;
      height: 50%;
      line-height: 0;
      text-align: center;
      -webkit-transform: translateX(-50%);
      transform: translateX(-60%);
      .col-front {
        position: absolute;
        color: black;
        top: 17%;
      }
    }

    .col.col-lg:before,
    .col.col-lg:after {
      position: absolute;
      left: 50%;
      content: "";
      z-index: 3;
      border-left: 1px solid rgba(34, 36, 38, 0.15);
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      width: 0;
      height: calc(85% - 3rem);
    }
    .col.col-lg:before {
      top: -60%;
    }
    .col.col-lg:after {
      top: auto;
      bottom: 5%;
    }
    .col.col-btn {
      position: absolute;
      z-index: 2;
      top: 50%;
      margin: 0;
      padding: 0;
      width: 20%;
      height: 70%;
      line-height: 1;
      text-align: center;
      transform: translateX(-50%);
      left: 80%;
    }
  }
}
</style>