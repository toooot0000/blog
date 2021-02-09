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
    this.setBg();
  },
  methods: {
    setBg() {
      const nvBgCvs = document.getElementById("nav-bg-cvs");
      let scale = window.devicePixelRatio || 1;
      let width = window.innerWidth * scale;
      nvBgCvs.width = width;
      nvBgCvs.height = 200;
    },
    updateBg() {
      // 获取背景cvs
      const bgCvs = document.getElementById("bg-cvs");
      // 获取本组件内部的cvs
      const nvBgCvs = document.getElementById("nav-bg-cvs");
      // 获取ctx
      const nvCtx = nvBgCvs.getContext("2d");
      // * 使用 canvas.width 得到的是写在标签内部的宽高属性
      // * 使用 canvas.style.width 得到的是写在css内部的宽高属性
      // * 所以如果想要一个通用一点的方法的话，最好是写成
      // * canvas.getBoundingClientRect().width/.height
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

</style>