<template>
  <div id="app">
    <Header v-model="isHeaderAnimFinished"></Header>
    <div class="content" id="content">
      <!-- <div class="block"></div> -->
      <div class="blog-post"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@comps/Header.vue";
import Footer from "@comps/Footer.vue";

import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(scrollTrigger);

import Vue from "vue";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

export default {
  name: "PageMain",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    isHeaderAnimFinished: false,
  }),
  mounted() {
    // content的视差滚动动画
    // 其实就是滚动的时候Y轴滚动速度快一点就行
    gsap.to(".blog-post", {
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
    // read curPage from cookie
  },

};
</script>

<style lang="scss" scoped>
.block {
  height: 2000px;
}
.content {
  min-height: 100vh;
  margin-top: 200px;
}
.post-item {
  transform: translateY(100vh);
  opacity: 0;
}
</style>
