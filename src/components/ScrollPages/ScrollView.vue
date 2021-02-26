<template>
  <div class="scroll-view" :id="scrollViewId">
    <div class="scroll-page-container" :id="scrollPageCtnId">
      <slot name="scroll-pages"></slot>
    </div>
  </div>
</template>

<script>
import scroll from "@assets/js/scroll.js";
import posi from "@assets/js/position.js";
export default {
  props: {
    slidePadding: {
      default: 0,
    },
  },
  data: () => ({
    curPage: 0,
    curPosition: 0,
    eleScrollView: document,
    eleScrollPageCtn: null,
    pageList: {},
    random: parseInt(Math.random() * 1000),
  }),
  mounted() {
    scroll.addSlideListener(this.slideUp, this.slideDown);
    scroll.addMobileSlideListener(this.slideUp, this.slideDown);
    this.getPageList();
    this.eleScrollView = document.querySelector("#" + this.scrollViewId);
    this.eleScrollPageCtn = document.querySelector("#" + this.scrollPageCtnId);

  },
  methods: {
    slideUp() {
      if (this.curPage > 0 && this.isReachTop()) {
        this.curPage--;
      }
    },
    slideDown() {
      if (
        this.curPage <
        Math.max(Object.keys(this.pageList) && this.isReachBottom())
      ) {
        this.curPage++;
      }
    },
    isReachTop() {
      return posi.getAbsolute(this.pageList[this.curPage], this.eleScrollView)
        .top;
    },
    isReachBottom() {},
    getPageList() {
      let that = this;
      document
        .querySelectorAll(`#${this.scrollViewId} .scroll-page`)
        .forEach((ele) => {
          that.pageList[parseInt(ele.dataset("page"))] = ele;
        });
    },
  },
  watch: {
    curPage: function (nV) {
      this.curPosition = posi.getAbsolute(
        this.pageList[nV],
        this.eleScrollView
      ).top;
    },
  },
  computed: {
    scrollViewId: function () {
      return "scroll-view-" + this.random;
    },
    scrollPageCtnId: function () {
      return "scroll-page-ctn-" + this.random;
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-view {
  overflow: hidden;
  position: relative;
  height: 1vh;
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