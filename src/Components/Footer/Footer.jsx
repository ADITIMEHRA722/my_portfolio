import React from 'react'
import './Footer.css'
import logo1 from "../../assets/logo1.png"
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo1} alt="footer_logo" />
    <p>Crafting interactive web experiences with a passion for front-end development.Explore my projects and let's build something amazing together!</p>
       
        </div>

        <div className="footer-top-right">
           <div className="footer-email-input">
          <img src={user_icon} alt="" />
          <input type="email" placeholder='Enter your email' />
           </div>
           <div className="footer-subscribe">Subscribe</div>
        </div>
    </div>  

    <hr />
<div className="footer-bottom">
    <p className="footer-bottom-left">
        @2024 Aditi mehra . All rights reserved.
    </p>
    <div className="footer-bottom-right">
        <p>Term of Services</p>
        <p>Privacy policy</p>
        <p>Connect with me </p>
    </div>
</div>

    </div>
  )
}

export default Footer