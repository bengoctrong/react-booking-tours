import React, { Component } from 'react';
import styles from './Ourgallery.css';

class Ourgallery extends Component {
    render() {
        return (
            <section>
                <div className="region region-onepage-our-gallery">
                    <div id="block-views-0da21991801cce90f89c208d8fb76f5f" className="block block-views">
                        <div className="content">
                            <section className="t-gallery scroll-to-block">
                                <div className="container">
                                    <div className="t-title-block">
                                        <img src={process.env.PUBLIC_URL + 'images/outgallary.png'} alt="img" />
                                        <h2 className="block-title t-about-title">our gallery</h2>
                                        <div id="filters" className="cont-filter clearfix">
                                            <span className="button actual" data-filter="*">all</span>
                                            <span className="button" data-filter=".11">Africa</span>
                                            <span className="button" data-filter=".10">Asia</span>
                                            <span className="button" data-filter=".9">Australia</span>
                                            <span className="button" data-filter=".8">Europe</span>
                                            <span className="button" data-filter=".12">North America</span>
                                            <span className="button" data-filter=".13">South America</span> </div>
                                    </div>
                                </div>
                                <center>
                                    <div id="gallery-popap" className="isotope img-crop ">
                                        <div className="grid" />
                                        <a className="country-link 8 work-img" href="#gallery-box">
                                            <img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hot1.jpg'} alt="img" />
                                            <div className="info-panel">
                                                <div className="hot-price">$775.00</div>
                                                <h3 className="country-name">Istanbul, Turkey</h3>
                                            </div>
                                        </a>
                                        <a className="country-link 9 work-img" href="#gallery-box">
                                            <img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hot2.jpg'} alt="img" />
                                            <div className="info-panel">
                                                <div className="hot-price">$775.00</div>
                                                <h3 className="country-name">Istanbul, Turkey</h3>
                                            </div>
                                        </a>
                                        <a className="country-link 10 work-img" href="#gallery-box">
                                            <img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hot3.jpg'} alt="img" />
                                            <div className="info-panel">
                                                <div className="hot-price">$775.00</div>
                                                <h3 className="country-name">Istanbul, Turkey</h3>
                                            </div>
                                        </a>
                                        <a className="country-link 11 work-img" href="#gallery-box">
                                            <img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hot4.jpg'} alt="img" />
                                            <div className="info-panel">
                                                <div className="hot-price">$775.00</div>
                                                <h3 className="country-name">Istanbul, Turkey</h3>
                                            </div>
                                        </a>
                                        <a className="country-link 12 work-img" href="#gallery-box">
                                            <img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hot2.jpg'} alt="img" />
                                            <div className="info-panel">
                                                <div className="hot-price">$775.00</div>
                                                <h3 className="country-name">Istanbul, Turkey</h3>
                                            </div>
                                        </a>
                                        <a className="country-link 13 work-img" href="#gallery-box">
                                            <img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hot1.jpg'} alt="img" />
                                            <div className="info-panel">
                                                <div className="hot-price">$775.00</div>
                                                <h3 className="country-name">Istanbul, Turkey</h3>
                                            </div>
                                        </a>
                                        <a className="country-link 13 work-img" href="#gallery-box">
                                            <img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hot4.jpg'} alt="img" />
                                            <div className="info-panel">
                                                <div className="hot-price">$775.00</div>
                                                <h3 className="country-name">Istanbul, Turkey</h3>
                                            </div>
                                        </a>
                                        <a className="country-link 8 work-img" href="#gallery-box">
                                            <img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hot3.jpg'} alt="img" />
                                            <div className="info-panel">
                                                <div className="hot-price">$775.00</div>
                                                <h3 className="country-name">Istanbul, Turkey</h3>
                                            </div>
                                        </a>
                                    </div>
                                    <div id="gallery-box" className="mfp-with-anim mfp-hide">
                                        <div className="sw-container">
                                            <div className="swiper-container" data-mode="horizontal" data-slides-per-view={1} data-loop={1}>
                                                <div className="swiper-wrapper ">
                                                    <div className="swiper-slide">
                                                        <div className="plase-box background-parent">
                                                            <img className="center-image" src={process.env.PUBLIC_URL + 'images/hot4.jpg'} alt="img" />
                                                        </div>
                                                        <div className="place-info">
                                                            <div className="hot-price">$775.00</div>
                                                            <h3 className="country-name">Istanbul, Turkey</h3>
                                                            <p>Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex. Aenean semper augue at lorem mattis, ac tempor leo mattis. Donec feugiat in sem sed pellentesque.</p>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="plase-box background-parent">
                                                            <img className="center-image" src={process.env.PUBLIC_URL + 'images/hot1.jpg'} alt="img" />
                                                        </div>
                                                        <div className="place-info">
                                                            <div className="hot-price">$775.00</div>
                                                            <h3 className="country-name">Istanbul, Turkey</h3>
                                                            <p>Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex. Aenean semper augue at lorem mattis, ac tempor leo mattis. Donec feugiat in sem sed pellentesque.</p>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="plase-box background-parent">
                                                            <img className="center-image" src={process.env.PUBLIC_URL + 'images/hot2.jpg'} alt="img" />
                                                        </div>
                                                        <div className="place-info">
                                                            <div className="hot-price">$775.00</div>
                                                            <h3 className="country-name">Istanbul, Turkey</h3>
                                                            <p>Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex. Aenean semper augue at lorem mattis, ac tempor leo mattis. Donec feugiat in sem sed pellentesque.</p>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="plase-box background-parent">
                                                            <img className="center-image" src={process.env.PUBLIC_URL + 'images/hot2.jpg'} alt="img" />
                                                        </div>
                                                        <div className="place-info">
                                                            <div className="hot-price">$775.00</div>
                                                            <h3 className="country-name">Istanbul, Turkey</h3>
                                                            <p>Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex. Aenean semper augue at lorem mattis, ac tempor leo mattis. Donec feugiat in sem sed pellentesque.</p>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="plase-box background-parent">
                                                            <img className="center-image" src={process.env.PUBLIC_URL + 'images/hot1.jpg'} alt="img" />
                                                        </div>
                                                        <div className="place-info">
                                                            <div className="hot-price">$775.00</div>
                                                            <h3 className="country-name">Istanbul, Turkey</h3>
                                                            <p>Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex. Aenean semper augue at lorem mattis, ac tempor leo mattis. Donec feugiat in sem sed pellentesque.</p>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="plase-box background-parent">
                                                            <img className="center-image" src={process.env.PUBLIC_URL + 'images/hot2.jpg'} alt="img" />
                                                        </div>
                                                        <div className="place-info">
                                                            <div className="hot-price">$775.00</div>
                                                            <h3 className="country-name">Istanbul, Turkey</h3>
                                                            <p>Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex. Aenean semper augue at lorem mattis, ac tempor leo mattis. Donec feugiat in sem sed pellentesque.</p>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="plase-box background-parent">
                                                            <img className="center-image" src={process.env.PUBLIC_URL + 'images/hot2.jpg'} alt="img" />
                                                        </div>
                                                        <div className="place-info">
                                                            <div className="hot-price">$775.00</div>
                                                            <h3 className="country-name">Istanbul, Turkey</h3>
                                                            <p>Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex. Aenean semper augue at lorem mattis, ac tempor leo mattis. Donec feugiat in sem sed pellentesque.</p>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="plase-box background-parent">
                                                            <img className="center-image" src={process.env.PUBLIC_URL + 'images/hot2.jpg'} alt="img" />
                                                        </div>
                                                        <div className="place-info">
                                                            <div className="hot-price">$775.00</div>
                                                            <h3 className="country-name">Istanbul, Turkey</h3>
                                                            <p>Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex. Aenean semper augue at lorem mattis, ac tempor leo mattis. Donec feugiat in sem sed pellentesque.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pagination pagination-hide pagination-gallery" />
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            </section>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Ourgallery;
