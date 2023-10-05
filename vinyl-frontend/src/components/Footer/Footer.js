import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <>
            <section className="footer">
                <div className="container footer-container">
                    <h1 className="site-title site-title-footer">SiteName</h1>
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
                                <Link to="#" className="footer-item-link">
                                    Общие условия
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    Оплата
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    Доставка
                                </Link>
                            </li>
                            <li className="footer-list-item">
                                <Link to="#" className="footer-item-link">
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;