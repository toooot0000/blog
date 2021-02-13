<template>
  <div class="container post-item">
    <div class="ctn">
      <div class="left">
        <div class="time">
          {{ post.timeDate.format("YYYY MM") }}
        </div>
        <div class="tags-list">
          <div class="tag">
            <!-- 之后再说 -->
          </div>
        </div>
      </div>
      <div class="right">
        <a class="title" href="blog.html" @click="clickTitle">
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
        <img src="" alt="" srcset="">
      </div>
    </div>
  </div>
</template>

<script>
import "@assets/js/dateAddFormat.js"
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
        
      }),
    },
  },
  beforeMount(){
    // console.log(this.$props);
    let t = this.post.time.split("-").map(v=>parseInt(v));
    // console.log(t);
    this.post.timeDate = new Date(t[0], t[1], t[2]);
  },
  mounted(){

    gsap.to(".post-item", {
      scrollTrigger: {
        trigger: ".content",
        start: 20,
        end: 150,
        pin: false,
        // markers: true,
        scrub: 0.05,
      },
      y: 0,
      opacity: 1,
      ease: "power1.out",
      stagger: 0.1,
    });
  },
  methods:{
    clickTitle(){
      // let pageList = this.$$cookies.get('page_list')
      // this.$cookies.set('curPage', this.post.id.toString(), -1)
      window.localStorage.setItem("cur-page-path", this.post.name)
    }
  }
};
</script>

<style lang="scss" scoped>
@use "@assets/sass/base.scss";
.ctn {
  @include base.padding(1.2rem);
  margin: 1.2rem auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 600px;
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
  }
  .left {
    display: flex;
    height: 100%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    @include base.margin-right(2.2rem);
  }
  .time {
    @include base.font-size(base.$font-size-main);
    color: base.$text-color-minor;
    text-align: left;
    vertical-align: top;
    // margin-top: 0.3rem;
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
    @include base.overflow-eclipsis(
      $max-height: 6rem,
      $line-num: 4,
    )
  }
  .bg{
    position: absolute;
  }
}
</style>