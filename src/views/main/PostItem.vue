<template>
  <div class="container">
    <div class="ctn">
      <div class="left">
        <div class="time">
          {{ post.time.format("YYYY MM") }}
        </div>
        <div class="tags-list">
          <div class="tag">
            <!-- 之后再说 -->
          </div>
        </div>
      </div>
      <div class="right">
        <a class="title" href="#">
          {{ post.title }}
        </a>

        <div class="seperator"></div>
        <div class="content">
          <div class="text">
          {{ post.content }}

          </div>
        </div>
      </div>
      <div class="bg">
        <img src="" alt="" srcset="">
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
        tags: ["tag1", "tag2"],
      }),
    },
  },
  beforeCreate() {
    addFormat();
  },
};
</script>

<style lang="scss" scoped>
@use "@assets/sass/base.scss";
.ctn {
  @include base.padding(1.2rem);
  margin: 1.2rem auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 600px;
  position: relative;
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
    @include base.margin-right(2.2rem);
  }
  .time {
    @include base.font-size(base.$font-size-main);
    color: base.$text-color-minor;
    text-align: left;
    vertical-align: top;
    // margin-top: 0.3rem;
  }
  .title {
    @include base.font-size(base.$font-size-title);
    color: base.$text-color-main;
    font-weight: base.$font-weight-bold;
  }
  .seperator {
    @include base.margin-top(0.5rem);
    @include base.margin-bottom(0.5rem);
  }
  .content {
    width: 100%;
    @include base.overflow-eclipsis(
      $max-height: 6rem,
      $line-num: 4,
    )
  }
  .bg{
    position: absolute;
  }
}
</style>