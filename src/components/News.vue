<template>
    <section class="news-section">
        <div class="container news-container">
            <h4 class="news-title">Все новости</h4>
            <VueSlickCarousel v-bind="settings" ref="carousel">
                <div class="news-item" v-for="(item, index) in news" :key="index">
                    <img :src="require(`../assets/img/news/${item.img}`)" alt="" class="news-img" v-if="!mobile">
                    <img src="../assets/img/news/news-mobile.png" alt="" class="news-img" v-else>
                    <div class="news-content">
                        <a href="">
                            <h3 class="news-item_title">{{item.title}}</h3>
                        </a>
                        <p class="news-item_text">{{item.text}}</p>
                    </div>

                </div>

            </VueSlickCarousel>
            <a class="control prev" @click="slickPrev">
                <img class="prev-icon" src="../assets/img/svg/arrow.svg" alt="">
            </a>
            <a class="control next" @click="slickNext">
                <img class="next-icon" src="../assets/img/svg/arrow.svg" alt="">
            </a>
        </div>
    </section>

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: {
        VueSlickCarousel
    },
    computed: {
        news() {
            return this.$store.getters.getNews
        },
        mobile() {
            if( window.innerWidth <= 768 ) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    data() {
        return {
            currentSlide: 0,
            settings: {
                arrows: true,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        "breakpoint": 1200,
                        "settings": {
                            "slidesToShow": 3
                        }
                    },
                    {
                        "breakpoint": 900,
                        "settings": {
                            "slidesToShow": 2
                        }
                    },
                    {
                        "breakpoint": 768,
                        "settings": {
                            "slidesToShow": 1,
                            "dots": true,
                            "arrows": false
                        }
                    }
                ]
            }
        }
    },
    methods: {
        slickPrev() {
            this.$refs.carousel.prev()
        },
        slickNext() {
            this.$refs.carousel.next()
        }
    }
}
</script>

<style lang="scss">
.news-section {
    background-color: #F7F7F7;
}
.news-container {
    background-color: #F7F7F7;
    padding-bottom: 40px;
    padding-right: 1.5%;

    @media screen and (max-width: 768px) {
        padding-bottom: 50px;
        padding-right: 0;
    }
}
.news-title {
    color: rgba(3, 160, 108, 1);
    font-size: 16px;
    font-weight: 600;
    text-align: right;
    padding: 19px 5px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        padding: 10px 5px;
    }
}
.slick-slider {
    margin: 0 -26px;
}
.news-item {
    padding: 0 20px;
}
.news-img {
    width: 100%;
}
.news-content {
    padding: 10px 0 15px 5px;
}
.news-item_title {
    padding-bottom: 10px;
}
.news-item_text {
    font-size: 16px;
    color: rgba(32, 53, 56, 0.9);
    font-weight: 400;
}
.prev {
    position: absolute;
    left: -1.5%;
    top: 30%;

    @media screen and (max-width: 1100px) {
        top: 28%;
    }

    @media screen and (max-width: 900px) {
        top: 30%;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
}
.next {
    position: absolute;
    right: 0%;
    top: 30%;

    @media screen and (max-width: 1100px) {
        top: 28%;
    }

    @media screen and (max-width: 900px) {
        top: 30%;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }

}
.prev-icon {
    transform: rotate(180deg);
}




</style>