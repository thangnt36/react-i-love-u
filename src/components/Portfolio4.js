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
import img1 from './../img/portfolio/img-13.jpg';
import img2 from './../img/portfolio/img-14.JPG';
import img3 from './../img/portfolio/img-15.JPG';
import img4 from './../img/portfolio/img-16.JPG';
import img5 from './../img/portfolio/img-17.JPG';
import img6 from './../img/portfolio/img-18.JPG';

export default function Portfolio4() {
    return (
        <div>
            <section id="portfolios" className="section">
  {/* Container Starts */}
  <div className="container">
    <div className="section-header">          
      <h2 className="section-title">Bộ ảnh Kỉ Niệm 100 Ngày Yêu Của Chúng Ta :3 </h2>
      <span>NTT LOVE DTHH</span>
      <p className="section-subtitle">Lần đầu tiên đôi ta diện áo đôi :3 </p>
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
                  <a href="#top">View Project</a>
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
                  <a href="#top">View Project</a>
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
                  <a href="#top">View Project</a>
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
                  <a href="#top">View Project</a>
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
                  <a href="#top">View Project</a>
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
                  <a href="#top">View Project</a>
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
