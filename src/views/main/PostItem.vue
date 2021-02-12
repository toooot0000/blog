<template>
  <div class="container">
    <div class="ctn">
      <div class="left">
        <div class="time">
          {{ post.time.format("YYYY\nMM") }}
        </div>
      </div>
      <div class="right">
        <div class="title">
          {{ post.title }}
        </div>

        <div class="seperator"></div>
        <div class="content">
          {{ post.content }}
        </div>
      </div>
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
.ctn {
  @include base.padding(1rem);
  margin: 1.2rem auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 600px;
  .upper {
    display: flex;
    justify-content: start;
    align-items: baseline;
    & > * {
      display: inline-block;
    }
    margin-bottom: 0.3rem;
  }
  .right {
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: start;
  }
  .left {
    display: flex;
    height: 100%;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: start;
    @include base.margin-right(1.2rem);
  }
  .time {
    @include base.font-size(base.$font-size-main);
    color: base.$text-color-minor;
    text-align: center;
  }
  .title {
    @include base.font-size(base.$font-size-title);
  }
}
</style>