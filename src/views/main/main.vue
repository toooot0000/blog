<template>
  <div id="app">
    <Header v-model="isHeaderAnimFinished"></Header>
    <div class="content" id="content">
      <PostItem class="post-item"></PostItem>
      <PostItem class="post-item"></PostItem>
      <PostItem class="post-item"></PostItem>
      <!-- <div class="block"></div> -->
    </div>
  </div>
</template>

<script>
import Header from "@comps/Header.vue";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import PostItem from "./PostItem";
gsap.registerPlugin(scrollTrigger);
export default {
  name: "PageMain",
  components: {
    Header,
    PostItem,
  },
  data: () => ({
    isHeaderAnimFinished: false,
  }),
  mounted() {
    // content的视差滚动动画
    // 其实就是滚动的时候Y轴滚动速度快一点就行
    gsap.to(".post-item", {
      scrollTrigger: {
        trigger: ".content",
        start: 20,
        end: 150,
        pin: false,
        // markers: true,
        scrub: 0.05,
      },
      y: "25vh",
      opacity: 1,
      ease: "power1.out",
      stagger: 0.1,
    });
  },
};
</script>

<style lang="scss" scoped>
.block {
  height: 2000px;
}
.content {
  min-height: 120vh;
}
.post-item{
  transform: translateY(100vh);
  opacity: 0;
}
</style>
