import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./OrderInformationPage.css";
import {Link} from "react-router-dom";

const OrderInformation = () => {
    return (
        <>
            <Header/>
                <section className="order-information">
                    <div className="container shared-order-information-container">
                        <div className="container shared-order-information-container-base">
                            <div className="container already-with-you-container">
                                <h2 className="a-w-y">Уже у вас</h2>
                                <p className="date--of--receipt">Вы получили 16 июля</p>
                            </div>
                        </div>
                        <div className="container shared-order-information-container-base">
                            <div className="container delivery-data-container">
                                <h2 className="delivery-data-title">Данные доставки</h2>
                                <div className="container registration-date-container">
                                    <p className="registration-date-items">
                                        <img className="order-information-watch-img" src="/watch.png" alt="Изображение часов"/>
                                        Дата оформления
                                    </p>
                                    <p className="actual-date">13 июля, четверг</p>
                                </div>
                                <div className="container payment-method-container">
                                    <p className="payment-method-items">
                                        <img src="/card-bank.png" className="card-bank-img" alt="Изображение банковской карты"/>
                                        Способ оплаты
                                    </p>
                                    <p className="actual-method">Картой онлайн</p>
                                </div>
                                <div className="container delivery-pickup-address-container">
                                    <p className="delivery-pickup-address-items">
                                        <img className="placemark-img" src="/placemark.png" alt="Изображение метки"/>
                                        Адрес доставки / Самовывоза
                                    </p>
                                    <p className="actual-address">Москва, Московская ул., д.1</p>
                                </div>
                                <div className="container recipient-container">
                                    <p className="recipient-items">
                                        <img src="/human.png" className="human-img" alt="Изображение человека"/>
                                        Получатель
                                    </p>
                                    <p className="actual-data-recipient">Иван Иванов</p>
                                    <p className="actual-data-recipient">+7 999 999-99-99</p>
                                </div>
                            </div>
                        </div>
                        <div className="container shared-order-information-container-base">
                            <div className="container order-composition-container">
                                <h2 className="order-composition-title">Состав заказа</h2>
                                <div className="order-composition-item">
                                    <img src="/NMS0052-auto_width_266.jpg" alt="Лого альбома" className="album-picture-order-composition"/>
                                    <div className="container short-description-of-product-container">
                                        <p className="short-description-of-product">
                                            Various Artists Maieutics Danzha - DNZ001 2021-02-15 Style: House / Minimal
                                        </p>
                                        <div className="cost-of-goods-items">
                                            <p className="cost-of-goods"><b>15490₽</b></p>
                                            <p className="piece-good">1 шт.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-composition-item">
                                    <img src="/NMS0052-auto_width_266.jpg" alt="Лого альбома" className="album-picture-order-composition"/>
                                    <div className="container short-description-of-product-container">
                                        <p className="short-description-of-product">
                                            Various Artists Maieutics Danzha - DNZ001 2021-02-15 Style: House / Minimal
                                        </p>
                                        <div className="cost-of-goods-items">
                                            <p className="cost-of-goods"><b>15490₽</b></p>
                                            <p className="piece-good">1 шт.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-composition-item">
                                    <img src="/NMS0052-auto_width_266.jpg" alt="Лого альбома" className="album-picture-order-composition"/>
                                    <div className="container short-description-of-product-container">
                                        <p className="short-description-of-product">
                                            Various Artists Maieutics Danzha - DNZ001 2021-02-15 Style: House / Minimal
                                        </p>
                                        <div className="cost-of-goods-items">
                                            <p className="cost-of-goods"><b>15490₽</b></p>
                                            <p className="piece-good">1 шт.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-composition-item">
                                    <img src="/NMS0052-auto_width_266.jpg" alt="Лого альбома" className="album-picture-order-composition"/>
                                    <div className="container short-description-of-product-container">
                                        <p className="short-description-of-product">
                                            Various Artists Maieutics Danzha - DNZ001 2021-02-15 Style: House / Minimal
                                        </p>
                                        <div className="cost-of-goods-items">
                                            <p className="cost-of-goods"><b>15490₽</b></p>
                                            <p className="piece-good">1 шт.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default OrderInformation