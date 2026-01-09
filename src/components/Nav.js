import React, { useState } from 'react';
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

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#top">Hành Trình Yêu Của T&H</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            {/* Liên kết đến nhóm "Trước yêu nhau" */}
            <li className="nav-item">
              <a className="nav-link" href="#truoc-yeu-nhau">Khi Chưa Gặp Nhau</a>
            </li>
            {/* Các liên kết nhóm theo năm */}
            <li className="nav-item">
              <a className="nav-link" href="#2020">2020</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2021">2021</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2022">2022</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2023">2023</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2024">2024</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2025">2025</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2026">2026</a>
            </li>
            {/* Liên kết đến Footer */}
            <li className="nav-item">
              <a className="nav-link" href="#footers">Liên Hệ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
