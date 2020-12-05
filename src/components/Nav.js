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



export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-md fixed-top scrolling-navbar bg-white">
  <div className="container">          
    <a className="navbar-brand" href="#top"><span className="lni-bulb" />thangnt98</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <i className="lni-menu" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto w-100 justify-content-end">
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#mycarousel">I</a>
        </li>
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#portfolios">Love</a>
        </li>            
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#footers">U</a>
        </li>    
      </ul>              
    </div>
  </div>
</nav>

        </div>
    )
}
