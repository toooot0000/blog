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
        content:
          "我是博文内容！我是博文内容！我是博文内容！我是博文内容！我是博文内容！我是博文内容！\
          我是博文内容！我是博文内容！我是博文内容！我是博文内容！我是博文内容！我是博文内容！我是\
          博文内容！我是博文内容！我是博文内容！",
      }),
    },
  },
  beforeCreate() {
    addFormat();
    // console.log(new Date().format)
  },
};
</script>

<style lang="scss" scoped>
@use "@assets/sass/base.scss";
.post-item {
  @include base.padding(1rem);
  margin: 1.2rem auto;
  .upper {
    // display: flex;
    // justify-content: start;
    // align-items: baseline;
    // & > * {
    //   display: inline-block;
    // }
    // margin-bottom: 0.3rem;
  }
  .title {
    @include base.font-size(base.$font-size-title);
  }
  .time {
    @include base.font-size(base.$font-size-minor);
    // @include base.margin-left(1rem);
    color: base.$text-color-sub;
  }
}
</style>