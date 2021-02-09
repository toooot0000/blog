<template>
  <div class="wrp">
    <!-- 背景 -->
    <canvas class="cvs" id="nav-bg-cvs"></canvas>
    <div class="cnt">
      <ul class="tab-ctn">
        <li class="tab">
          <a href="#">主页</a>
        </li>
        <li class="tab">
          <a href="#">关于</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  mounted() {
    // window.requestAnimationFrame(this.updateBg)
    this.setBg();
  },
  methods: {
    setBg() {
      // 获取背景cvs
      // const bgCvs = document.getElementById("bg-cvs");
      const nvBgCvs = document.getElementById("nav-bg-cvs");
      // let bgw = bgCvs.width;
      // nvBgCvs.width = bgw;
      // nvBgCvs.height = 50;

      let scale = window.devicePixelRatio || 1;
      let width = window.innerWidth * scale;
      // let height = window.innerHeight * scale;

      nvBgCvs.width = width;
      nvBgCvs.height = 200;
    },
    updateBg() {
      // 获取背景cvs
      const bgCvs = document.getElementById("bg-cvs");
      // 获取cvs ctx
      // const bgCtx = bgCvs.getContext("2d");
      // 获取本组件内部的cvs
      const nvBgCvs = document.getElementById("nav-bg-cvs");
      // 获取ctx
      const nvCtx = nvBgCvs.getContext("2d");

      // * 使用 canvas.width 得到的是写在标签内部的宽高属性
      // * 使用 canvas.style.width 得到的是写在css内部的宽高属性
      // * 所以如果想要一个通用一点的方法的话，最好是写成
      // * canvas.getBoundingClientRect().width/.height

      // 获得背景cvs的宽度，来设置nvBg的宽度
      // let rect = bgCvs.getBoundingClientRect();
      // let bgw = bgCvs.width;

      // 设置nvBg的宽高
      // nvBgCvs.width = bgw;
      // nvBgCvs.height = 50; // 设置nvBg的高度，暂时看看数值是不是可以
      // console.log(nvBgCvs.width)
      // console.log(nvBgCvs.height)

      // 使用 drawImage 绘制背景
      // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      nvCtx.drawImage(bgCvs, 0, 0);
      window.requestAnimationFrame(this.updateBg);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@assets/sass/base.scss";
.wrp {
  position: fixed;
  z-index: base.$z-ind-header - 1;
  width: 100%;
}
// .cvs {
//   width: 100%;
// }
</style>