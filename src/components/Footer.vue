<template>
  <div class="footer">
      <div class="line auther"> 叶汝楠 Jerry Ye </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '@assets/sass/base.scss';
  .footer{
    padding: 2rem 1rem;
    width: 100%;
    .line{
      display: block;
      // margin: auto;
      text-align: center;
      color: base.$text-color-footer;
    }
  }
</style>