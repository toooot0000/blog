<template>
  <div class="wrp">
    <NavBar
      :isActive="isAnimFinished"
      :leftList="[
        {
          text: title,
          url: '#',
        },
      ]"
      :rightList="[
        {
          text: '主页',
          url: '/main',
        },
        {
          text: '关于',
          url: '/about',
        },
      ]"
    ></NavBar>
    <div
      class="header ctn container"
      :class="{
        finished: isAnimFinished,
      }"
      @click="headerBackTop"
    >
      <div
        :style="{
          display: isAnimFinished ? 'none' : 'block',
        }"
      >
        <div class="title" id="header-title">
          {{ title }}
        </div>
        <div class="seperator" id="header-seperator"></div>
        <div class="desc" id="header-desc">{{ desc }}</div>
        <div class="link-list" id="header-link-list">
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
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NavBar from "./NavBar";
gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
    NavBar,
  },
  model: {
    props: "isAnimFinished",
    event: "animFinished",
  },
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
      isAnimFinished: false,
      isScrolling: false,
      animTimeOut: null,
      firstScrollTarget: 0,
    };
  },
  mounted() {
    const that = this;
    // 监听滚动事件
    window.addEventListener("scroll", that.scrollEvent);

    // 初始化滚动吸附位置
    this.firstScrollTarget = 150;
    // 看一下当前的滚动位置
    this.scrollTop =
      document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop;

    // 绑定滚动动画
    {
      let trigger = {
        trigger: ".wrp",
        start: 5,
        end: 50,
        scrub: 0.1,
        // markers: true,
        onEnter() {
          if (that.animTimeOut) {
            window.clearTimeout(that.animTimeOut);
          }
          that.isAnimFinished = false;
          that.forceScrollTo(that.firstScrollTarget);
        },
        onEnterBack() {
          if (that.animTimeOut) {
            window.clearTimeout(that.animTimeOut);
          }
          that.isAnimFinished = false;
        },
      };
      // 滚动时主体形变动画
      gsap.to(".header", {
        scrollTrigger: trigger,
        scale: 0.1,
        height: 100,
        width: 100,
        duration: 0.2,
        background: "white",
        opacity: 0.8,
        top: "3vh",
        borderRadius: "999rem",
        ease: "none",
        onComplete: () => {
          that.animTimeOut = setTimeout(() => {
            that.isAnimFinished = true;
          }, 500);
        },
      });
      gsap.to(
        [
          "#header-seperator",
          "#header-desc",
          "#header-title",
          "#header-link-list",
        ],
        {
          scrollTrigger: trigger,
          duration: 0.2,
          opacity: 0,
          fontSize: "0.2rem",
        }
      );

      // 空动画，在向上滚动到一定位置的时候直接滚动到第一屏
      gsap.to("#empty", {
        scrollTrigger: {
          trigger: ".wrp",
          start: 5,
          end: that.firstScrollTarget - 20,
          // markers: true,
          onEnterBack() {
            that.forceScrollTo(0);
          },
        },
      });
    }
  },
  destroyed() {
    const that = this;
    // * 解绑滚动事件
    window.removeEventListener("scroll", that.scrollEvent);
  },
  methods: {
    headerBackTop() {
      if (this.isAnimFinished) this.forceScrollTo(0);
    },
    scrollEvent() {
      const that = this;
      // 更新scrollTop
      that.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(that.scrollTop);
      // 更新isScrollEnd
      that.isScrolling = true;
      setTimeout(() => {
        that.isScrolling = false;
      }, 300);
    },
    banMouseScroll() {
      //给页面绑定滑轮滚动事件
      if (document.addEventListener) {
        document.addEventListener(
          "DOMMouseScroll",
          this.mouseScrollListener,
          false
        );
      }
      //滚动滑轮触发scrollFunction方法
      window.addEventListener("mousewheel", this.mouseScrollListener, {
        passive: false,
      });
    },
    unbanMouseScroll() {
      //给页面绑定滑轮滚动事件
      if (document.removeEventListener) {
        document.removeEventListener(
          "DOMMouseScroll",
          this.mouseScrollListener,
          false
        );
      }
      //滚动滑轮触发scrollFunction方法
      window.removeEventListener("mousewheel", this.mouseScrollListener, {
        passive: false,
      });
    },
    mouseScrollListener(e) {
      // console.log('阻止滚动！')
      e = e || window.event;
      e.preventDefault && e.preventDefault(); //禁止浏览器默认事件
    },
    forceScrollTo(target, threshold = 5, minSpd = 1, maxSpd = 30) {
      const that = this;
      if (Math.abs(that.scrollTop - target) > 0) {
        let timer = setInterval(() => {
          let spd = Math.max(
            Math.min(Math.abs(that.scrollTop - target) / 5, maxSpd),
            minSpd
          );
          let dir = Math.sign(target - that.scrollTop);
          document.documentElement.scrollTop = document.body.scrollTop =
            that.scrollTop + spd * dir;
          if (Math.abs(that.scrollTop - target) <= threshold) {
            clearInterval(timer);
          }
        }, 16);
      }
    },
  },
  watch: {
    isAnimFinished: function (nVal) {
      this.$emit("animFinished", nVal);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@assets/sass/base";

.wrp {
  color: map-get($map: base.$colors, $key: "main");
  width: 100%;
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
      animation: 3s riddle ease-out infinite forwards;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &::after {
      animation-delay: 1.5s;
    }
  }
}

@keyframes riddle {
  from {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }

  to {
    transform: translate(-50%, -50%) scale(4.5);
    border-width: 0px;
    opacity: 0;
  }
}

.seperator {
  margin: 25px auto;
  max-width: base.$max-width;
}

.desc {
  margin: auto;
  @include base.margin-bottom(2rem);
  opacity: inherit;
  max-width: base.$max-width;
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
