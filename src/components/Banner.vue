<template>
    <div v-if="!mobile" class="banner">
        <img src="../assets/img/banners/banner-1.png" alt="">
    </div>
    <div v-else class="banner">
        <img src="../assets/img/banners/banner-mobile.png" alt="">
    </div>
</template>

<script>
export default {
    computed: {
        mobile() {
            if( window.innerWidth <= 480 ) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
</script>

<style lang="scss">
.banner {
    grid-area: banner;
    margin-right: 20px;

    @media screen and (max-width: 800px) {
        margin-right: 0;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
        margin-bottom: 20px;

        & img {
            width: 100%;
        }
    }
}
</style>