<template>
  <div class="container post-item">
    <div class="upper">
      <div class="title">
        {{ post.title }}
      </div>
      <div class="time">
        {{ post.time.format("YYYY-MM") }}
      </div>
    </div>
    <div class="seperator"></div>
    <div class="content">
      {{ post.content }}
    </div>
  </div>
</template>

<script>
import addFormat from "@assets/js/dateAddFormat.js";
export default {
  props: {
    post: {
      type: Object,
      default: () => ({
        title: "我是博文标题",
        time: new Date(),
        content: "我是博文内容！",
      }),
    },
  },
  beforeCreate() {
    addFormat();
    // console.log(new Date().format)
  },
};
</script>

<style>
</style>