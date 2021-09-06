

<template>
    <div class="search">
        <h1 class="search-title">Проверить задолженность у судебных приставов</h1>
        <div class="search-body" v-if="!mobile">
            <div class="search-menu">
                <a
                    v-for="(item, index) in search"
                    :key="index" class="search-menu_item"
                    v-bind:class="{active: item.show}"
                >
                    {{item.type}}
                </a>
            </div>
            <div class="search-forms">
                <form action="" id="phys" v-show="search[0].show">
                    <div class="form-row">
                        <input type="text" name="name" class="form-input input-left" placeholder="Иванов Иван Иванович">
                        <date-picker valueType="format" placeholder="09.03.1986" class="form-right">
                            <i slot="icon-calendar">
                                <img src="../assets/img/svg/calendar.svg" alt="">
                            </i>
                        </date-picker>
                    </div>
                    <div class="form-row">
                        <InputReg/>
                        <button class="form-btn form-right">Проверить задолженности</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="search-body-mobile" v-else>
            <ul class="search-menu-mobile">
                <li class="search-item-mobile">
                    <div class="search-head-mobile" @click="showFull(0)">
                        <img src="../assets/img/svg/user_2.svg" class="search-icon-mobile" alt="">
                        <a class="search-title-mobile">{{search[0].type}}</a>
                    </div>
                    <div class="search-form-mobile">
                        <form action="" id="phys" v-show="search[0].show">
                            <div class="form-row">
                                <input type="text" name="name" class="form-input input-left" placeholder="Иванов Иван Иванович">
                                <date-picker valueType="format" placeholder="09.03.1986" class="form-right">
                                    <i slot="icon-calendar">
                                        <img src="../assets/img/svg/calendar.svg" alt="">
                                    </i>
                                </date-picker>
                            </div>
                            <div class="form-row">
                                <InputReg/>
                                <button class="form-btn form-right">Проверить задолженности</button>
                            </div>
                        </form>
                    </div>
                </li>
                <li class="search-item-mobile">
                    <div class="search-head-mobile" @click="showFull(1)">
                        <img src="../assets/img/svg/company.svg" class="search-icon-mobile" alt="">
                        <a class="search-title-mobile">{{search[1].type}}</a>
                    </div>
                    <div class="search-form-mobile">
                        <form action="" id="phys" v-show="search[1].show">
                            <div class="form-row">
                                <input type="text" name="name" class="form-input input-left" placeholder="Иванов Иван Иванович">
                                <date-picker valueType="format" placeholder="09.03.1986" class="form-right">
                                    <i slot="icon-calendar">
                                        <img src="../assets/img/svg/calendar.svg" alt="">
                                    </i>
                                </date-picker>
                            </div>
                            <div class="form-row">
                                <InputReg/>
                                <button class="form-btn form-right">Проверить задолженности</button>
                            </div>
                        </form>
                    </div>
                </li>
                <li class="search-item-mobile">
                    <div class="search-head-mobile" @click="showFull(2)">
                        <img src="../assets/img/svg/individual-ent.svg" class="search-icon-mobile" alt="">
                        <a class="search-title-mobile">{{search[2].type}}</a>
                    </div>
                    <div class="search-form-mobile">
                        <form action="" id="phys" v-show="search[2].show">
                            <div class="form-row">
                                <input type="text" name="name" class="form-input input-left" placeholder="Иванов Иван Иванович">
                                <date-picker valueType="format" placeholder="09.03.1986" class="form-right">
                                    <i slot="icon-calendar">
                                        <img src="../assets/img/svg/calendar.svg" alt="">
                                    </i>
                                </date-picker>
                            </div>
                            <div class="form-row">
                                <InputReg/>
                                <button class="form-btn form-right">Проверить задолженности</button>
                            </div>
                        </form>
                    </div>
                </li>
                <li class="search-item-mobile">
                    <div class="search-head-mobile" @click="showFull(3)">
                        <img src="../assets/img/svg/briefcase.svg" class="search-icon-mobile" alt="">
                        <a class="search-title-mobile">{{search[3].type}}</a>
                    </div>
                    <div class="search-form-mobile">
                        <form action="" id="phys" v-show="search[3].show" >
                            <div class="form-row">
                                <input type="text" name="name" class="form-input input-left" placeholder="Иванов Иван Иванович">
                                <date-picker valueType="format" placeholder="09.03.1986" class="form-right">
                                    <i slot="icon-calendar">
                                        <img src="../assets/img/svg/calendar.svg" alt="">
                                    </i>
                                </date-picker>
                            </div>
                            <div class="form-row">
                                <InputReg/>
                                <button class="form-btn form-right">Проверить задолженности</button>
                            </div>
                        </form>
                    </div>
                </li>


            </ul>

        </div>



    </div>
