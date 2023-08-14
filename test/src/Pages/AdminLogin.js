import React from 'react';
import Header from '../Layout/header';
import Footer from '../Layout/footer';
import FB from "../Images/fb.png";
import insta from "../Images/insta.png";
import linkedIn from "../Images/Linkedin.png";
import TikTok from "../Images/tiktok.png";
const AdminLogin = () => {
  return (
<div>
    <Header></Header>

    <form>
      <div className="row">
        <div className="col-12 Username">
          <label htmlFor="StoreAdminLogin">Username</label>
          <input type="text" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 Username">
          <label htmlFor="StoreAdminLogin">Password</label>
          <input type="password" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 PassAndCreate">
          <a href="storePage.html">
            <button type="button" className="LoginBtn">Login</button>
          </a>
          <div>
            <a href="signup.html">
              <button type="button" className="LoginBtn">Sign Up</button>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 PassAndCreateForgot">
          <button type="button" className="Forgot">Forgot Password</button>
        </div>
      </div>
      <br />
      <p className='socSignin'> or sign in with </p>
      <div className="row">
        <div className="col-12 socialIcons" id="Social-Media-Container">
          <a href="https://facebook.com">
            <img className="SocIcon" src={FB} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/">
          <img className="SocIcon" src={insta} alt="InstaGram" />
          </a>
          <a href="https://www.tiktok.com/en/">
          <img className="SocIcon" src={TikTok} alt="Tiktok" />
          </a>
          <a href="https://www.linkedin.com/feed/">
          <img className="SocIcon" src={linkedIn} alt="Tiktok" />
          </a>
        </div>
      </div>
    </form>
    <Footer/>
    </div>
  );
};

export default AdminLogin;