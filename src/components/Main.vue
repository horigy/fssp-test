<template>
    <section class="main-section">
        <div class="main container">
            <Search/>
            <SideMenu/>
            <Banner v-if="!mobile"/>
        </div>
        <Banner v-if="mobile"/>
    </section>

</template>

<script>
import Search from './Search.vue'
import Banner from './Banner.vue'
import SideMenu from './SideMenu.vue'

export default {
    components: {
        Search,
        Banner,
        SideMenu
    },
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
.main {
    padding-top: 30px;
    padding-bottom: 23px;
    display: grid;
    grid-template-areas:
        "search sidemenu"
        "banner sidemenu";

    @media screen and (max-width: 800px) {
        grid-template-areas:
        "search"
        "sidemenu"
        "banner";
    }

    @media screen and (max-width: 768px) {
        padding-top: 20px;
    }

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
}
</style>