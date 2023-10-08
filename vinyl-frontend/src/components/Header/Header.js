import React, {useEffect, useState} from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    const [history, setHistory] = useState("basket")

    const open_login_menu = async (e) => {
        const element = document.querySelector(".login-container")
        if (element.classList.contains("open")) {
            element.classList.remove("open")
        } else {
            element.classList.add("open")
            element.style.top = "30px";
            element.style.left = (e.clientX - 150)+ "px"
        }
        }

    const open_menu = async () => {
        const menu = document.querySelector(".menu-section");
        if (menu.classList.contains("open")) {
            menu.classList.remove("open")
        } else {
            menu.classList.add("open")
        }
    }

    const open_basket = async () => {
        const section = document.querySelector(".basket");
        const section2 = document.querySelector(".history");
        const menu_basket = document.querySelector(".basket-container");
        const window_closer = document.querySelector(".window-closer");
        console.log(section, section2)
        if (section) {
            if (section.classList.contains("open")) {
                window_closer.classList.remove("open")
                menu_basket.classList.remove("open")
                section.classList.remove("open")
            } else {
                window_closer.classList.add("open")
                menu_basket.classList.add("open")
                section.classList.add("open")
            }
        } else if (section2) {
            if (section2.classList.contains("open")) {
                window_closer.classList.remove("open")
                menu_basket.classList.remove("open")
                section2.classList.remove("open")
            } else {
                window_closer.classList.add("open")
                menu_basket.classList.add("open")
                section2.classList.add("open")
            }
        }
    }

    const open_history = async () => {
        if (history === "basket") {
            setHistory("history")
        } else {
            setHistory("basket")
        }
    }

    useEffect(() => {
        const header_element = document.querySelector(".header");
        const menu_element = document.querySelector(".menu-section");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                header_element.style.position = "fixed";
                header_element.style.top = "0px"
                menu_element.style.position = "fixed"
                menu_element.style.top = "30px"
            }
            else {
                header_element.style.top = "30px"
                header_element.style.position = "absolute";
                menu_element.style.top = "60px"
                menu_element.style.position = "absolute"
            }
            console.log(window.scrollY)
        });
    });

    return(
        <>
            <div className="pre-header">
                <p className="about-quality">Только оригинальный винил</p>
            </div>
            <section className="header">
                <div className="container header-container">
                    <Link to="/" className="site-title-link">
                        <h1 className="site-title">SiteName</h1>
                    </Link>
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-list-item">
                                <Link to="#" className="nav-link">
                                    <img src="/search_icon.png" alt="Поиск" className="nav-img"/>
                                </Link>
                            </li>
                            <li className="nav-list-item">
                                <Link onClick={open_login_menu} to="#" className="nav-link">
                                    <img src="/profile_icon.png" alt="Профиль" className="nav-img"/>
                                </Link>
                            </li>
                            <li className="nav-list-item">
                                <Link onClick={open_basket} to="#" className="nav-link">
                                    <img src="/supermarketcart_icon.png" alt="Корзина" className="nav-img"/>
                                </Link>
                            </li>
                            <li className="nav-list-item">
                                <Link onClick={open_menu} to="#" className="nav-link">
                                    <img src="/menu_icon.png" alt="Меню" className="nav-img"/>
                                </Link>
                            </li>
                        </ul>
                        <section className="login">
                            <div className="container login-container">
                                <h2 className="login-title">Авторизация</h2>
                                <div className="login-buttons">
                                    <button className="login-button select">Вход</button>
                                    <button className="login-button">Регистрация</button>
                                </div>
                                <input type="email" placeholder="Email" className="login-input"/>
                                <input type="password" placeholder="Пароль" className="login-input"/>
                                <button className="login-submit">войти</button>
                            </div>
                        </section>
                    </nav>
                </div>
            </section>

            <section className="menu-section">
                <div className="container menu-container">
                    <div className="catalogue">
                        <h2 className="list-title">catalogue</h2>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    Недавно добавлены
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    В продаже
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    Только на виниле
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    Forthcoming
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    Back Catalogue
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="features">
                        <h2 className="list-title">features</h2>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    Лейблы
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    Новости
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    Podcast
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    Оценка состояния
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    Поиск
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="info">
                        <h2 className="list-title">info</h2>
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    О нас
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="/general-terms" className="footer-item-link">
                                    Общие условия
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="/payment" className="footer-item-link">
                                    Оплата
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="/delivery" className="footer-item-link">
                                    Доставка
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="/contacts" className="footer-item-link">
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section onClick={open_basket} className="window-closer">

            </section>
            <section className="basket-section">
                <div className="container basket-container">
                    <div className="basket">
                        <button onClick={open_basket} className="basket-header-button">🢀</button>
                        <div className="basket-header">
                            {history === "basket" ? (<h2 className="basket-title">Корзина (0)</h2>) :
                                (<h2 className="basket-title">Заказы (0)</h2>)}
                            <button onClick={open_history} className="history-orders-button">
                                <img className="order-history-logo" src="/history.png" alt="История заказов"/>
                            </button>
                        </div>
                        {history === "basket" ? (
                            <div className="basket-body">
                                <p className="nothing-here">Ваша корзина пуста 🤕</p>
                            </div>
                            ) : (
                                <div className="basket-body">
                                    <p className="nothing-here">Вы еще ничего не заказывали 🤕</p>
                                    <div className="container received-order-card-container">
                                        <div className="container information-about-receipt-container">
                                            <Link to="/order-information" className="already-with-you-link">
                                                <p className="already-with-you">Уже у вас <b className="pointer">></b></p>
                                            </Link>
                                            <p className="date-of-receipt-history">Вы получили 16 июля</p>
                                            <p className="quantity-and-amount-of-goods">4 товарa • 15490₽</p>
                                        </div>
                                        <div className="container received-disks-container">
                                            <img src="/NMS0052-auto_width_266.jpg" alt="Изображение товара" className="product-images-item"/>
                                            <img src="/NMS0052-auto_width_266.jpg" alt="Изображение товара" className="product-images-item"/>
                                            <img src="/NMS0052-auto_width_266.jpg" alt="Изображение товара" className="product-images-item"/>
                                            <img src="/NMS0052-auto_width_266.jpg" alt="Изображение товара" className="product-images-item"/>
                                        </div>
                                    </div>
                                </div>)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;