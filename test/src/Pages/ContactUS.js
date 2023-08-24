import React from "react";
import Header from "../Layout/header";
import Form from 'react-bootstrap/Form';
// import Content from "../layout/content";
import Footer from "../Layout/footer";
import img1 from "../Images/fb.png";
import img2 from "../Images/insta.png";
import img3 from "../Images/tiktok.png";
import img4 from "../Images/Linkedin.png";

const Contact = () =>{
    return(
      <div>
<Header></Header>



      <Form style={{ maxWidth: '50%' }}>
            <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} />
            </Form.Group>
    </Form>

    <div className="mb-3">
      <div className="contactUsReachUs"> Or Reach us in Our Social Media Platforms</div>
    </div>


    <div className="col-12 socialIcons" id="Social-Media-Container">
      <a href="https://facebook.com"><img className="ContactUsIcon" src={img1} alt="Facebook" /></a>
      <a href="https://www.instagram.com/"><img className="ContactUsIcon" src={img2} alt="Instagram" /></a>
      <a href="https://www.tiktok.com/en/"><img className="ContactUsIcon" src={img3} alt="TikTok" /></a>
      <a href="https://www.linkedin.com/feed/"><img className="ContactUsIcon" src={img4} alt="LinkedIn" /></a>
    </div>

<Footer />
      </div>
      

       
        
    )
};
export default Contact;