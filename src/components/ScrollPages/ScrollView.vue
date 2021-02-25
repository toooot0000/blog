<template>
  <div class="scroll-view">
    <div
      class="scroll-page-container"
      :style="{
        top: top,
      }"
    >
      <slot name="scroll-pages"></slot>
    </div>
  </div>
</template>

<script>
import scroll from "@assets/js/scroll.js";
import posi from "@assets/js/position.js";
export default {
  data: () => ({
    curPosition: 0,
    top: 0,
    pageTopList: {},
  }),
  mounted() {
    scroll.addSlideListener(this.slideUp, this.slideDown);
    scroll.addMobileSlideListener(this.slideUp, this.slideDown);
    this.getPageTopList();
  },
  methods: {
    slideUp() {},
    slideDown() {},
    getPageTopList() {
      let that = this;
      document.querySelectorAll(".scroll-page").forEach((ele) => {
        that.pageTopList[parseInt(ele.dataset("page"))] = posi.getAbsolute().top;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-view {
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  .scroll-page-container {
    width: 100%;
    position: absolute;
    top: 0;
    overflow: auto;
    transition: all 0.5s;
  }
}
</style>