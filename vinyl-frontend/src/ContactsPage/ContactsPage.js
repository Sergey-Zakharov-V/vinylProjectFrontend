import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./ContactsPage.css";

const ContactsPage = () => {
    return (
        <>
            <Header/>
                <section className="contacts">
                    <div className="container container-base">
                        <div className="container rounded-container">
                            <div className="container contacts-container">
                                <form action="#" className="contacts-form">
                                    <h2 className="contacts-title">
                                        Напишите Нам
                                    </h2>
                                    <input type="text" className="form-input form-input-text" placeholder="* Ваше имя" required/>
                                    <input type="email" className="form-input form-input-text" placeholder="* Ваш E-Mail" required/>
                                    <textarea className="form-input form-input-text message-input" maxLength="500" placeholder="* Ваш вопрос или сообщение" required/>
                                    <button type="submit" className="form-button">Отправить сообщение</button>
                                    <p className="consent_text">
                                        Нажимая на кнопку «Отправить сообщение», Вы даете согласие на обработку персональных данных.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default ContactsPage