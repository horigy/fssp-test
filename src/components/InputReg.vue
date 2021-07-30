<template>
    <div class="select form-input">
        <p class="select-field" @click="optionsVisible = !optionsVisible">{{selected}}</p>
        <div class="select-options" v-show="optionsVisible">
            <p class="select-option"
                v-for="(item, index) in regions"
                :key="index"
                @click="selectOption(item)"
            >{{item}}</p>
        </div>
        <img class="select-arrow" :class="{'rotate': optionsVisible}" src="../assets/img/svg/select-arrow.svg" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            optionsVisible: false,
            selected: 'Все регионы',
            regions: [
                'Адыгея',
                'Алтай',
                'Алтайский край',
                'Амурская область',
                'Архангельская область',
                'Астраханская область',
                'Башкортостан',
                'Белгородская область',
                'Брянская область',
                'Бурятия',
                'Владимирская область',
                'Волгоградская область',
                'Вологодская область',
                'Воронежская область',
                'Дагестан',
                'Еврейская АО',
                'Забайкальский край',
                'Ивановская область',
                'Ингушетия',
                'Иркутская область',
                'Кабардино-Балкария',
                'Калининградская область',
                'Калмыкия',
                'Калужская область',
                'Камчатский край',
                'Карачаево-Черкесия',
                'Карелия',
                'Кемеровская область',
                'Кировская область',
                'Коми',
                'Костромская область',
                'Краснодарский край',
                'Красноярский край',
                'Крым',
                'Курганская область',
                'Курская область',
                'Ленинградская область',
                'Липецкая область',
                'Магаданская область',
                'Марий Эл',
                'Мордовия',
                'Москва',
                'Московская область',
                'Мурманская область',
                'Ненецкий АО',
                'Нижегородская область',
                'Новгородская область',
                'Новосибирская область',
                'Омская область',
                'Оренбургская область',
                'Орловская область',
                'Пензенская область',
                'Пермский край',
                'Приморский край',
                'Псковская область',
                'Ростовская область',
                'Рязанская область',
                'Самарская область',
                'Санкт-Петербург',
                'Саратовская область',
                'Сахалинская область',
                'Свердловская область',
                'Севастополь',
                'Северная Осетия - Алания',
                'Смоленская область',
                'Ставропольский край',
                'Тамбовская область',
                'Татарстан',
                'Тверская область',
                'Томская область',
                'Тульская область',
                'Тыва',
                'Тюменская область',
                'Удмуртия',
                'Ульяновская область',
                'Хабаровский край',
                'Хакасия',
                'Ханты-Мансийский АО - Югра',
                'Челябинская область',
                'Чечня',
                'Чувашия',
                'Чукотский АО',
                'Якутия',
                'Ямало-Ненецкий АО',
                'Ярославская область'
            ]
        }
    },
    methods: {
        selectOption(option) {
            this.selected = option
            this.optionsVisible = false
        }
    }
}
</script>

<style lang="scss">
.select {
    position: relative;
    flex: 1;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    font-size: 20px;

    @media screen and (max-width: 480px) {
        padding: 12px 20px !important;
        margin-bottom: 20px !important;
    }
}
.select-field {
    width: 100%;
    height: 100%;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
}
.select-options {
    position: absolute;
    z-index: 100;
    top: 107%;
    left: 0;
    width: 100%;
    max-height: 380px;
    overflow: hidden;
    overflow-y: scroll;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 18px 20px;

    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: rgba(3, 160, 108, 1);
    }

    @media screen and (max-width: 480px) {
        max-height: 300px;
        padding: 10px;
    }
}
.select-option {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 19px;

    @media screen and (max-width: 480px) {
        font-size: 16px;
        margin-bottom: 10px;
        font-weight: 400;
    }
}
.select-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-25%) rotate(0);
    right: 20px;
}
.rotate {
    transform: translateY(-25%) rotate(180deg);
}
</style>