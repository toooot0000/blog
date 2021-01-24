<template>
  <div class="wrapper container text-center mt-5">
    <div class="d-flex justify-content-center px-3">
      <div class="text-center mx-3">
        <div class="title my-1 font-weight-bold text-nowrap">
          {{ title }}
        </div>
        <div class="seperator mb-3"></div>
        <div class="desc my-2 text-sub">{{ desc }}</div>
        <div class="link-list d-flex flex-row justify-content-center my-2">
          <div
            class="link d-inlineblock mx-2 my-1"
            v-for="(link, ind) of linkList"
            :key="ind"
          >
            <a :href="link.href">
              <img
                :src="
                  link.picPath === ''
                    ? './img/header/iconLink-' + (ind + 1).toString() + '.png'
                    : link.picPath
                "
                :alt="'linkPic' + ind"
                class="link-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name:"Header",
  props: {
    title: {
      type: String,
      default: "我是标题"
    },
    desc: {
      type: String,
      default:
        "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述"
    },
    linkList: {
      type: Array,
      default: () => {
        return [
          {
            href: "#",
            picPath: ""
          },
          {
            href: "#",
            picPath: ""
          },

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
.wrapper{
  background: none;
  box-shadow: none;
}

.ctn-icon{
  height: 100%;
}

.main-icon {
  max-width: 200px;
}
.title {
  font-size: calc(1.95rem + 1.5vw);
}

.link-icon {
  width: 50px;
}
</style>
