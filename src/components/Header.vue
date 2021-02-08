<template>
  <div class="wrp">
    <div
      class="ctn container"
      :class="{
        finished: isAnimFinished,
      }"
      @click="backTop"
    >
      <div
        :style="{
          display: isAnimFinished ? 'none' : 'block',
        }"
      >
        <div class="title">
          {{ title }}
        </div>
        <div class="seperator"></div>
        <div class="desc">{{ desc }}</div>
        <div class="link-list">
          <div class="link" v-for="(link, ind) of linkList" :key="ind">
            <a :href="link.href">
              <img
                :src="
                  link.picPath === ''
                    ? './img/header/iconLink-' + (ind + 1).toString() + '.png'
                    : link.picPath
                "
                :alt="'linkPic' + ind"
                class="link-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// // 点击时返回顶部
// TODO 调整滑动效果
// TODO 顶部点状扩散效果
// // 点击范围局限于圆点上
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "我是标题",
    },
    desc: {
      type: String,
      default:
        "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    },
    linkList: {
      type: Array,
      default: () => {
        return [
          {
            href: "#",
            picPath: "",
          },
          {
            href: "#",
            picPath: "",
          },

          {
            href: "#",
            picPath: "",
          },
        ];
      },
    },
  },
  data() {
    return {
      to: null,
      animStart: false,
      animEnd: false,
      isAnimFinished: false,
      isScrubbing: true,
    };
  },
  mounted() {
    const that = this;

    // * 绑定滚动动画
    {
      let trigger = {
        trigger: ".wrp",
        start: 0,
        end: 50,
        scrub: 0.1,
        markers: true,
        onEnter() {
          that.isAnimFinished = false;
        },
        onScrubComplete() {
          that.isScrubbing = false;
        },
        onEnterBack() {
          that.isAnimFinished = false;
        },
      };
      gsap.to(".ctn", {
        scrollTrigger: trigger,
        scale: 0.1,
        height: 100,
        width: 100,
        duration: 0.2,
        background: "white",
        opacity: 0.8,
        top: "5vh",
        borderRadius: "999rem",
        ease: "none",
        onComplete: () => {
          setTimeout(() => {
            that.isAnimFinished = true;
          }, 500);
          // that.isAnimFinished = true;
        },
        onUpdate() {
          that.isScrubbing = true;
        },
      });
      gsap.to([".seperator", ".desc", ".title", ".link-list"], {
        scrollTrigger: trigger,
        duration: 0.2,
        opacity: 0,
        fontSize: "0.2rem",
      });
    }

    // * 监听滚动事件
    window.addEventListener("scroll", that.scrollEvent);
  },
  destroyed() {
    const that = this;
    // * 解绑滚动事件
    window.removeEventListener("scroll", that.scrollEvent);
  },
  methods: {
    backTop() {
      // * 返回顶部
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollEvent() {
      const that = this;
      that.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
  },
  computed: {
    realFinished: function () {
      return this.isAnimFinished && !this.isScrubbing;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@assets/sass/base";

.wrp {
  color: map-get($map: base.$colors, $key: "main");
  width: 100%;
  height: 100vh;
  z-index: 1000;
}

.ctn {
  background: none;
  box-shadow: none;
  text-align: center;
  max-width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: inherit;
  transition: 0;
  &:hover {
    box-shadow: none;
  }
  &.finished {
    cursor: pointer;
    // 点状扩散动画
    &::before,
    &::after {
      content: "";
      display: block;
      visibility: visible;
      border: 10px solid white;
      border-radius: 50%;
      animation: 1s riddle ease-out infinite forwards;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &::after {
      animation-delay: 0.5s;
    }
  }
}

@keyframes riddle {
  from {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }

  to {
    transform: translate(-50%, -50%) scale(2.5);
    opacity: 0;
  }
}

.seperator {
  margin: 25px 0;
}

.desc {
  @include base.margin-bottom(2rem);
  opacity: inherit;
}

.title {
  @include base.font-size(4rem);
  opacity: inherit;
}

.link-list {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  opacity: inherit;
}

.link-icon {
  width: 50px;
  @include base.margin-left(0.5rem);
  @include base.margin-right(0.5rem);
}
</style>
