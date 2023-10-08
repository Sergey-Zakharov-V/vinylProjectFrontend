import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./TrackInformationPage.css";
import {Link} from "react-router-dom";

const TrackInformationPage = () => {
    return (
        <>
            <Header/>
                <section className="track-information">
                    <div className="container shared-container ">
                        <div className="container track-information-container">
                            <img src="/NMS0052-auto_width_266.jpg" alt="Изображение альбома" className="album-image-item"/>
                        </div>
                        <div className="container container-with-product-information">
                            <div className="container product-container">
                                <div className="product-full-list">
                                    <div className="artistName">Various Artists</div>
                                    <div className="products-full-list__name">
                                        <h1 className="catalogue__product-name">Maieutics</h1>
                                    </div>
                                    <div className="la-bel">
                                        Danzha - DNZ001
                                    </div>
                                    <ul className="characteristics-goods">
                                        <li className="characteristics-goods-list">
                                            <p className="characteristics-goods-item item-indented">
                                                <b>Format: </b>12 Vinyl Only 180g
                                            </p>
                                            <p className="characteristics-goods-item">
                                                <b>RPM: </b>33⅓
                                            </p>
                                        </li>
                                        <li className="characteristics-goods-list">
                                            <p className="characteristics-goods-item item-indented">
                                                <b>Release: </b>2021-02-15
                                            </p>
                                            <p className="characteristics-goods-item">
                                                <b>Style: </b>House /  Minimal
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="container price-and-availability-information-container">
                                <div className="price-and-availability-information">
                                    <div className="product-price">
                                        <h2 className="rate">1100</h2>
                                        <h2 className="russian-ruble">₽</h2>
                                    </div>
                                    <div className="container product-availability-container">
                                        <div className="product-availability">
                                            <p className="circle">●</p>
                                            <p className="availability">В наличии</p>
                                        </div>
                                        <div className="add-to-basket-button">
                                            <button className="basket-button-item">
                                                <p className="pictures--basket-icon plus">+</p>
                                                <p className="pictures--basket-icon"><img className="basket-icon" src="/white-supermarketcart_icon_.png" alt="Корзина"/></p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container play-all-container">
                                <div className="button-play-all">
                                    <button className="button-play-all-item">
                                        <p className="button-text-item arrow-img">▶</p>
                                        <p className="button-text-item button-text">Play all</p>
                                    </button>
                                </div>
                                <div className="container list-tracks-in-disk-container">
                                    <ul className="list-tracks-in-disk">
                                        <li className="list-tracks-in-disk-items">
                                            <p className="tracks-in-disk-item arrow-img-play-track">▶</p>
                                            <p className="tracks-in-disk-item"><Link to="#" className="tracks-in-disk-items">A1. No Proof</Link></p>
                                        </li>
                                        <li className="list-tracks-in-disk-items">
                                            <p className="tracks-in-disk-item arrow-img-play-track">▶</p>
                                            <p className="tracks-in-disk-item"><Link to="#" className="tracks-in-disk-items">A1. No Proof</Link></p>
                                        </li>
                                        <li className="list-tracks-in-disk-items">
                                            <p className="tracks-in-disk-item arrow-img-play-track">▶</p>
                                            <p className="tracks-in-disk-item"><Link to="#" className="tracks-in-disk-items">A1. No Proof</Link></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="container full-information-about-track-container">
                                <p className="full-information-about-track-item">
                                    Capodopere are back with their yearly wax phenomenon, having Suolo on the sixth issue after stamping the catalog with Fanfaronade and Fenomen releases. He has seen touchable changes within the last couple of years as the visions morphed into more subtle and dusky ones, tailoring the pieces to the new eyes wide open conception.
                                    <br/>
                                    <br/>
                                    The ready-steady-go is how we have seen the outset of this record as “No Proof” slams into the speakers with an assaulting force, taking over the surroundings and advancing into the layers of bass lines. Some elements of the piece are carrying geological provenience as Suolo has grounded the percussions and laid the path for the coming vocals. It is certain that the magic happens around the deliberate vocals that as well as their enchanting presence throughout - mark the lively beginning of a musical hike.
                                    <br/>
                                    <br/>
                                    As we move to the next episode of the chronicles, “Rudiment” speaks a lot about Suolo’s founding bases, with the heavy lower notes being the first ones to reach the receptors. With no dissonance for ourselves, “Rudiment” is where he achieved the perfect balance between the low and high, inside a spiral of circling ambient buildup. Gently overlapping the A side, B1 is the piece that plunges between the beginning and the ending of this EP. He recreates imaginary sojourns through the layered dissociation of the field elements. It is as Susumu Yokota would produce music for club floors.
                                    <br/>
                                    <br/>
                                    “Oasis” is a well-anticipated continuation. The gurgling sub-bass is noted at the first sight yet the rest of the cookout is at the preparation stage. A slashing indigenous voice becomes the companion of the piece throughout the deserted lands of layered pads. We reach the oasis when the sandy kicks are taking over the desolated fields, peaking into the various luminescent shots paired with playful melodies of a recreated xylophone. Is it a somber downhill or an elevating escalator?
                                    <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container logo-track-container">
                        <Link to="#" className="logo-track-link"><img src="/Capodopere_logo-161x148.png" alt="Логотип" className="logo-track"/></Link>
                    </div>
                    <div className="list-har">
                        <p className="list-har-item">CPDLTD006</p>
                    </div>
                    <div className="container links-to-product-page-container">
                        <div className="container product-payment-link-container">
                            <img src="/vmm-pay_cln.png" alt="Платежные системы" className="payment-methods-img"/>
                            <p>Безопасная оплата</p>
                            <p>Надежная упаковка и доставка</p>
                        </div>
                        <div className="container link-to-telegram-channel-container">
                            <img src="/tg-logo.png" alt="Логотип Телеграм-канала" className="tg-logo-img"/>
                            <p className="channel-chat-support-text-item">Channel & <b className="chat">Chat</b></p>
                            <p className="channel-chat-support-text-item">Support</p>
                        </div>
                    </div>
                    <div className="container offers-container">
                        <div className="offers-container-text">
                            More Like This:
                        </div>
                        <div className="container offers-link-container">
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                            <Link to="#" className="offers-link"><img className="offers-link-img" src="/NMS0052-auto_width_266.jpg" alt="Логотип альбома"/></Link>
                        </div>
                        <div className="container recomend-tags-container">
                            <Link to="#" className="recomend-tags-container-link">
                                <img src="/pricetag.png" alt="Иконка ценника" className="recomend-tags-img"/>
                                <p className="recomend-tags-text">
                                    Suolo - No Proof EP / Capodopere - CPDLTD006
                                </p>
                            </Link>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default TrackInformationPage