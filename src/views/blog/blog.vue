<template>
  <div id="app">
    <Header v-model="isHeaderAnimFinished" :title="title" :desc="desc"></Header>
    <div class="content" id="content">
      <!-- <div class="block"></div> -->
      <BlogContainer :md="md"></BlogContainer>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// TODO add a loading wheel
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

import "whatwg-fetch";

export default {
  name: "PageMain",
  components: {
    Header,
    Footer,
    BlogContainer,
  },
  data: () => ({
    isHeaderAnimFinished: false,
    blogPath: null,
    title: "1",
    desc: "2",
    md: "",
    isLoading: "",
  }),

  beforeMount() {
    this.title = document.getElementById("blog-title").innerText;
    document.getElementById("blog-title").remove();
    // console.log(this.title);
    this.desc = document.getElementById("blog-desc").innerText;
    document.getElementById("blog-desc").remove();
    // console.log(this.desc);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
  margin-top: 200px;
}
</style>
