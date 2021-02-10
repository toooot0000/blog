<template>
  <div class="wrp">
    <!-- 背景 -->
    <div
      class="cvs-ctn"
      :class="{
        active: isActive,
      }"
    >
      <canvas class="cvs" id="nav-bg-cvs"></canvas>
    </div>
    <ul
      class="link-ctn"
      :class="{
        active: isActive,
      }"
    >
      <li class="link left">
        <a href="#">主页</a>
      </li>
      <li class="link right">
        <a href="#">关于</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    // 是否处于置顶状态
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.setBg();
  },
  methods: {
    setBg() {
      const nvBgCvs = document.getElementById("nav-bg-cvs");
      let scale = window.devicePixelRatio || 1;
      let width = window.innerWidth * scale;
      nvBgCvs.width = width;
      nvBgCvs.height = window.innerHeight * 0.05;
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
.cvs-ctn {
  background-image: radial-gradient(
      circle at top right,
      rgb(13 26 37),
      #150e0e 1000px
    ),
    radial-gradient(circle at 50px 600px, rgb(147 40 239), #903d9a 500px);
  padding: 0;
  border: 0;
  &.active {
    box-shadow: 5px 0px 10px #0d1a25;
  }
  .cvs {
    display: block;
  }
}
.link-ctn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 1.5vh;
  padding: 0;
  margin: 0;

  .link {
    display: inline-block;
    color: white;
    transition: all 0.5s;
    opacity: 0;
    margin: 0 30px;
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    }
    &.left {
      transform: translateX(100%);
    }
    &.right {
      transform: translateX(-100%);
    }
    // transform: translateY(-100%);
  }
  &.active {
    .link {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>