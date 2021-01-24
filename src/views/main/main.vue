<template>
  <div id="app">
    <TopNavVar></TopNavVar>
    <Header></Header>
    <div class="container">
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
import TopNavVar from "../../components/TopNavVar.vue";
import Header from "@comps/Header.vue";

export default {
  name: "PageMain",
  components: {
    Header,
    TopNavVar
  }
};
</script>

<style lang="scss" scoped>
.block {
  height: 2000px;
}
</style>
