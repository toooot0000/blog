<template>
  <div class="container post-item">
    <div class="ctn">
      <div class="left">
        <div class="time">
          {{ post.timeDate.format("YYYY\nMM") }}
        </div>
        <div class="tags-list">
          <div class="tag">
            <!-- 之后再说 -->
          </div>
        </div>
      </div>
      <div class="right">
        <a class="title" :href="post.path">
          {{ post.title }}
        </a>

        <div class="seperator"></div>
        <div class="content">
          <div class="text">
            {{ post.content }}
          </div>
        </div>
      </div>
      <div class="bg">
        <img src="" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
import "@assets/js/dateAddFormat.js";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(scrollTrigger);

export default {
  props: {
    post: {
      type: Object,
      default: () => ({
        title: "我是博文标题",
        time: "2000-01-01",
        timeDate: new Date(),
        content:
          "我是博文内容！我是博文内容！我是博文内容！我是博文内容！我是博文内容！我是博文内容！\
          我是博文内容！我是博文内容！我是博文内容！我是博文内容！我是博文内容！我是博文内容！我是\
          博文内容！我是博文内容！我是博文内容！",
        tags: ["tag1", "tag2"],
        id: 1,
        name: "",
        path: "",
      }),
    },
  },
  beforeMount() {
    let t = this.post.time.split("-").map((v) => parseInt(v));
    this.post.timeDate = new Date(t[0], t[1] - 1, t[2]);
  },
  mounted() {
    // if (!this.$isMobile()) {
    this.setAnim();
    // }
  },
  methods: {
    setAnim() {
      gsap.to(".post-item", {
        scrollTrigger: {
          trigger: ".content",
          start: 20,
          end: 150,
          pin: false,
          scrub: 0.05,
        },
        y: 0,
        opacity: 1,
        ease: "power1.out",
        stagger: 0.1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@assets/sass/base.scss";

.post-item {
  transform: translateY(200px);
  opacity: 0;
}

.ctn {
  @include base.padding(1.2rem);
  margin: 1.2rem auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  max-width: base.$max-width;
  position: relative;
  .upper {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    & > * {
      display: inline-block;
    }
    margin-bottom: 0.3rem;
  }
  .right {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 1;
  }
  .left {
    display: flex;
    height: 100%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    width: 45px;
    @include base.margin-right(2.2rem);
  }
  .time {
    @include base.font-size(base.$font-size-main);
    color: base.$text-color-minor;
    text-align: left;
    vertical-align: top;
    margin-top: 0.2rem;
  }
  .title {
    @include base.font-size(base.$font-size-title);
    color: base.$text-color-main;
    font-weight: base.$font-weight-bold;
  }
  .seperator {
    @include base.margin-top(0.5rem);
    @include base.margin-bottom(0.5rem);
  }
  .content {
    width: 100%;
    @include base.overflow-eclipsis($max-height: 6rem, $line-num: 4);
  }
  .bg {
    position: absolute;
  }
}
</style>