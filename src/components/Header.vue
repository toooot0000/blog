<template>
  <div class="wrapper container text-center my-5">
    <img class="main-icon my-1" src="~@imgs/header/iconMain.jpg" alt="Icon" srcset="" />
    <div class="title my-1" >{{ title }}</div>
    <div class="desc my-1">{{ desc }}</div>
    <div class="link-list d-flex flex-row justify-content-center my-1">
      <div class="link d-inlineblock mx-2 my-1" v-for="(link, ind) in linkList" :key="ind">
        <a :href="link.href">
          <img
            :src="link.picPath === '' ? '~@imgs/header/iconLink-' + ind + '.png':link.picPath"
            :alt="'linkPic' + ind"
            srcset=""
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  props: {
    title: {
      type: String,
      default: "我是标题"
    },
    desc:{
      type: String,
      default: "我是描述"
    },
    linkList: {
      type: Array,
      default: () => {
        [
          {
            href: "#",
            picPath: ""
          }
        ];
      }
    },
    mounted() {
      // let trigger = {
      //   // trigger: ".wrapper",
      //   start: 0,
      //   end: 100,
      //   scrub: 1
      // };
      // gsap.to(".img-ctn", {
      //   scrollTrigger: trigger,
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.main-icon{
  // height: 200px;
  width: 200px;
}
</style>
