<template>
  <div id="app">
    <Header
      v-if="!isLoading"
      v-model="isHeaderAnimFinished"
      title="Jerry Ye"
      desc="这是Jerry Ye的个人网站。记录一些稀奇古怪的东西。"
    ></Header>
    <div v-if="isLoading" class="loading"></div>
    <div v-else class="content" id="content">
      <PostItem v-for="blog in blogList" :key="blog.id" :post="blog"></PostItem>
    </div>
    <Footer v-if="!isLoading"></Footer>
  </div>
</template>

<script>
import Header from "@comps/Header.vue";
import Footer from "@comps/Footer.vue";
import PostItem from "./PostItem";

import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(scrollTrigger);

import { fetch as fetchPolyfill } from "whatwg-fetch";

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
    blogList: [
      {
        id: 1,
        name: "name",
        path: "path",
      },
    ],
    configList: [],
  }),
  beforeMount() {
    // read blogs/config.json
    const that = this;
    // get configList
    fetchPolyfill("blogs/config.json")
      .then((r) => {
        return r.json();
      })
      .then((configList) => {
        // that.blogList = configList;
        for(let blog of configList){
          if(!blog['hide']){
            that.blogList.push(blog)
          }
        }
        that.isLoading = false;
      })
      .catch((e) => {
        console.log(e);
        fetchPolyfill("/blogs/config");
      });
  },
  mounted() {
    // console.log(this.blogList);
  },
  methods: {
    updateBlogList() {
      // read blogs/config.json
      const that = this;
      // get info.json
      let getBlogInfo = (config) => {
        // console.log(config);
        that.configList = config.blogList;
        let finishedNum = 0;
        for (const page of that.configList) {
          // console.log('page = '+page);
          window
            .fetch("/blogs/" + page.path + "/info.json")
            .then((r) => r.json())
            .then((r) => {
              // console.log(r);
              that.blogList.push({
                id: page.id,
                name: page.name,
                path: page.path,
                ...r,
              });
              // console.log(that.blogList)
              finishedNum++;
              if (finishedNum == that.configList.length) {
                that.isLoading = false;
                // console.log('Loading finished!');
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }
      };
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
  },
};
</script>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
  // margin-top: 200px;
}
</style>
