<template>
  <div class="page page-index">
    <div class="page-header">
        <h1 class="page-title">控制面板</h1>
    </div>
    
    <div class="page-content">
        <div class="media account-info">
            <div class="media-left">
                <div class="avatar avatar-online">
                    <img src="http://cdn.admui.com/demo/pjax/1.3.0/images/avatar.svg" alt="xiaxuan@admui_demo">
                    <i class="avatar avatar-busy"></i>
                </div>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    欢迎您，xiaxuan@admui_demo
                    <small>系统管理员</small>
                </h4>
                <p>
                    <i class="icon icon-color wb-bell" aria-hidden="true"></i> 这是您第 158889 次登录，上次登录日期：2018-5-11 17:30:08，详细信息请查看
                    <a data-pjax="" href="javascript:;" target="_blank">日志</a>
                    ，如果不是您本人登录，请及时
                    <a data-pjax="" href="javascript:;" target="_blank">修改密码</a>
                    。
                </p>
            </div>
            <div class="media-right">
                <a href="javascript:;" data-pjax="" target="_blank" class="btn btn-outline btn-success btn-outline btn-sm">账户管理</a>
            </div>
        </div>
        <div class="row margin-top-10" data-plugin="matchHeight" data-by-row="true">
            <div class="col-md-12" style="height: 540px;">
                <div class="panel introduce-info">
                    <div class="panel-heading">
                        <ul class="panel-actions">
                            <li>
                                <a href="http://docs.admui.com/" target="_blank">更多</a>
                            </li>
                        </ul>
                        <h1 class="panel-title">基本介绍</h1>
                    </div>
                    <div class="panel-body">
                        <div class="media">
                            <div class="media-left">
                                <a href="javascript:;">
                                    <img class="media-object" src="http://cdn.admui.com/demo/pjax/1.3.0/images/admui-desktop.svg" alt="...">
                                </a>

                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">Admui 通用管理系统快速开发框架</h3>
                               
                                    <p>Admui 是一个基于最新 Web
                                        技术的企业级通用管理系统快速开发框架，可以帮助企业极大的提高工作效率，节省开发成本，提升品牌形象。
                                    </p>
                                    <p>您可以 Admui 为基础，快速开发各种MIS系统，如CMS、OA、CRM、ERP、POS等。</p>
                                    <p>Admui 紧贴业务特性，涵盖了大量的常用组件和基础功能，最大程度上帮助企业节省时间成本和费用开支。</p>

                                <div>
                                    <a href="javascript:;" class="btn btn-success btn-sm btn-outline btn-round">
                                        返回官网
                                    </a>
                                    <a href="javascript:;" class="btn btn-warning btn-sm btn-outline btn-round">
                                        手机体验
                                    </a>
                                    <a href="javascript:;" class="btn btn-primary btn-sm btn-outline btn-round open-kf">
                                        咨询客服
                                    </a>
                                    <a href="javascript:;" class="btn btn-danger btn-sm btn-outline btn-round">
                                        开发文档
                                    </a>
                                    <a href="javascript:;" class="btn btn-dark btn-sm btn-outline btn-round">
                                        服务协议
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row part-info" data-plugin="matchHeight" data-by-row="true">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xlg-2" style="height: 265px;">
                <div class="panel">
                    <div class="panel-body text-center">
                        <i class="icon ti-layout-cta-btn-right red-500"></i>
                        <p>UI 示例</p>
                        <div class="label-content">
                            <span class="label label-default label-round label-outline">布局</span>
                            <span class="label label-default label-round label-outline">基本</span>
                            <span class="label label-default label-round label-outline">进阶</span>
                            <span class="label label-default label-round label-outline">组件</span>
                            <span class="label label-default label-round label-outline">小工具</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xlg-2" style="height: 265px;">
                <div class="panel">
                    <div class="panel-body text-center">
                        <i class="icon ti-layout cyan-500"></i>
                        <p>页面示例</p>
                        <div class="label-content">
                            <span class="label label-default label-round label-outline">首页</span>
                            <span class="label label-default label-round label-outline">常用</span>
                            <span class="label label-default label-round label-outline">团队</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xlg-2" style="height: 265px;">
                <div class="panel">
                    <div class="panel-body text-center">
                        <i class="icon ti-widgetized purple-500"></i>
                        <p>表格示例</p>
                        <div class="label-content">
                            <span class="label label-default label-round label-outline">基本表格</span>
                            <span class="label label-default label-round label-outline">树形表格</span>
                            <span class="label label-default label-round label-outline">DataTable</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xlg-2" style="height: 265px;">
                <div class="panel">
                    <div class="panel-body text-center">
                        <i class="icon ti-layout-accordion-list green-500"></i>
                        <p>表单示例</p>
                        <div class="label-content">
                            <span class="label label-default label-round label-outline">基本</span>
                            <span class="label label-default label-round label-outline">质感</span>
                            <span class="label label-default label-round label-outline">高级</span>
                            <span class="label label-default label-round label-outline">布局</span>
                            <span class="label label-default label-round label-outline">向导</span>
                            <span class="label label-default label-round label-outline">验证</span>
                            <span class="label label-default label-round label-outline">预设</span>
                            <span class="label label-default label-round label-outline">编辑</span>
                            <span class="label label-default label-round label-outline">编辑器</span>
                            <span class="label label-default label-round label-outline">图片裁剪</span>
                            <span class="label label-default label-round label-outline">文件上传</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xlg-2" style="height: 239px;">
                <div class="panel">
                    <div class="panel-body text-center">
                        <i class="icon ti-bar-chart-alt orange-500"></i>
                        <p>图表示例</p>
                        <div class="label-content">
                            <span class="label label-default label-round label-outline">简单图表</span>
                            <span class="label label-default label-round label-outline">ECharts</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xlg-2" style="height: 239px;">
                <div class="panel">
                    <div class="panel-body text-center">
                        <i class="icon ti-panel teal-500"></i>
                        <p>系统设置</p>
                        <div class="label-content">
                            <span class="label label-default label-round label-outline">菜单</span>
                            <span class="label label-default label-round label-outline">用户</span>
                            <span class="label label-default label-round label-outline">日志</span>
                            <span class="label label-default label-round label-outline">黑名单</span>
                            <span class="label label-default label-round label-outline">系统</span>
                            <span class="label label-default label-round label-outline">账户</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      message: "这是首页"
    };
  }
};
</script>

