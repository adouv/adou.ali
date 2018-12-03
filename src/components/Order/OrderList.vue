<template>
    <div class="page">
        <div class="page-header">
            <h1 class="page-title">订单列表</h1>
        </div>

        <div class="page-content">
            <div class="panel">
                <div class="panel-body container-fluid">
                    <div class="row row-lg">
                        <div class="col-sm-6 col-md-4">
                            <div class="example-wrap">
                                <h4 class="example-title">订单号</h4>
                                <input type="text" class="form-control" placeholder="订单号">
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="example-wrap">
                                <h4 class="example-title">应还款日期</h4>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="开始时间" readonly name="stratTime" v-date-picker="this" v-model="stratTime">
                                    <span class="input-group-addon">-</span>
                                    <input type="text" class="form-control" placeholder="结束时间" readonly name="endTime" v-date-picker="this" v-model="endTime">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="example-wrap">
                                <h4 class="example-title">还款状态</h4>
                                <select class="form-control">
                                    <option>全部</option>
                                    <option>未还款</option>
                                    <option>账单还款</option>
                                    <option>提前还款</option>
                                    <option>逾期还款</option>
                                    <option>已确认还款</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="example-wrap">
                                <h4 class="example-title">放款日期</h4>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="开始时间">
                                    <span class="input-group-addon">-</span>
                                    <input type="text" class="form-control" placeholder="结束时间">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="example-wrap">
                                <h4 class="example-title">分销商</h4>
                                <select class="form-control">
                                    <option>全部</option>
                                    <option>用户中心保险是二</option>
                                    <option>测试分销一二</option>
                                    <option>测试保险分销一</option>
                                    <option>测试测试</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="example-wrap">
                                <h4 class="example-title">企业</h4>
                                <select class="form-control">
                                    <option>全部</option>
                                    <option>是否保险企业一</option>
                                    <option>是否保险企业二</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="example-wrap">
                                <h4 class="example-title">出资方名称</h4>
                                <select class="form-control">
                                    <option>差旅金主</option>
                                    <option>大boss王</option>
                                    <option>金主一</option>
                                    <option>金主二</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="example-wrap">
                                <h4 class="example-title">还款日期</h4>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="开始时间">
                                    <span class="input-group-addon">-</span>
                                    <input type="text" class="form-control" placeholder="结束时间">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="example-wrap">
                                <h4 class="example-title">差旅类型</h4>
                                <select class="form-control">
                                    <option>机票</option>
                                    <option>火车票</option>
                                    <option>酒店</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12">
                            <button type="button" class="btn btn-primary" @click="btnSearch();">查询</button>
                            <button type="button" class="btn btn-success" @click="btnDownload();">下载</button>
                            <button type="button" class="btn btn-info" @click="btnAdd();">添加</button>
                        </div>
                    </div>

                    <div class="example table-responsive">
                        <div style="width:2000px;">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>订单号</th>
                                        <th>乘机人姓名</th>
                                        <th>起飞时间</th>
                                        <th>PNR</th>
                                        <th>航班号</th>
                                        <th>企业名称</th>
                                        <th>放款金额</th>
                                        <th>应还款金额</th>
                                        <th>保证险金额</th>
                                        <th>订单金额</th>
                                        <th>出资方名称</th>
                                        <th>分销商名称</th>
                                        <th>应还款日期</th>
                                        <th>还款状态</th>
                                        <th>已还款日期</th>
                                        <th>放款日期</th>
                                        <th>出票日期</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>7842091401806</td>
                                        <td>彭雷</td>
                                        <td>2018-04-20</td>
                                        <td>QWERTY</td>
                                        <td>CA1234</td>
                                        <td>测试企业三1</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                        <td>0.00</td>
                                        <td>1.00</td>
                                        <td>金主二</td>
                                        <td>测测测试</td>
                                        <td>2018-06-15</td>
                                        <td>未还款</td>
                                        <td></td>
                                        <td>2018-05-14</td>
                                        <td>2018-04-20</td>
                                    </tr>
                                    <tr>
                                        <td>7842092295323</td>
                                        <td>王琳娜</td>
                                        <td>2018-04-20</td>
                                        <td>QWERTY</td>
                                        <td>CA1234</td>
                                        <td>测试企业三1</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                        <td>0.00</td>
                                        <td>1.00</td>
                                        <td>金主二</td>
                                        <td>测测测试</td>
                                        <td>2018-06-15</td>
                                        <td>未还款</td>
                                        <td></td>
                                        <td>2018-05-14</td>
                                        <td>2018-04-20</td>
                                    </tr>
                                    <tr>
                                        <td>0882091400678</td>
                                        <td>郭昕</td>
                                        <td>2018-04-20</td>
                                        <td>QWERTY</td>
                                        <td>CA1234</td>
                                        <td>测测测企业二</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                        <td>0.00</td>
                                        <td>1.00</td>
                                        <td>金主一</td>
                                        <td>测测测试</td>
                                        <td>2018-06-15</td>
                                        <td>未还款</td>
                                        <td></td>
                                        <td>2018-05-14</td>
                                        <td>2018-04-20</td>
                                    </tr>
                                    <tr>
                                        <td>9122091400675</td>
                                        <td>郭昕</td>
                                        <td>2018-04-20</td>
                                        <td>QWERTY</td>
                                        <td>CA1234</td>
                                        <td>测测测企业二</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                        <td>0.00</td>
                                        <td>1.00</td>
                                        <td>金主一</td>
                                        <td>测测测试</td>
                                        <td>2018-06-15</td>
                                        <td>未还款</td>
                                        <td></td>
                                        <td>2018-05-14</td>
                                        <td>2018-04-20</td>
                                    </tr>
                                    <tr>
                                        <td>7842091401807</td>
                                        <td>彭雷</td>
                                        <td>2018-04-20</td>
                                        <td>QWERTY</td>
                                        <td>CA1234</td>
                                        <td>测测测企业二</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                        <td>0.00</td>
                                        <td>1.00</td>
                                        <td>金主一</td>
                                        <td>测测测试</td>
                                        <td>2018-06-15</td>
                                        <td>未还款</td>
                                        <td></td>
                                        <td>2018-05-14</td>
                                        <td>2018-04-20</td>
                                    </tr>
                                    <tr>
                                        <td>7842090477216</td>
                                        <td>刘浩</td>
                                        <td>2018-04-20</td>
                                        <td>QWERTY</td>
                                        <td>CA1234</td>
                                        <td>测测测企业一</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                        <td>0.00</td>
                                        <td>1.00</td>
                                        <td>金主一</td>
                                        <td>测测测试</td>
                                        <td>2018-06-15</td>
                                        <td>未还款</td>
                                        <td></td>
                                        <td>2018-05-14</td>
                                        <td>2018-04-20</td>
                                    </tr>
                                    <tr>
                                        <td>4795397005716</td>
                                        <td>刘浩</td>
                                        <td>2018-04-20</td>
                                        <td>QWERTY</td>
                                        <td>CA1234</td>
                                        <td>测测测企业一</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                        <td>0.00</td>
                                        <td>1.00</td>
                                        <td>金主一</td>
                                        <td>测测测试</td>
                                        <td>2018-06-15</td>
                                        <td>未还款</td>
                                        <td></td>
                                        <td>2018-05-14</td>
                                        <td>2018-04-20</td>
                                    </tr>
                                    <tr>
                                        <td>0882091401205</td>
                                        <td>王殿明</td>
                                        <td>2018-04-20</td>
                                        <td>QWERTY</td>
                                        <td>CA1234</td>
                                        <td>测测测企业一</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                        <td>0.00</td>
                                        <td>1.00</td>
                                        <td>金主一</td>
                                        <td>测测测试</td>
                                        <td>2018-06-15</td>
                                        <td>未还款</td>
                                        <td></td>
                                        <td>2018-05-14</td>
                                        <td>2018-04-20</td>
                                    </tr>
                                    <tr>
                                        <td>7842091401204</td>
                                        <td>王殿明</td>
                                        <td>2018-04-20</td>
                                        <td>QWERTY</td>
                                        <td>CA1234</td>
                                        <td>测测测企业一</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                        <td>0.00</td>
                                        <td>1.00</td>
                                        <td>金主一</td>
                                        <td>测测测试</td>
                                        <td>2018-06-15</td>
                                        <td>未还款</td>
                                        <td></td>
                                        <td>2018-05-14</td>
                                        <td>2018-04-20</td>
                                    </tr>
                                    <tr>
                                        <td>8762092218175</td>
                                        <td>陈曦</td>
                                        <td>2018-04-20</td>
                                        <td>QWERTY</td>
                                        <td>CA1234</td>
                                        <td>测测测企业一</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                        <td>0.00</td>
                                        <td>1.00</td>
                                        <td>金主一</td>
                                        <td>测测测试</td>
                                        <td>2018-06-15</td>
                                        <td>未还款</td>
                                        <td></td>
                                        <td>2018-05-14</td>
                                        <td>2018-04-20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="example">
                        <nav>
                            <ul data-plugin="twbsPagination" data-total-pages="50" data-pagination-class="pagination pagination-no-border" class="pagination pagination-no-border">
                                <li class="page-item first disabled">
                                    <a href="#" class="page-link">
                                        <span class="fa fa-angle-double-left" title="第一页"></span>
                                    </a>
                                </li>
                                <li class="page-item prev disabled">
                                    <a href="#" class="page-link">
                                        <span class="fa fa-angle-left" title="上一页"></span>
                                    </a>
                                </li>
                                <li class="page-item active">
                                    <a href="#" class="page-link">1</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link">2</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link">3</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link">4</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link">5</a>
                                </li>
                                <li class="page-item next">
                                    <a href="#" class="page-link">
                                        <span class="fa fa-angle-right" title="下一页"></span>
                                    </a>
                                </li>
                                <li class="page-item last">
                                    <a href="#" class="page-link">
                                        <span class="fa fa-angle-double-right" title="最后一页"></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "OrderListComponent",
  data() {
    return {
      orderId: "",
      stratTime: "",
      endTime: ""
    };
  },
  methods: {
    btnSearch() {
      this.$tip("您点击了查找！");
    },
    btnDownload() {
      this.$tip("您点击了下载！");
    },
    btnAdd() {
      this.$tip("您点击了添加！");
    }
  }
};
</script>

