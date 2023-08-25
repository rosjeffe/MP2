import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Images/Coffee.jpeg"
import img2 from "../Images/Budapest.jpeg" 
import img3 from "../Images/PizzaShop.jpeg"
import img4 from "../Images/JENKINS.jpeg"
import img5 from "../Images/plate-removebg-preview.png"

import Ratio from 'react-bootstrap/Ratio';
const Content =() =>{
    return(
        <div>
        <div className="Carding">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-sm-3 mb-3 mb-sm-0">
              <div className="card" style={{ width: '18rem'}}>
              <img src={img1} className="card-img-top" alt="..." />
                <div className="card-body" >
                  <h5 className="card-title">New Coffee Shop</h5>
                  <p className="card-text">
                  So"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                  <a href="#" className="btn btn-primary">Visit Store</a>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mb-3 mb-sm-0">
              <div className="card" style={{ width: '18rem' }}>
                <img src={img2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">New Burger Shop</h5>
                  <p className="card-text">So"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                  <a href="#" className="btn btn-primary">Visit Store</a>
                </div>
              </div>
            </div> 
            <div className="col-sm-3 mb-3 mb-sm-0">
              <div className="card" style={{ width: '18rem' }}>
              <img src={img3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">New Pizza Shop</h5>
                  <p className="card-text">So"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                  <a href="#" className="btn btn-primary">Visit Store</a>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mb-3 mb-sm-0">
              <div className="card" style={{ width: '18rem' }}>
              <img src={img4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">New Cake Shop</h5>
                  <p className="card-text">So"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                  <a href="#" className="btn btn-primary">Visit Store</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Caros">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
    
            <Carousel>
      <Carousel.Item interval={1000}>
      <img src={img5}  alt="..." />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={img5}  alt="..." />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img5}  alt="..." />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0">
            <div class="ratio ratio-4x3">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/NC9KlaxtfLg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
  }
  export default Content;