<style lang="scss">
.page-index {
  .row .panel {
    height: -webkit-calc(100% - 24px);
    height: calc(100% - 24px);
  }
  .account-info {
    overflow: visible;
    border-bottom: none;
    .media-right {
      vertical-align: middle;
    }
  }
  .introduce-info .media {
    margin: 0;
    border-bottom: none;
    .media-object {
      height: 120px;
    }
    .media-body {
      padding-left: 20px;
      .btn {
        display: inline-block;
        margin: 3px 5px 3px 0;
      }
    }
  }
  .changelog-info .time-line {
    padding-left: 0;
    list-style: none;
    &:before {
      position: absolute;
      top: 25px;
      bottom: 40px;
      left: 120px;
      width: 1px;
      content: " ";
      background: #e4eaec;
    }
    > li {
      position: relative;
      width: 100%;
      margin: 15px 0;
      overflow: hidden;
      line-height: 24px;
      &:before {
        position: absolute;
        top: 6px;
        left: 93px;
        display: block;
        width: 14px;
        height: 14px;
        content: " ";
        background: #fff;
        border: solid 2px #e4eaec;
        border-radius: 50%;
      }
      &:first-child:before {
        background: #5cd29d;
        border-color: #bfedd8;
      }
      &:last-child:before {
        background: #fa7a7a;
        border-color: #fad3d3;
      }
      time {
        float: left;
      }
      h5 {
        float: left;
        margin: 0 0 0 55px;
        line-height: 24px;
      }
    }
  }
  .part-info .panel-body {
    .icon {
      font-size: 3.2em;
      line-height: 1.6;
    }
    .label-content {
      margin: 20px 0 10px;
      .label {
        display: inline-block;
        margin: 3px 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .page-index .account-info .media-right {
    display: none;
  }
}

@media (max-width: 768px) {
  .introduce-info {
    .media-left {
      display: none;
    }
    .media-body {
      padding-left: 0 !important;
    }
  }
}
</style>
