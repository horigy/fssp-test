<template>
    <section class="info-section">
        <div class="container info-container">
            <Articles/>
            <Filials/>
        </div>
    </section>

</template>

<script>
import Articles from './Articles.vue'
import Filials from './Filials.vue'
export default {
    components: {
        Articles,
        Filials
    }
}
</script>

<style lang="scss">
.info-container {
    padding: 40px 0;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    @media screen and (max-width: 480px) {
        padding: 30px 0;
    }
}
</style>