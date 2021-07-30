<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-main">

                <div class="parts footer-part">
                    <h5 class="parts-title">Основные разделы</h5>
                    <ul class="parts-list">
                        <li class="parts-item">
                            <a href="" class="parts-link">Проверка и оплата задолженностей ФССП</a>
                        </li>
                        <li class="parts-item">
                            <a href="" class="parts-link">Статьи о работе ФССП</a>
                        </li>
                        <li class="parts-item">
                            <a href="" class="parts-link">Новости</a>
                        </li>
                        <li class="parts-item">
                            <a href="" class="parts-link">Часто задаваемые вопросы</a>
                        </li>
                    </ul>
                </div>

                <div class="operator footer-part">
                    <h5 class="operator-title">Оператор сервиса</h5>
                    <div class="operator-data">
                        <span>ООО ”Простые платежи”</span>
                        <span>ИНН: 1660269024</span>
                        <span>ОГРН: 1161690087547</span>
                    </div>
                </div>

                <div class="contacts footer-part">
                    <h5 class="contacts-title">Контакты и поддержка</h5>
                    <div class="contacts-info">
                        <div class="contacts-adress">г. Казань, ул. Толбухина 11-54</div>
                        <p class="contacts-comment">В случае возникновения вопросов обращайтесь в службу поддержки клиентов по адресу: <a class="contacts-link">support@oplata-fssp.ru</a></p>
                    </div>

                </div>

                <div class="footer-text footer-part">
                    <p>При обращении по вопросам прохождения оплаты и погашения задолженности по ИП укажите, пожалуйста, номер транзакции, который был отправлен в письме о подтверждении успешной оплаты.</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>Сервис oplata-fssp.ru создан для удобной онлайн проверки и оплаты задолженностей по исполнительным производствам Федеральной службы судебных приставов России (ФССП). Сервис осуществляет свою деятельность в рамках соглашения с Федеральной службой судебных приставов №0011/14 от 11 мая 2017. Операторами по переводу денежных средств являются НКО “Монета.ру” (лицензия ЦБ РФ №3508-К от 02 июля 2012) и ПАО “Промсвязьбанк” (лицензия ЦБ РФ №3521 от 17 декабря 2014).</p>
            </div>
        </div>

    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
    background-color: rgba(246, 246, 246, 1);
    color: rgba(0, 0, 0, 0.8);
    padding: 34px 0 62px 0;

    @media screen and (max-width: 480px) {
        padding: 30px 0 40px 0;
    }
}
.footer-main {
    display: flex;
    flex-direction: row;
    padding-bottom: 23px;

    @media screen and (max-width: 800px) {
        flex-wrap: wrap;
        width: 100%;
        padding-bottom: 10px;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
}
.footer-part {
    max-width: 23.6%;
    margin-right: 20px;
    &:last-child {
        margin-right: 0;
    }

    @media screen and (max-width: 800px) {
        max-width: 45%;
        width: 45%;
        flex-direction: row;
        padding: 0px 30px 20px 0px;
    }

    @media screen and (max-width: 600px) {
        max-width: unset;
        width: 100%;
    }
}
h5 {
    padding-bottom: 12px;
}
.parts-link {
    font-size: 16px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.8);

    @media screen and (max-width: 480px) {
        font-weight: 400;
    }
}
.operator {
    width: 20.7%;

    @media screen and (max-width: 900px) {
        width: 30%;
    }

    @media screen and (max-width: 800px) {
        width: 45%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
}
.operator-data {
    display: flex;
    flex-direction: column;
    & span {
        margin-bottom: 2px;
    }
}

.contacts-adress {
    margin-bottom: 12px;
}
.contacts-link {
    color: rgba(3, 160, 108, 1);
    font-size: 14px;
    font-weight: 700;
}
.footer-text {
    margin-left: 40px;
    margin-top: 40px;

    @media screen and (max-width: 900px) {
        margin-left: 20px;
        margin-top: 0;
    }

    @media screen and (max-width: 800px) {
        margin-left: 0;
        margin-top: auto;
    }
}
.footer-bottom {
    @media screen and (max-width: 480px) {
        color: rgba(147, 147, 147, 1);
    }
}
</style>