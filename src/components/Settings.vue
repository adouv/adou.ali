<template>
    <div class="page page-display">
        <div class="page-content">
            <form id="displayForm" class="form-horizontal padding-vertical-30">
                <div class="form-group">
                    <label class="col-sm-2 control-label">导航条颜色：</label>
                    <div class="col-sm-10" id="skintoolsNavbar">
                        <ul class="list-unstyled list-inline color-radio">
                            <li>
                                <div class="radio-custom radio-primary">
                                    <input type="radio" checked="" name="navigationColor" value="bg-blue-600"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-brown">
                                    <input type="radio" name="navigationColor" value="bg-brown-600"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-cyan">
                                    <input type="radio" name="navigationColor" value="bg-cyan-600"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-green">
                                    <input type="radio" name="navigationColor" value="bg-green-600"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-grey">
                                    <input type="radio" name="navigationColor" value="bg-grey-600"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-indigo">
                                    <input type="radio" name="navigationColor" value="bg-indigo-600"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-orange">
                                    <input type="radio" name="navigationColor" value="bg-orange-600"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-pink">
                                    <input type="radio" name="navigationColor" value="bg-pink-600"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-purple">
                                    <input type="radio" name="navigationColor" value="bg-purple-600"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-red">
                                    <input type="radio" name="navigationColor" value="bg-red-600"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-teal">
                                    <input type="radio" name="navigationColor" value="bg-teal-600"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-yellow">
                                    <input type="radio" name="navigationColor" value="bg-yellow-700"> <label></label>
                                </div>
                            </li>
                        </ul>
                        <div class="checkbox-custom checkbox-primary margin-top-10">
                            <input type="checkbox" checked="" id="navbarDisplay" name="acrossFlag" value="navbar-inverse">
                            <label for="navbarDisplay">通栏显示</label>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="form-group">
                    <label class="col-sm-2 control-label">菜单主题：</label>
                    <div class="col-sm-10">
                        <div class="btn-group bootstrap-select"><button type="button" class="btn dropdown-toggle btn-select" data-toggle="dropdown" data-id="skintoolsSidebar" title="深色主题" aria-expanded="false"><span class="filter-option pull-left">深色主题</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" style="max-height: 656px; overflow: hidden; min-height: 0px;"><ul class="dropdown-menu inner" role="menu" style="max-height: 652px; overflow-y: auto; min-height: 0px;"><li data-original-index="0" class="selected"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">深色主题</span><span class="icon wb-check check-mark"></span></a></li><li data-original-index="1" class=""><a tabindex="0" class="" style="" data-tokens="null"><span class="text">浅色主题</span><span class="icon wb-check check-mark"></span></a></li></ul></div><select data-plugin="selectpicker" id="skintoolsSidebar" name="menuTheme" class="" tabindex="-98">
                            <option value="site-menubar-dark" selected="">深色主题</option>
                            <option value="site-menubar-light">浅色主题</option>
                        </select></div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">菜单显示：</label>
                    <div class="col-sm-10">
                        <div class="radio-inline radio-custom radio-primary">
                            <input type="radio" id="menuUnfold" checked="checked" name="menuDisplay" value="site-menubar-unfold">
                            <label for="menuUnfold">默认展开</label>
                        </div>
                        <div class="radio-inline radio-custom radio-primary">
                            <input type="radio" id="menuFold" name="menuDisplay" value="site-menubar-fold">
                            <label for="menuFold">默认收起</label>
                        </div>
                        <div class="margin-top-10 hidden" id="menuFoldSetting">
                            <span>鼠标经过菜单时显示：</span>
                            <div class="btn-group btn-group-xs" data-toggle="buttons">
                                <label class="btn  btn-outline btn-dark active" for="textIconKeep">
                                    <input type="radio" id="textIconKeep" autocomplete="off" hidden="hidden" checked="" name="menuTxtIcon" value="site-menubar-keep"> 文字
                                </label> <label class="btn btn-outline btn-dark" for="textIconAlt">
                                <input type="radio" id="textIconAlt" autocomplete="off" hidden="hidden" name="menuTxtIcon" value="site-menubar-fold-alt"> 图标
                            </label>
                            </div>
                        </div>
                        <span class="help-block">仅在可视区域宽度大于768px生效</span>
                    </div>
                </div>
                <hr>
                <div class="form-group">
                    <label class="col-sm-2 control-label">主题颜色：</label>
                    <div class="col-sm-10" id="skintoolsPrimary">
                        <ul class="list-unstyled list-inline color-radio">
                            <li>
                                <div class="radio-custom radio-primary">
                                    <input type="radio" checked="" name="themeColor" value="primary"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-brown">
                                    <input type="radio" name="themeColor" value="brown"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-cyan">
                                    <input type="radio" name="themeColor" value="cyan"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-green">
                                    <input type="radio" name="themeColor" value="green"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-grey">
                                    <input type="radio" name="themeColor" value="grey"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-indigo">
                                    <input type="radio" name="themeColor" value="indigo"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-orange">
                                    <input type="radio" name="themeColor" value="orange"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-pink">
                                    <input type="radio" name="themeColor" value="pink"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-purple">
                                    <input type="radio" name="themeColor" value="purple"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-red">
                                    <input type="radio" name="themeColor" value="red"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-teal">
                                    <input type="radio" name="themeColor" value="teal"> <label></label>
                                </div>
                            </li>
                            <li>
                                <div class="radio-custom radio-yellow">
                                    <input type="radio" name="themeColor" value="yellow"> <label></label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr>
                <div class="form-group">
                    <label class="col-sm-2 control-label">Tab 页签：</label>
                    <div class="col-sm-10">
                        <div class="radio-inline radio-custom radio-primary">
                            <input type="radio" id="tabDisplayShow" checked="" name="tabFlag" value="site-contabs-open">
                            <label for="tabDisplayShow">开启</label>
                        </div>
                        <div class="radio-inline radio-custom radio-primary">
                            <input type="radio" id="tabDisplayHide" name="tabFlag" value="">
                            <label for="tabDisplayHide">关闭</label>
                        </div>
                        <span class="help-block">Tab 页签必须保存以后才能看到效果</span>
                    </div>
                </div>
                <hr>
                <div class="form-group">
                    <div class="col-sm-10 col-sm-offset-2 margin-top-20">
                        <button type="submit" class="btn btn-primary" name="save" value="true">保存</button>
                        <button type="button" class="btn btn-outline btn-default" name="reset" value="reset" id="skintoolsReset">恢复默认
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: "SettingsComponent"
};
</script>

