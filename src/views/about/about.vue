<template>
  <div id="app">
    <Header
      v-model="isHeaderAnimFinished"
      title="About Jerry Ye"
      desc="关于Jerry Ye的一些事情。"
    ></Header>
    <div class="about-content" id="content">
      <div class="container">
        <div>别看了。啥也没有</div>
      </div>
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

import "whatwg-fetch";

export default {
  name: "PageMain",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    isHeaderAnimFinished: false,
    isLoading: true,
    blogList: [
      {
        id: 1,
        name: "name",
        path: "path",
      },
    ],
    configList: [],
  }),
  mounted() {
    gsap.to(".about-content", {
      scrollTrigger: {
        trigger: ".container",
        start: 20,
        end: 150,
        pin: false,
        markers: true,
        scrub: 1,
      },
      y: 0,
      opacity: 1,
      ease: "power1.out",
      stagger: 0.1,
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.about-content {
  min-height: 100vh;
  margin-top: 200px;
  transform: translateY(100vh);
  opacity: 0;
  .container{
    padding: 50px;
  }
}
</style>
