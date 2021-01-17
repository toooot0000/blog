<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
import Header from "@comps/Header.vue";

export default {
  name: "PageMain",
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.block {
  height: 2000px;
}
</style>
