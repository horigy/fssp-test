<template>
    <div class="articles">
        <h2 class="articles-title">Статьи о работе ФССП</h2>
        <div class="articles-list">
            <div class="article" v-for="(item, index) of articles" :key="index">
                <a href="">
                    <h4 class="article-title">{{item.title}}</h4>
                </a>
                <p class="article-text">{{item.text}}</p>
            </div>
        </div>
        <a href="" class="articles-all">Вcе статьи</a>
    </div>
</template>

<script>
export default {
    computed: {
        articles() {
            return this.$store.getters.getArticles
        }
    }
}
</script>

<style lang="scss">
.articles {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    margin-right: 20px;
    padding: 24px 25px 45px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 20px;
        padding: 30px 20px;
    }

    @media screen and (max-width: 480px) {
        padding: 0;
        box-shadow: unset;
        border-radius: unset;
    }
}
.articles-title {
    padding-bottom: 20px;
}
.articles-list {
    margin-bottom: 25px;

    @media screen and (max-width: 480px) {
        margin-bottom: 0;
    }
}
.article {
    margin-bottom: 20px;
}
.article-title {
    margin-bottom: 8px;
}
.article-text {
    color: rgba(32, 53, 56, 0.9);
    font-size: 16px;
    font-weight: 400;
}
.articles-all {
    color: rgba(3, 160, 108, 1);
    font-size: 16px;
    font-weight: 600;
    margin-top: auto;

    @media screen and (max-width: 480px) {
        margin-top: 0;
    }
}
</style>