<style lang="scss">
.page-display .color-radio .radio-custom {
  &.radio-primary {
    label {
      &::before, &::after {
        border-color: #62a8ea;
      }
    }
    input[type=radio]:checked + label::before {
      border-color: #62a8ea;
    }
  }
  &.radio-brown {
    label {
      &::before, &::after {
        border-color: #8d6658;
      }
    }
    input[type=radio]:checked + label::before {
      border-color: #8d6658;
    }
  }
  &.radio-cyan {
    label {
      &::before, &::after {
        border-color: #57c7d4;
      }
    }
    input[type=radio]:checked + label::before {
      border-color: #57c7d4;
    }
  }
  &.radio-green {
    label {
      &::before, &::after {
        border-color: #46be8a;
      }
    }
    input[type=radio]:checked + label::before {
      border-color: #46be8a;
    }
  }
  &.radio-grey {
    label {
      &::before, &::after {
        border-color: #757575;
      }
    }
    input[type=radio]:checked + label::before {
      border-color: #757575;
    }
  }
  &.radio-indigo {
    label {
      &::before, &::after {
        border-color: #677ae4;
      }
    }
    input[type=radio]:checked + label::before {
      border-color: #677ae4;
    }
  }
  &.radio-orange {
    label {
      &::before, &::after {
        border-color: #f2a654;
      }
    }
    input[type=radio]:checked + label::before {
      border-color: #f2a654;
    }
  }
  &.radio-pink {
    label {
      &::before, &::after {
        border-color: #f96197;
      }
    }
    input[type=radio]:checked + label::before {
      border-color: #f96197;
    }
  }
  &.radio-purple {
    label {
      &::before, &::after {
        border-color: #926dde;
      }
    }
    input[type=radio]:checked + label::before {
      border-color: #926dde;
    }
  }
  &.radio-red {
    label {
      &::before, &::after {
        border-color: #f96868;
      }
    }
    input[type=radio]:checked + label::before {
      border-color: #f96868;
    }
  }
  &.radio-teal {
    label {
      &::before, &::after {
        border-color: #3aa99e;
      }
    }
    input[type=radio]:checked + label::before {
      border-color: #3aa99e;
    }
  }
  &.radio-yellow {
    label {
      &::before, &::after {
        border-color: #f7da64;
      }
    }
    input[type=radio]:checked + label::before {
      border-color: #f7da64;
    }
  }
}
</style>


