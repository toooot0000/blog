<template>
  <div id="app">
    <Header v-model="isHeaderAnimFinished"></Header>
    <div class="content" id="content">
      <!-- <div class="block"></div> -->
      <BlogContainer></BlogContainer>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// 组件
import Header from "@comps/Header.vue";
import Footer from "@comps/Footer.vue";
import BlogContainer from "./BlogContainer";

// Animation engine
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(scrollTrigger);

// vue and vue cookies
import Vue from "vue";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

export default {
  name: "PageMain",
  components: {
    Header,
    Footer,
    BlogContainer,
  },
  data: () => ({
    isHeaderAnimFinished: false,
  }),
  mounted() {
    // content的视差滚动动画
    // 其实就是滚动的时候Y轴滚动速度快一点就行
    
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
</style>
