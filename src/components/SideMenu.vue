<template>
    <div class="sidemenu">
        <div class="sidemenu-item" v-for="(item, index) in features" :key="index" v-show="!mobile">
            <div class="sidemenu-item_icon">
                <Icon :name="`${item.img}`" class="sidemenu-svg" width="65px"/>
            </div>
            <div class="sidemenu-item_info">
                <h3 class="sidemenu-item_title">{{item.title}}</h3>
                <p class="sidemenu-item_desc">{{item.text}}</p>
            </div>
        </div>
        <div class="sidemenu-item"
            v-for="(item, index) in features"
            :key="item.title"
            v-show="mobile"
            @click="showFull(index)"
        >
            <div class="sidemenu-item_icon">
                <Icon :name="`${item.img}`" class="sidemenu-svg" width="65px"/>
            </div>
            <div class="sidemenu-item_info">
                <h3 class="sidemenu-item_title">{{item.title}}</h3>

            </div>
            <p class="sidemenu-item_desc" v-show="item.show">{{item.text}}</p>
            <img src="../assets/img/svg/question.svg" alt="" class="sidemenu-question">
        </div>
    </div>
</template>

<script>
import Icon from './SvgIcon.vue'
export default {
    components: {
        Icon
    },
    data() {
        return {
            features: [
                {
                    id: 1,
                    title: "Официальный источник данных",
                    text: "Сведения о задолженностях получаются из официального банка данных исполнительных производств ФССП России",
                    img: 'fssp',
                    show: false
                },
                {
                    id: 2,
                    title: "Гарантия погашения",
                    text: "Сведения об оплате передаются в ФССП России с использованием шлюзов Федерального казначейства",
                    img: 'garanty',
                    show: false
                },
                {
                    id: 3,
                    title: "Безопасные платежи",
                    text: "Безопасность платежей и данных банковских карт подтверждается сертификатом PCI DSS",
                    img: 'security',
                    show: false
                },
                {
                    id: 4,
                    title: "Квитанция об оплате",
                    text: "Квитанция будет отправлена на указанный Вами адрес электронной почты сразу же после оплаты",
                    img: 'bill',
                    show: false
                }
            ]
        }
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
    },
    methods: {
        showFull(id) {
            if(this.features[id].show === true) {
                this.features.forEach((e) => e.show = false)
            } else {
                this.features.forEach((e) => e.show = false)
                this.features[id].show = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.sidemenu {
    margin-top: -5px;
    display: flex;
    flex-direction: column;
    width: 300px;
    font-size: 14px;
    font-weight: 400;
    grid-area: sidemenu;

    @media screen and (max-width: 800px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20px;
    }
}
.sidemenu-item {
    height: 152px;
    display: flex;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    position: relative;

    @media screen and (max-width: 1100px) {
        height: 25%;
    }
    @media screen and (max-width: 800px) {
        height: auto;
        width: 48%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        box-shadow: unset;
        border: 2px solid rgba(3, 160, 108, 1);
        border-radius: 3px;
        height: 100px;
    }
    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px;
        height: unset;
    }

}
.sidemenu-item_icon {
    margin-right: 10px;

    @media screen and (max-width: 480px) {
        width: 25%;
        margin-right: 0;
        display: flex;
        justify-content: flex-start;
    }
}
.sidemenu-item_info {
    width: 200px;

    @media screen and (max-width: 768px) {
        width: auto;
    }

    @media screen and (max-width: 480px) {
        width: 75%;
    }
}
.sidemenu-item_title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;

    @media screen and (max-width: 900px) {
        font-size: 16px;
    }

    @media screen and (max-width: 768px) {
        color: rgba(3, 160, 108, 1);
    }
}
.sidemenu-item_desc {
    color: rgba(89, 109, 123, 1);

    @media screen and (max-width: 480px) {
        width: 100%;
        margin-top: 10px;
    }
}

.sidemenu-question {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>