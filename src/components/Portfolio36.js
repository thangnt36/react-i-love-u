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
import img1 from './../img/portfolio/img-141.jpg';
import img2 from './../img/portfolio/img-142.jpg';
import img3 from './../img/portfolio/img-143.jpg';
import img4 from './../img/portfolio/img-144.jpg';
import img5 from './../img/portfolio/img-145.jpg';
import img6 from './../img/portfolio/img-146.jpg';

export default function Portfolio36() {
    return (
        <div>
            <section id="portfolios" className="section">
  {/* Container Starts */}
  <div className="container">
    <div className="section-header">          
      <h2 className="section-title">Bộ ảnh Kỉ Niệm 4 Năm</h2>
      <span>NTT LOVE DTHH</span>
      <p className="section-subtitle">Những món ăn ngon, bức ảnh đẹp và lần đầu đi đu idol cùng nhau :v</p>
    </div>
    <div className="row">          
      <div className="col-md-12">
        {/* Portfolio Controller/Buttons */}
       
        {/* Portfolio Controller/Buttons Ends*/}
      </div>
    </div>
    {/* Portfolio Recent Projects */}
    <div  className="row portfolio">
      <div className="col-lg-4 col-md-6 col-xs-12 mix development print">
        <div className="portfolio-item">
          <div className="shot-item">
            <img src={img1} alt="" />  
            <div className="single-content">
              <div className="fancy-table">
                <div className="table-cell">
                  <div className="zoom-icon">
                    <a className="lightbox" href={img1}><i className="lni-zoom-in item-icon" /></a>
                  </div>
                  <a href="#top">Xem ảnh</a>
                </div>
              </div>
            </div>
          </div>               
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-xs-12 mix design print">
        <div className={img2}>
          <div className="shot-item">
            <img src={img2} alt="" /> 
            <div className="single-content">
              <div className="fancy-table">
                <div className="table-cell">
                  <div className="zoom-icon">
                    <a className="lightbox" href={img2}><i className="lni-zoom-in item-icon" /></a>
                  </div>
                  <a href="#top">Xem ảnh</a>
                </div>
              </div>
            </div>
          </div>               
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-xs-12 mix development">
        <div className="portfolio-item">
          <div className="shot-item">
            <img src={img3} alt="" />  
            <div className="single-content">
              <div className="fancy-table">
                <div className="table-cell">
                  <div className="zoom-icon">
                    <a className="lightbox" href={img3}><i className="lni-zoom-in item-icon" /></a>
                  </div>
                  <a href="#top">Xem ảnh</a>
                </div>
              </div>
            </div>
          </div>               
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-xs-12 mix development design">
        <div className="portfolio-item">
          <div className="shot-item">
            <img src={img4} alt="" /> 
            <div className="single-content">
              <div className="fancy-table">
                <div className="table-cell">
                  <div className="zoom-icon">
                    <a className="lightbox" href={img4}><i className="lni-zoom-in item-icon" /></a>
                  </div>
                  <a href="#top">Xem ảnh</a>
                </div>
              </div>
            </div>
          </div>               
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-xs-12 mix development">
        <div className="portfolio-item">
          <div className="shot-item">
            <img src={img5} alt="" />  
            <div className="single-content">
              <div className="fancy-table">
                <div className="table-cell">
                  <div className="zoom-icon">
                    <a className="lightbox" href={img5}><i className="lni-zoom-in item-icon" /></a>
                  </div>
                  <a href="#top">Xem ảnh</a>
                </div>
              </div>
            </div>
          </div>               
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-xs-12 mix print design">
        <div className="portfolio-item">
          <div className="shot-item">
            <img src={img6} alt="" />  
            <div className="single-content">
              <div className="fancy-table">
                <div className="table-cell">
                  <div className="zoom-icon">
                    <a className="lightbox" href={img6}><i className="lni-zoom-in item-icon" /></a>
                  </div>
                  <a href="#top">Xem ảnh</a>
                </div>
              </div>
            </div>
          </div>               
        </div>
      </div>
    </div>
  </div>
  {/* Container Ends */}
</section>
{/* Portfolio Section Ends */}

        </div>
    )
}
