<template>
  <div class="wrapper">
    <div class="img-ctn">
      <img src="~@img/header/iconMain.png" alt="Icon" srcset="" />
    </div>
    <div class="title">{{ title }}</div>
    <div class="desc">{{ desc }}</div>
    <div class="link-list">
      <div class="link" v-for="(link, ind) in linkList" :key="ind">
        <a :href="link.href">
          <img
            :src="link.picPath || '~@img/header/iconLink-' + ind + '.pgn'"
            :alt="'linkPic' + ind"
            srcset=""
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "我是标题"
    },
    linkList: {
      type: Array,
      default: () => {
        [
          {
            href: "/",
            picPath: ""
          }
        ];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
