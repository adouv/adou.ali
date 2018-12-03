<template>
    <div class="identifyCodeBox" ref="identifyCodeBox" @click="drawPic();">
        <canvas id="identifyCodeBox" :width="contentWidth" :height="contentHeight"></canvas>
    </div>
</template>

<script>
import Service from "@/_common/index";
export default {
  name: "IdentifyComponent",
  props: {
    /** 
     * 字体大小，最小值
    */
    fontSizeMin: {
      type: Number,
      default: 16
    },
    /** 
     * 字体大小，最大值
    */
    fontSizeMax: {
      type: Number,
      default: 40
    },
    /** 
     * 背景颜色色值最小值，最小值为0
    */
    backgroundColorMin: {
      type: Number,
      default: 180
    },
    /** 
     * 背景颜色色值最大值，最大值为255
    */
    backgroundColorMax: {
      type: Number,
      default: 240
    },
    /** 
     * 字体颜色色值最小值，最小值为0
    */
    colorMin: {
      type: Number,
      default: 50
    },
    /** 
     * 字体颜色色值最大值，最大值为255
    */
    colorMax: {
      type: Number,
      default: 160
    },
    /** 
     * 干扰线颜色色值最小值，最小值为0
    */
    lineColorMin: {
      type: Number,
      default: 40
    },
    /** 
     * 干扰线颜色色值最大值，最大值为255
    */
    lineColorMax: {
      type: Number,
      default: 180
    },
    /** 
     * 干扰点颜色色值最小值，最小值为0
    */
    dotColorMin: {
      type: Number,
      default: 0
    },
    /** 
     * 干扰点颜色色值最大值，最大值为255
    */
    dotColorMax: {
      type: Number,
      default: 255
    },
    /** 
     * 画布宽度
    */
    contentWidth: {
      type: Number,
      default: 112
    },
    /** 
     * 画布高度
    */
    contentHeight: {
      type: Number,
      default: 38
    }
  },
  data() {
    return {
      keys: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    };
  },
  methods: {
    /**
     * 生成4位随机Code
     */

    generateCode() {
      let identifyCode = "";
      for (let index = 0; index < 4; index++) {
        identifyCode += this.keys[this.randomNum(0, this.keys.length)];
      }
      if(Service.Util.IsExistLocalStorage(Service.Enum.CGT_IDENTIFY_CODE)){
          Service.Util.RemoveLocalStorage(Service.Enum.CGT_IDENTIFY_CODE);
      }
      Service.Util.SetLocalStorage(Service.Enum.CGT_IDENTIFY_CODE,identifyCode.toUpperCase());
      return identifyCode;
    },
    /**
     * 生成随机数
     * @param min 最小值
     * @param max 最大值
     */
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    /**
     * 生成随机rgb颜色
     * @param min 最小值
     * @param max 最大值
     */
    randomColor(min, max) {
      let r = this.randomNum(min, max);
      let g = this.randomNum(min, max);
      let b = this.randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    /** 
     * 绘制验证码
    */
    drawPic() {
      let canvas = document.getElementById("identifyCodeBox");
      let ctx = canvas.getContext("2d");
      ctx.textBaseline = "bottom";
      // 绘制背景
      ctx.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax);
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight);
      // 绘制文字
      let code = this.generateCode(4);
      for (let i = 0; i < code.length; i++) {
        this.drawText(ctx, code[i], i);
      }
      // this.drawLine(ctx);
      // this.drawDot(ctx);
    },
    /** 
     * 绘制字体
     * @param ctx 画布
     * @param txt 文字
     * @param i 位置
    */
    drawText(ctx, txt, i) {
      ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax);
      ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + "px SimHei";
      let x = (i + 1) * (this.contentWidth / (4 + 1));
      let y = this.randomNum(this.fontSizeMax, this.contentHeight - 5);
      var deg = this.randomNum(-45, 45);
      // 修改坐标原点和旋转角度
      ctx.translate(x, y);
      ctx.rotate(deg * Math.PI / 180);
      ctx.fillText(txt, 0, 0);
      // 恢复坐标原点和旋转角度
      ctx.rotate(-deg * Math.PI / 180);
      ctx.translate(-x, -y);
    },
    /** 
     * 绘制干扰线
     * @param ctx 画布
    */
    drawLine(ctx) {
      for (let i = 0; i < 8; i++) {
        ctx.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax);
        ctx.beginPath();
        ctx.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight));
        ctx.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight));
        ctx.stroke();
      }
    },
    /** 
     * 绘制干扰点
     * @param ctx 画布
    */
    drawDot(ctx) {
      for (let i = 0; i < 100; i++) {
        ctx.fillStyle = this.randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  },
  mounted() {
    this.drawPic();
  }
};
</script>

<style lang="scss">
.identifyCodeBox{
    cursor:pointer;
}
</style>
