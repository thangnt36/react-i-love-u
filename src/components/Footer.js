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

export default function Footer() {
    return (
        <div>
            <footer>
  {/* Footer Area Start */}
  <section className="footer-Content" id="footers">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-mb-12">
          <h3>thangnt98</h3>
          <div className="textwidget">
            <p>Trang web này làm phục vụ mục đích để nói rằng NTT yêu DTTH rất nhiều </p>
          </div>
          <ul className="footer-social">
            <li><a className="facebook" href="https://www.facebook.com/th4ngnguyen"><i className="lni-facebook-filled" /></a></li>
            <li><a className="twitter" href="https://www.instagram.com/ngtrongthang98"><i className="lni-instagram-filled" /></a></li>
            
          </ul> 
        </div>
       
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-mb-12">
          <div className="widget">
            <h3 className="block-title">Liên hệ với bạn NTT đẹp trai :3</h3>
            <ul className="contact-footer">
              <li>
                <strong>Địa chỉ :</strong> <span>Ở trong tim bạn DTTH ý :v</span>
              </li>
              <li>
                <strong>Phone :</strong> <span>Số mà bạn DTTH lưu là Anh :3 </span>
              </li>
              <li>
                <strong>E-mail :</strong> <span><a href="#top">thangnt20298@gmail.com</a></span>
              </li>
            </ul> 
          </div>
        </div>
       
      </div>
    </div>
  </section>
  {/* Footer area End */}
  {/* Copyright Start  */}
  <div id="copyright">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="site-info float-left">
            <p>Crafted by <a href="https://www.facebook.com/th4ngnguyen" rel="nofollow">NTT</a></p>
          </div>              
          <div className="float-right">  
            <ul className="nav nav-inline">
              <li className="nav-item">
                <a className="nav-link active" href="https://www.facebook.com/th4ngnguyen">About NTT</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com/th4ngnguyen">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
</footer>

        </div>
    )
}
