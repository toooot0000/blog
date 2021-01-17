<template>
  <div id="app">
    <img alt="Vue logo" src="~@imgs/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@comps/HelloWorld.vue'

export default {
  name: 'PageBlog',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
$some : #998811;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $some;
  margin-top: 60px;
}
</style>
