import React from "react";
import Header from "../components/Header/Header";
import "./HomePage.css"
import {Link} from "react-router-dom";
import Footer from "../components/Footer/Footer";

const HomePage = () => {

    return (
        <>
            <Header/>
            <section className="hero">
                <div className="container hero-container">
                    <Link to="#" className="hero-link">
                        <img className="hero-img"
                             src="https://3345rpm.ru/image/cache/catalog/demo/adverty/ADV_HPR010_-auto_width_450.png"
                             alt="hero img"/>
                    </Link>
                </div>
            </section>
            <section className="category">
                <div className="container category-container">
                    <ul className="category-list">
                        <li className="category-item">
                            <button className="category-button select">в продаже</button>
                        </li>
                        <li className="category-item">
                            <button className="category-button">только на виниле</button>
                        </li>
                        <li className="category-item">
                            <button className="category-button">рекомендации</button>
                        </li>
                        <li className="category-item">
                            <button className="category-button">низкая стоимость</button>
                        </li>
                        <li className="category-item">
                            <button className="category-button">ретро каталог</button>
                        </li>
                    </ul>
                    <div className="play-all">
                        <button className="play-all-button">▶ Play All</button>
                    </div>
                </div>
            </section>
            <section className="music-catalog">
                <div className="container music-catalog-container">
                    <div className="music-catalog">
                        <ul className="music-catalog-list">
                            <li className="music-catalog-item">
                                <Link to="/track-information" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="music-catalog-item">
                                <Link to="#" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="music-catalog-item">
                                <Link to="#" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="music-catalog-item">
                                <Link to="#" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="music-catalog-item">
                                <Link to="#" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="music-catalog-item">
                                <Link to="#" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="music-catalog-item">
                                <Link to="#" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="music-catalog-item">
                                <Link to="#" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="music-catalog-item">
                                <Link to="#" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="music-catalog-item">
                                <Link to="#" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="music-catalog-item">
                                <Link to="#" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="music-catalog-item">
                                <Link to="#" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="music-catalog-item">
                                <Link to="#" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="music-catalog-item">
                                <Link to="#" className="music-catalog-link">
                                    <img
                                        src="https://3345rpm.ru/image/cache/catalog/Releases/NMS005.2/NMS0052-auto_width_266.jpg"
                                        alt="Фото пластинки" className="music-catalog-img"/>
                                    <div className="music-catalog-description">
                                        <h3 className="music-title">BIRD DOES NOT DOZE VOL.2</h3>
                                        <p className="music-artist-name">Various Artists</p>
                                        <p className="music-label">Nervmusic</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default HomePage