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
import img1 from './../img/portfolio/img-103.jpg';


export default function Portfolio26() {
    return (
        <div>
            <section id="portfolios" className="section">
  {/* Container Starts */}
  <div className="container">
    <div className="section-header">          
      <h2 className="section-title">Bộ ảnh Kỉ Niệm noel 2022 </h2>
      <span>NTT LOVE DTHH</span>
      <p className="section-subtitle">Cùng nhau đi dạo phố và làm ông già noel :3 </p>
    </div>
    <div className="row">          
      <div className="col-md-12">
        {/* Portfolio Controller/Buttons */}
       
        {/* Portfolio Controller/Buttons Ends*/}
      </div>
    </div>
    {/* Portfolio Recent Projects */}
    <div  className="row portfolio">
      <div className="col-lg-12 col-md-12 col-xs-12 mix development print">
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
     
        </div>
      </div>
  {/* Container Ends */}
</section>
{/* Portfolio Section Ends */}

        </div>
    )
}
