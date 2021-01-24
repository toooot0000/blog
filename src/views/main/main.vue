<template>
  <div id="app">
    <NavBar></NavBar>
    <Header></Header>
    <div class="container">
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
import Header from "@comps/Header.vue";
import NavBar from "@comps/NavBar.vue";

export default {
  name: "PageMain",
  components: {
    Header,
    NavBar
  }
};
</script>

<style lang="scss" scoped>
.block {
  height: 2000px;
}
</style>
