<template>
    <div class="wrapper">
        <div class="img-ctn">
            <img src="~@img/header/icon-big.png" alt="Icon" srcset="">
        </div>
        <div class="title">标题</div>
        <div class="desc">描述</div>
        <div class="link-list">
            <div class="link"  v-for="(link, ind) in linkList"  :key="ind">
                <a href="/">
                <img :src="'~@img/header/linkPic-'+ind+'.pgn'" :alt="'linkPic'+ind" srcset="">
                </a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.wrapper{
    margin: 20px;
}
</style>