import React from "react";
import Header from "../Layout/header";
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../Layout/footer";
import img1 from "../Images/vy (2).jpg";
import img2 from "../Images/Burger.jpg";
import img3 from "../Images/Angels.jpg";
import img4 from "../Images/BackMot.png";

const About = () => {
  return (
    <div>
    
      <Header />
      <main className="AboutUsBackground">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-6">
                <div id="carouselExampleCaptions" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>

                  <Carousel>
                    <Carousel.Item>
                      <img src={img1} className="d-block w-100" alt="..." />
                      <Carousel.Caption className="d-none d-md-block">
                        <h5>"Vy Cortez"</h5>
                        <p>Ang Sarap ng Cake ni Cong</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={img2} className="d-block w-100" alt="..." />
                      <Carousel.Caption className="d-none d-md-block">
                        <h5>"Angels'Burger"</h5>
                        <p>Unang Kagat Tinapay Lahat</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={img3} className="d-block w-100" alt="..." />
                      <Carousel.Caption className="d-none d-md-block">
                        <h5>"Angel De Leon"</h5>
                        <p>Ang pizza mo, Pizza ko, Pizza Nating lahat</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>

                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-sm-6 Aboutus mb-6 mb-sm-0">
                <img src={img4} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    );
};

export default About;






