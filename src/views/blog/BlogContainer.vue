<template>
  <div class="container blog-container">
    <div class="wrp" id="blog-container"></div>
    <!-- <div class="blog-content" v-html="html"></div> -->
  </div>
</template>

<script>
// Animation engine
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(scrollTrigger);

import hljs from "highlight.js"
import Vue from 'vue'
Vue.use(hljs.vuePlugin)

export default {
  name: "BlogContainer",
  props: {
    md: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    html: "",
  }),
  mounted() {
    gsap.to(".blog-container", {
      scrollTrigger: {
        trigger: ".blog-content",
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
    // move #blog-content to center
    let blogContent = document.getElementById("blog-content");
    document.getElementById("blog-container").appendChild(blogContent);
    
  },
};
</script>

<style lang='scss' scoped>
@use "@assets/sass/base.scss";
@use "@assets/sass/blog.scss";
.blog-container {
  transform: translateY(100vh);
  opacity: 0;
  .wrp {
    max-width: base.$max-width;
    margin: auto;
  }
  @include base.padding(1.2rem);
  .blog-content {
    max-width: base.$max-width;
    margin: auto;
    * {
      color: base.$text-color-main;
    }
  }
}
</style>