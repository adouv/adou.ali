<template>
  <div class="page">
    <div class="page-header">
        <h1 class="page-title">常用列表</h1>
    </div>

    <div class="page-content">
        <div class="panel">
            <div class="panel-body container-fluid">
                <div class="row row-lg">
                    <div class="col-sm-6 col-md-3">
                        <div class="example-wrap">
                            <h4 class="example-title">获得焦点</h4>
                            <input type="text" class="form-control" id="inputFocus" placeholder="当前文本框获得了焦点">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="example-wrap">
                            <h4 class="example-title">下拉菜单</h4>
                            <select class="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="example-wrap">
                            <h4 class="example-title">获得焦点</h4>
                            <input type="text" class="form-control" id="inputFocus" placeholder="当前文本框获得了焦点">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="example-wrap">
                            <h4 class="example-title">获得焦点</h4>
                            <input type="text" class="form-control" id="inputFocus" placeholder="当前文本框获得了焦点">
                        </div>
                    </div>
                   <div class="col-sm-6 col-md-3">
                        <div class="example-wrap">
                            <h4 class="example-title">获得焦点</h4>
                            <input type="text" class="form-control" id="inputFocus" placeholder="当前文本框获得了焦点">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="example-wrap">
                            <h4 class="example-title">下拉菜单</h4>
                            <select class="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="example-wrap">
                            <h4 class="example-title">获得焦点</h4>
                            <input type="text" class="form-control" id="inputFocus" placeholder="当前文本框获得了焦点">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="example-wrap">
                            <h4 class="example-title">获得焦点</h4>
                            <input type="text" class="form-control" id="inputFocus" placeholder="当前文本框获得了焦点">
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <button type="button" class="btn btn-default">Default</button>
                        <button type="button" class="btn btn-primary">Primary</button>
                        <button type="button" class="btn btn-success">Success</button>
                        <button type="button" class="btn btn-info">Info</button>
                        <button type="button" class="btn btn-warning">Warning</button>
                    </div>
                </div>


                <div class="example table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>用户名</th>
                            <th>登录时间</th>
                            <th>登录IP</th>
                            <th>角色</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>teagan</td>
                            <td>2016/12/12 01:56</td>
                            <td>23.125.112.0</td>
                            <td>
                                <span class="label label-danger">管理员</span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>andy</td>
                            <td>2016/12/13 02:12</td>
                            <td>204.145.9.109</td>
                            <td>
                                <span class="label label-info">会员</span>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>veronica</td>
                            <td>2016/09/02 13:09</td>
                            <td>231.1.8.187</td>
                            <td>
                                <span class="label label-warning">开发者</span>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>bruce</td>
                            <td>2016/11/15 11:56</td>
                            <td>120.121.0.1</td>
                            <td>
                                <span class="label label-success">技术支持</span>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>carolina</td>
                            <td>2016/10/11 09:54</td>
                            <td>90.80.132.1</td>
                            <td>
                                <span class="label label-info">会员</span>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>madaline</td>
                            <td>2016/09/10 12:34</td>
                            <td>108.119.90.121</td>
                            <td>
                                <span class="label label-success">技术支持</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div class="example">
                    <nav>
                        <ul data-plugin="twbsPagination" data-total-pages="50" data-pagination-class="pagination pagination-no-border" class="pagination pagination-no-border">
                            <li class="page-item first disabled"><a href="#" class="page-link"><span class="fa fa-angle-double-left" title="第一页"></span></a></li>
                            <li class="page-item prev disabled"><a href="#" class="page-link"><span class="fa fa-angle-left" title="上一页"></span></a></li>
                            <li class="page-item active"><a href="#" class="page-link">1</a></li><li class="page-item"><a href="#" class="page-link">2</a></li>
                            <li class="page-item"><a href="#" class="page-link">3</a></li><li class="page-item"><a href="#" class="page-link">4</a></li>
                            <li class="page-item"><a href="#" class="page-link">5</a></li>
                            <li class="page-item next"><a href="#" class="page-link"><span class="fa fa-angle-right" title="下一页"></span></a></li>
                            <li class="page-item last"><a href="#" class="page-link"><span class="fa fa-angle-double-right" title="最后一页"></span></a></li>
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
  name: "UiListComponent"
};
</script>

