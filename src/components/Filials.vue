<template>
    <div class="filials">
        <h2 class="filials-title">Территориальные отделения ФССП России</h2>
        <div class="filials-list">
            <div class="filial" v-for="(item, index) of filials" :key="index">
                <a href="" class="filial-name">{{item.name}}</a>
            </div>
        </div>
        <a href="" class="filials-all">Все территориальные отделения</a>
    </div>
</template>

<script>
export default {
    computed: {
        filials() {
            return this.$store.getters.getFilials
        }
    }
}
</script>

<style lang="scss">
.filials {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 15px 20px 40px 20px;
    border-radius: 10px;
    width: 63%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 900px) {
        width: 95%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 30px 20px;
    }

    @media screen and (max-width: 480px) {
        padding: 0;
        box-shadow: unset;
        border-radius: unset;
    }
}
.filials-title {
    padding-bottom: 15px;
}
.filial {
    margin-bottom: 10px;
}
.filial-name {
    font-weight: 700;
    color: rgba(32, 53, 56, 0.9);
}
.filials-all {
    color: rgba(3, 160, 108, 1);
    font-size: 16px;
    font-weight: 600;
    margin-top: auto;
}
</style>