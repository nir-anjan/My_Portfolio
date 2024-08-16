import React from 'react';
import './Footer.css'
import footer_logo from '../../assets/my_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img className='mylogo' src={footer_logo} alt="" />
            <p>dshsdkjfhkjsdhfkjhkjasdhfkjhsdkjhfk jsdhfklj asdkljfhk sdkfhkjas d</p>
        </div>
      
      <div className="footer-top-right">
        <div className="footer-emal-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email'/>
        </div>
        <div className="footer-subscribe">
            <p>Subscribe</p>
        </div>
      </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">copy write text</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
