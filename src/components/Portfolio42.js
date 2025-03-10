import React from 'react';
import './../css/animate.css';
import './../css/App.css';
import './../css/bootstrap.min.css';
import './../css/color-switcher.css';
import './../css/index.css';
import './../css/line-icons.css';
import './../css/magnific-popup.css';
import './../css/main.css';
import './../css/menu_sideslide.css';
import './../css/nivo-lightbox.css';
import './../css/owl.carousel.css';
import './../css/owl.theme.css';
import './../css/responsive.css';
import img1 from './../img/vidcover/img-1.jpg';

export default function Portfolio42() {
    return (
        <div>
            <section id="portfolios3" className="section">
                {/* Container Starts */}
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Video Ảnh Cưới Của Chúng Ta</h2>
                        <span>NTT LOVE DTHH</span>
                        <p className="section-subtitle">Hãy xem và cảm nhận tình yêu anh dành cho em nhé !!!</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/* Portfolio Controller/Buttons */}
                            {/* Portfolio Controller/Buttons Ends */}
                        </div>
                    </div>
                    {/* Portfolio Recent Projects */}
                    <div className="row portfolio">
                        <div className="col-lg-12 col-md-12 col-xs-12 mix development print">
                            <a
                              href="https://drive.google.com/file/d/1n3i2JYwCTkBnu8rR4bJncykY0gJqw22t/preview"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ display: 'block', width: '100%', textAlign: 'center' }}
                            >
                              <img
                                src={img1}
                                alt="Xem Video"
                                style={{ width: '100%', height: '720px', objectFit: 'cover' }}
                              />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Container Ends */}
            </section>
            {/* Portfolio Section Ends */}
        </div>
    );
}