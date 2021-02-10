<template>
  <div id="app">
    <!-- <NavBar :isActive='isHeaderAnimFinished'></NavBar> -->
    <Header v-model="isHeaderAnimFinished"></Header>
    <div class="container content">
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
import Header from "@comps/Header.vue";
// import NavBar from "@comps/NavBar.vue";

export default {
  name: "PageMain",
  components: {
    Header,
    // NavBar
  },
  data:()=>({
    isHeaderAnimFinished: false,
  })
};
</script>

<style lang="scss">
// @use "@assets/sass/base.scss";
.block {
  height: 2000px;
}
</style>