</template>

<script>
import InputReg from './InputReg.vue'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    components: {
        InputReg,
        DatePicker
    },
    data() {
        return {
            search: [
                {
                    type: 'Физическое лицо',
                    show: true
                },
                {
                    type: 'Юридическое лицо',
                    show: false
                },
                {
                    type: 'Номер ИП',
                    show: false
                },
                {
                    type: 'Номер ИД',
                    show: false
                },
            ]
        }
    },
    methods: {
        showFull(index) {
            if(this.search[index].show === true) {
                this.search.forEach((e) => e.show = false)
            } else {
                this.search.forEach((e) => e.show = false)
                this.search[index].show = true
            }
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
    }
}
</script>

<style lang="scss">
.search {
    padding-bottom: 0px;
    margin-right: 20px;
    font-size: 20px;
    grid-area: search;

    @media screen and (max-width: 800px) {
        margin-right: 0;
    }
}
.search-title {
    margin-bottom: 33px;

    @media screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
}
.search-body {
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    color: rgba(77, 77, 77, 1);

    @media screen and (max-width: 768px) {
        padding: 20px 30px;
    }
}
.search-menu {
    display: flex;
    justify-content: space-evenly;
    background-color: #f6f6f6;
    color: #f6f6f6;

    @media screen and (max-width: 768px) {
        margin-bottom: 10px;
    }
}
.search-menu_item {
    padding: 10px 0px;
    flex: 1;
    text-align: center;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.7);

    @media screen and (max-width: 1100px) {
        font-size: 16px;
        padding: 10px;
    }
}
.active {
    background-color: #fff;
    color: rgba(77, 77, 77, 1);
}
.search-forms {
    padding: 30px 40px 20px 25px;

    @media screen and (max-width: 1100px) {
        padding: 20px 16px;
    }

    @media screen and (max-width: 768px) {
        padding: 0;
    }
}
.form-row {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
}
.input-left {
    flex: 1;
}
.form-right {
    width: 303px;
    @media screen and (max-width: 1100px) {
        width: 200px;
    }
}
.form-input {
    background: #FFFFFF;
    border: 1.5px solid rgba(65, 65, 65, 0.3);
    box-sizing: border-box;
    border-radius: 8px;
    padding: 20px 16px;
    font-size: 18px;
    margin-right: 20px;
    margin-bottom: 22px;

    @media screen and (max-width: 1100px) {
        padding: 16px 14px;
        margin-right: 18px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 900px) {
        font-size: 16px;
    }

    @media screen and (max-width: 480px) {
        background-color: rgba(3, 160, 108, 0.07);
        padding: 14px 20px;
        margin-bottom: 10px;
    }

}
.mx-datepicker {
    @media screen and (max-width: 480px) {
        margin-bottom: 10px;
    }
}
.mx-input {
    background: #FFFFFF;
    border: 1.5px solid rgba(65, 65, 65, 0.3);
    box-sizing: border-box;
    border-radius: 8px;
    padding: 31px 20px !important;
    font-size: 18px;

    @media screen and (max-width: 1100px) {
        padding: 26px 10px !important;
    }

    @media screen and (max-width: 900px) {
        font-size: 16px;
    }

    @media screen and (max-width: 480px) {
        background-color: rgba(3, 160, 108, 0.07);
        padding: 23px 20px !important;
    }
}
.mx-icon-calendar {
    right: 20px;
}
.form-btn {
    color: rgba(3, 160, 108, 1);
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid rgba(3, 160, 108, 1);
    padding: 20px 10px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 22px;
    cursor: pointer;

    @media screen and (max-width: 1100px) {
        padding: 0px 5px;
        margin-bottom: 22px;
        font-size: 16px;
    }

    @media screen and (max-width: 480px) {
        margin-bottom: 0;
        padding: 14px 20px;
    }
}
.input-left, .form-right, .form-input, .mx-input {
    @media screen and (max-width: 480px) {
        width: 100%;
        flex: auto;
        margin-right: 0;
    }
}
.search-item-mobile {
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 20px;
    margin-bottom: 20px;
}
.search-icon-mobile {
    margin-right: 25px;
}
.search-title-mobile {
    font-size: 16px;
    color: rgba(77, 77, 77, 1);
}
.search-form-mobile {

    & form {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
    }
}

</style>