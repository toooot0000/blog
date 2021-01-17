<template>
  <div class="wrapper container text-center my-sm-5 py-3 mb-3">
    <div class="row">
      <div class="col-3 col-md-4 offset-sm-1 text-end">
        <img
          class="main-icon my-1"
          src="~@imgs/header/iconMain.jpg"
          alt="Icon"
          srcset=""
        />
      </div>
      <div class="col-5 col-sm-4 offset-3 offset-md-0 text-start">
        <div class="title mt-1 mb-4 font-weight-bold text-nowrap border-bottom border-light">
          {{ title }}
        </div>
        <div class="desc mt-1 mb-3 text-sub">{{ desc }}</div>
        <div class="link-list d-flex flex-row justify-content-left my-1">
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
.main-icon {
  width: 200px;
}
.title {
  font-size: calc(1.75rem + 1.5vw);
}

.link-icon {
  width: 50px;
}
</style>
