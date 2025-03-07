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
import img1 from './../img/vidcover/img-2.jpg';

export default function Portfolio51() {
    return (
        <div>
            <section id="portfolios3" className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Video Chuyến đi Honeymoon - Đà Lạt 2025 của chúng ta</h2>
                        <span>NTT LOVE DTHH</span>
                        <p className="section-subtitle">Hãy xem và cảm nhận tình yêu anh dành cho em nhé !!!</p>
                    </div>
                    {/* Nếu không cần phần này có thể loại bỏ */}
                    <div className="row">
                        <div className="col-md-12">
                            {/* Portfolio Controller/Buttons */}
                        </div>
                    </div>
                    <div className="row portfolio justify-content-center">
                        <div className="col-lg-6 col-md-6 col-6 mix development print">
                            <a
                              href="https://drive.google.com/file/d/11AX83ZIqUerGXymvMSEMMpC_n8vXEuQt/view"
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
            </section>
        </div>
    );
}
