<template>
  <div id="app">
    <Header v-model="isHeaderAnimFinished"></Header>
    <div class="container content">
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
import Header from "@comps/Header.vue";
export default {
  name: "PageMain",
  components: {
    Header,
  },
  data:()=>({
    isHeaderAnimFinished: false,
  })
};
</script>

<style lang="scss">
.block {
  height: 2000px;
}
</style>
