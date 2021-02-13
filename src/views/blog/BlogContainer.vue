<template>
  <div class="blog-container container">
    <div class="blog-content" v-html="html"></div>
  </div>
</template>

<script>
// Animation engine
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(scrollTrigger);

// import showdown from 'showdown'

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
  watch: {
    md: function (nV) {
      let showdown = require("showdown");
      let converter = new showdown.Converter();
      this.html = converter.makeHtml(nV);
      console.log(this.html);
    },
  },
};
</script>

<style lang='scss' scoped>
@use "@assets/sass/base.scss";
.blog-container {
  transform: translateY(100vh);
  opacity: 0;
  @include base.padding(1.2rem);
  .blog-content{
    max-width: base.$max-width;
    margin: auto;
    *{
      color: base.$text-color-main;
    }
  }
}
</style>