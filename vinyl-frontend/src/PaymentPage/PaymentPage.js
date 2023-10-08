import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./PaymentPage.css";
import {Link} from "react-router-dom";

const PaymentPage = () => {
    return (
        <>
            <Header/>
                <section className="payment">
                    <div className="container secure-payment">
                        <div className="container secure-payment-base">
                            <h2 className="payment-title">
                                Бeзопасная оплата
                            </h2>
                            <ul className="secure-payment-info">
                                <li className="secure-payment-info-items paragraph-1">
                                    Мы предоставляем нашим клиентам наиболее удобные и прогрессивные методы безопасной оплаты. Картами платёжных систем Visa и MasterCard от банков, зарегистрированных на территории РФ, а также ЮMoney. Оплата  картами Visa / MasterCard / Maestro / МИР - максимально безопасна!
                                </li>
                                <li className="secure-payment-info-items secure-payment-info-items-img">
                                    <img src="/vmm-pay_cln.png" alt="Платежные системы Visa / MasterCard / Maestro" className="payment-card"/>
                                </li>
                                <li className="secure-payment-info-items paragraph-2">
                                    Мы серьезно относимся к безопасности нашего магазина и шифруем весь трафик с персональными данными с помощью сертификата SSL. Кроме того, мы не храним никаких сведений о картах и все платежи обрабатываются стандартным методом безопасной обработки транзакций с помощью сервиса электронных платежей !OКassa, где данные Вашей карты вводятся на специальной защищенной платежной странице.
                                </li>
                                <li className="secure-payment-info-items">
                                    Быстрый и безопасный платёж осуществляется в реальном времени с помощью защищённой передачи данных. В случае отмены заказа, средства возвращаются на соответствующий электронный счёт.
                                </li>
                                <li className="secure-payment-info-items">
                                    <Link to="#" className="payment-info-link">Узнайте больше о размещении заказа</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default PaymentPage
