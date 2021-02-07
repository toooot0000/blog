<template>
  <div class="wrp">
    <div class="ctn container">
      <div class="title">
        {{ title }}
      </div>
      <div class="seperator"></div>
      <div class="desc">{{ desc }}</div>
      <div class="link-list">
        <div class="link" v-for="(link, ind) of linkList" :key="ind">
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
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "Header",
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
  },
  data() {
    return {
      to: null,
      animStart: false,
      animEnd: false,
    }
  },
  mounted() {
    let trigger = {
      trigger: ".wrp",
      start: 0,
      end: 50,
      scrub: 0,
      pin: true,
    };
    // let that = this;
    gsap.to(".ctn", {
      scrollTrigger: trigger,
      scale: 0.1,
      height: 100,
      width: 100,
      duration: 1,
      background: 'white',
      opacity: .8,
      y: '-40vh',
      borderRadius: "50%",
      ease: 'none',
    });
    gsap.to([".seperator", ".desc", ".title", ".link-list"], {
      scrollTrigger: trigger,
      duration: 1,
      opacity: 0,
      ease: 'expo.out',
    });
  }
};
</script>

<style lang="scss" scoped>
// @use "@assets/sass/config.scss";
// @use "@assets/sass/mixin.scss";
@use "@assets/sass/base";


.wrp {
  color: map-get($map: base.$colors, $key: "main");
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}

.ctn{
  background: none;
  box-shadow: none;
  text-align: center;
  max-width: 90%;
  &:hover{
    box-shadow: none;
  }
}


.seperator{
  margin: 25px 0;
}

.desc{
  @include base.margin-bottom(2rem);
  opacity: inherit;
}

.title {
  @include base.font-size(4rem);
  opacity: inherit;
}

.link-list{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  opacity: inherit;
}

.link-icon {
  width: 50px;
  @include base.margin-left(.5rem);
  @include base.margin-right(.5rem);
}
</style>
