import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import {Carousel} from 'react-bootstrap';
import bg1 from './../img/slider/bg-1.jpg';
import bg2 from './../img/slider/bg-2.jpg';
import bg3 from './../img/slider/bg-3.jpg';
import Portfolio from './Portfolio';
import Portfolio2 from './Portfolio2';


function App() {
  return (
    <div>
     <Nav/>
   
     <Carousel id="mycarousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Ảnh 1</h3>
      <p>Đẹp đôi quá cơ :3</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Ảnh 2</h3>
      <p>Niki ngầu chưa :v</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Ảnh 3</h3>
      <p>Đến lượt anh ngầu rồi :v</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <Portfolio/>
    <Portfolio2/>
     <Footer/>
    </div>
  );
}

export default App;
