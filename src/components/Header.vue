<template>
    <header>

        <div class="header-top"></div>

        <div class="container header-container">

            <a href="" class="header-logo">
                <img src="../assets/fspp-logo.png" alt="" class="header-logo_img">
                <p class="header-logo_text">
                    Проверка и оплата <br>задолженности ФССП РФ
                </p>
            </a>

            <div class="header-contacts">
                <div class="header-contacts_info">
                    <p class="header-contacts_text">
                        Единый бесплатный многоканальный справочный номер ФССП России:
                    </p>
                    <a href="" class="header-contacts_tel">
                        8 (800) 250 39 32
                    </a>
                </div>
                <div class="header-user">
                    <a href="" class="header-user_link">
                        <img src="../assets/img/svg/user.svg" alt="" class="header-user_icon">
                    </a>
                </div>
            </div>
        </div>



    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
header {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.header-top {
    height: 20px;
    width: 100vw;
    background-color: rgba(3, 160, 108, 1);

    @media screen and (max-width: 768px) {
        height: 5px;
    }
}
.header-container {
    display: flex;
    align-items: center;
    padding: 12px 0;

    @media screen and (max-width: 480px) {
        padding: 20px 0;
        justify-content: space-between;
    }
}
.header-logo, .header-contacts {
    width: 50%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 480px) {
        width: unset;
    }
}
.header-logo {
    display: flex;
    align-items: center;
}
.header-logo_img {
    margin-right: 12px;

    @media screen and (max-width: 480px) {
        width: 50px;
    }
}
.header-logo_text {
    font-size: 22px;
    color: rgba(0, 0, 0, 0.8);

    @media screen and (max-width: 900px) {
        font-size: 20px;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
}
.header-contacts {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.header-contacts_info {
    margin-right: 30px;
    max-width: 238px;
    text-align: right;

    @media screen and (max-width: 900px) {
        margin-right: 20px;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
}
.header-contacts_text {
    color: rgba(0, 0, 0, 0.3);
}
.header-contacts_tel {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);

    @media screen and (max-width: 900px) {
        font-size: 16px;
    }
}
.header-user_icon {
    width: 30px;
    height: 30px;
}
</style>