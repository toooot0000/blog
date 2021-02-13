<template>
  <div class="blog-container"></div>
</template>

<script>

// Animation engine
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(scrollTrigger);
export default {
    mounted(){

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
    }
}
</script>

<style>

</style>