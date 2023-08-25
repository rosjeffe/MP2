import React from "react";
import Header from "../Layout/header";
// import Content from "../layout/content";
import Footer from "../Layout/footer"
import img1 from "../Images/Coffee.jpeg"
import img2 from "../Images/Budapest.jpeg" 
import img3 from "../Images/PizzaShop.jpeg"
import img4 from "../Images/JENKINS.jpeg"
import KopikoStore from "./KopikoStore";
import { Link } from 'react-router-dom';

const Stores = () =>{
    return(
      <div>
<Header></Header>
<div className="Carding">
      <div className="row" id='cardRow'>
        <div className="col">
          <div className="row">
            <div className="col-sm-3 mb-3 mb-sm-0">
              <div className="card" style={{ width: '18rem'}}>
              <img src={img1} className="card-img-top" alt="..." />
                <div className="card-body" >
                  <h5 className="card-title">New Coffee Shop</h5>
                  <p className="card-text">
                  So"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                  <Link to="/KopikoStore" className="btn btn-primary">
  Visit Store
</Link>
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
<Footer />
      </div>
      

       
        
    )
};
export default Stores;