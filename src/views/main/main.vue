<template>
  <div id="app">
    <Header v-model="isHeaderAnimFinished"></Header>
    <div v-if="isLoading" class="loading"></div>
    <div v-else class="content" id="content">
      <PostItem
        v-for="blog in blogList"
        :key="blog.id"
        :post="blog"
      ></PostItem>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@comps/Header.vue";
import PostItem from "./PostItem";
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
    PostItem,
    Footer,
  },
  data: () => ({
    isHeaderAnimFinished: false,
    isLoading: true,
    blogList: [],
    configList: [],
  }),
  beforeMount() {
    // read blogs/config.json
    const that = this;
    // get info.json 
    let getBlogInfo = (config) => {
        console.log(config);
        that.configList = config.blogList;
        let finishedNum = 0;
        for (const page of that.configList) {
          // console.log('page = '+page);
          window
            .fetch("/blogs/" + page.path + "/info.json")
            .then((r) => r.json())
            .then((r)=>{
              // console.log(r);
              that.blogList.push({
                id: page.id,
                name: page.name,
                ...r
              });
              // console.log(that.blogList)
              finishedNum++;
              if(finishedNum == that.configList.length){
                that.isLoading = false;
                // console.log('Loading finished!');
              }
            })
            .catch((e)=>{
              console.log(e);
            })
        }
      }
    window
      .fetch("/blogs/config.json")
      .then((r) => {
        return r.json();
      })
      .then(getBlogInfo)
      .catch((e) => {
        console.log(e);
      });
  },
  mounted() {
    console.log(this.blogList);
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
.post-item {
  transform: translateY(100vh);
  opacity: 0;
}
</style>
