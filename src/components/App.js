import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import {Carousel} from 'react-bootstrap';
import bg1 from './../img/slider/bg-1.jpg';
import bg2 from './../img/slider/bg-2.jpg';
import bg3 from './../img/slider/bg-3.jpg';
import bg4 from './../img/slider/bg-4.jpg';
import bg5 from './../img/slider/bg-5.jpg';
import bg6 from './../img/slider/bg-6.jpg';
import bg7 from './../img/slider/bg-7.jpg';
import bg8 from './../img/slider/bg-8.jpg'; 
import bg9 from './../img/slider/bg-9.jpg';
import bg10 from './../img/slider/bg-10.jpg';
import bg11 from './../img/slider/bg-11.jpg';
import GroupedMemories from './GroupedMemories';

function App() {
  return (
    <div>
     {/*  Thanh điều hướng */}
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
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg4}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Ảnh 4</h3>
      <p>Cột mốc 100 ngày - 23/7/2020 :3</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg5}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Ảnh 5</h3>
      <p>Cột mốc 200 ngày - 31/10/2020 :3</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg6}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Ảnh 6</h3>
      <p>Cột mốc 300 ngày - 8/2/2021 :3</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg7}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Ảnh 7</h3>
      <p>Cột mốc 1 năm - 14/4/2021 :3</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg8}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Ảnh 8</h3>
      <p>Cột mốc 500 ngày - 27/8/2021 :3</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg9}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Ảnh 9</h3>
      <p>Cột mốc 4 năm - 14/4/2024 :3</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg10}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Ảnh 10</h3>
      <p>Cột mốc 1500 ngày - 23/5/2024 :3</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg11}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Ảnh 11</h3>
      <p>Cột mốc 5 năm - 14/4/2025 :3</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<GroupedMemories />
     <Footer/>
    </div>
  );
}

export default App;
