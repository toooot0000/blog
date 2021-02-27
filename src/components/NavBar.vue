<template>
  <div class="nav-bar">
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
      <li class="links left">
        <!-- <a class="link-item" href="#">主页</a> -->
        <a
          class="link-item"
          v-for="(item, ind) in leftList"
          :key="item.text"
          :href="item.url"
          :style="{
            'transition-delay': (leftList.length - ind - 1)*0.2+'s'
          }"
          >{{ item.text}}</a
        >
      </li>
      <li class="links right">
        <a
          class="link-item"
          v-for="(item, ind) in rightList"
          :key="item.text"
          :href="item.url"
          :style="{
            'transition-delay': ind*0.2+'s'
          }"
          >{{ item.text}}</a
        >
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
      default: false,
    },
    // 左侧内容：
    // {名字：url}
    leftList: {
      type: Array,
      default: () => [
        {
          text: "左侧1",
          url: "#",
        },
        {
          text: "左侧2",
          url: "#",
        },
      ],
    },

    // 左侧内容：
    // {名字：url}
    rightList: {
      type: Array,
      default: () => [
        {
          text: "左侧1",
          url: "#",
        },
        {
          text: "左侧2",
          url: "#",
        },
      ],
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
      nvBgCvs.height = 45;
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
.nav-bar {
  position: fixed;
  top: 0;
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
  transition: all 0.5s;
  box-shadow: 0px 0px 0px #0d1a25;
  &.active {
    box-shadow: 5px 0px 10px #0d1a25;
  }
  .cvs {
    display: block;
  }
}
.link-ctn {
  margin: 0;
  padding: 0;
  position: absolute;
  left: 50%;
  top: 15px;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  .links {
    flex-grow: 1;
    flex-basis: 50%;
    display: inline-block;
    color: white;
    margin: 0 30px;
    
    .link-item {
      color: inherit;
      text-decoration: none;
      transition: all 0.5s;
      opacity: 0;
      display: inline-block;
      margin: 0 10px;
      position: relative;

      &::after{
        visibility: visible;
        content: "";
        position: absolute;
        bottom: -3px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        border-radius: 999rem;
        width: 0;
        height: 2px;
        transition: all .2s;
      }

      &:hover {
        text-decoration: none;
        &::after{
          width: 70%;
        }
      }
    }
    &.left {
      text-align: right;
      .link-item {
        transform: translateX(100%);
      }
    }
    &.right {
      text-align: left;
      .link-item {
        transform: translateX(-100%);
      }
    }
    // transform: translateY(-100%);
  }
  &.active {
    .links {
      &.left,
      &.right {
        .link-item {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }
}
</style>