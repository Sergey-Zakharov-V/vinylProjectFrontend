import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./DeliveryPage.css";
import {Link} from "react-router-dom";

const DeliveryPage = () => {
    return (
        <>
            <Header/>
                <section className="delivery">
                    <div className="container processing-orders">
                        <div className="container processing-orders-base">
                            <h2 className="processing-title">Обработка и доставка заказов</h2>
                            <ul className="processing-orders-info">
                                <li className="processing-orders-info-items">
                                    Оформление заказов на сайте производится в любое время, обработка заказов происходит с 10:00 до 18:00, Пн.-Сб.
                                </li>
                                <li className="processing-orders-info-items processing-orders-info-items-link">
                                    <Link to="#" className="processing-orders-info-link">Узнайте больше о размещении заказа</Link>
                                </li>
                                <li className="processing-orders-info-items processing-orders-info-items-img">
                                    <img src="/EMS.png" alt="EMS" className="delivery-img ems-img"/>
                                    <img src="/sdeklogo.png" alt="SDEK" className="delivery-img sdek-img"/>
                                </li>
                                <li className="processing-orders-info-items">
                                    Курьерские заказы "СДЕК" / "EMS Москва" застрахованы и имеют треки отслеживания, доставка осуществляется только под расписку.
                                </li>
                                <li className="processing-orders-info-items">
                                    Точное время доставки согласовывается непосредственно с курьером по телефону.
                                </li>
                                <li className="processing-orders-info-items">
                                    <img src="/dostavistago.png" alt="ЯндексGo Dostavista" className="delivery-img dost-img"/>
                                </li>
                                <li className="processing-orders-info-items">
                                    По предварительной договоренности оплаченные заказы могут быть отправлены с помощью сервисов Яндекс Go или Dostavista.
                                </li>
                                <li className="processing-orders-info-items">
                                    Уточняйте стоимость и время доставки у этих операторов.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container global-delivery">
                        <div className="container delivery-city">
                            <div className="container delivery-city-base">
                                <h3 className="delivery-city-title">Доставка по Москве</h3>
                                <ul className="delivery-city-info">
                                    <li className="delivery-city-info-item">
                                        <b>Курьерские заказы</b> обрабатываются и доставляются покупателю в течении 1-3 рабочих дней в зависимости от оператора доставки.
                                    </li>
                                    <li className="delivery-city-info-item">
                                        После совершения покупки - мы уточним детали доставки заказа по телефону.
                                    </li>
                                    <li className="delivery-city-info-item">
                                        Стоимость доставки курьером в пределах МКАД - 450 <b className="ruble">₽</b>
                                    </li>
                                    <li className="delivery-city-info-item">
                                        Заказы на сумму более 20 000 <b className="ruble">₽</b> доставляем бесплатно
                                    </li>
                                    <li className="delivery-city-info-item">
                                        <b>Самовывоз</b> - бесплатно от станции метро: Речной вокзал
                                    </li>
                                    <li className="delivery-city-info-item dop">
                                        с 12:00 - 17:00 / 21:00 - 23:30, Пн.- Ср. / c 12:00 - 23:00, Сб., Вс.
                                    </li>
                                    <span className="delivery-city-info-item yellow-background">
                                        Cамовывоз временно не осуществляется без предварительной договоренности
                                    </span>
                                    <li className="delivery-city-info-item pickup-link-item">
                                        <Link to="#" className="pickup-link">Подробнее о самовывозе</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="container delivery-country">
                             <div className="container delivery-country-base">
                                 <h3 className="delivery-country-title">Доставка по РФ</h3>
                                 <ul className="delivery-country-info">
                                     <li className="delivery-country-info-item">
                                         <b>Почтовые заказы</b> обрабатываются в течении рабочего дня и доставляются оператору доставки до 18:00 Пн.-Пт.
                                     </li>
                                     <li>
                                         Доставку до пункта выдачи соответствующего почтовому индексу осуществляет "Почта России". В стоимость доставки включена надежная транспортная упаковка на 1 - 20 пластинок. Все отправления застрахованы. Заказы на сумму более 20 000 <b className="ruble">₽</b> доставляем бесплатно. Сроки доставки 4 - 9 рабочих дней в зависимости от удаленности региона.
                                     </li>
                                     <li>
                                         После отправления посылки наши клиенты получают уведомление об отправлении, в котором сообщается уникальный трек-номер почтового отправления, с его помощью очень просто следить за вашей посылкой в системах отслеживания отправлений.
                                     </li>
                                 </ul>
                             </div>
                        </div>
                    </div>
                    <div className="container global-pretension">
                        <div className="container pretension-container">
                            <div className="container pretension-base">
                                <p className="pretension">Вопросы или претензии по работе сайта магазина, а также ваши пожелания принимаются через <Link to="#" className="pretension-link">форму обратной связи</Link> или по телефону:</p>
                                <p className="pretension">+7 (999) 999 9999.</p>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default DeliveryPage