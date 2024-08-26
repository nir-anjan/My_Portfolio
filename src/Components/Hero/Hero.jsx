import React from 'react';
import './Hero.css'
import profile from '../../assets/chaos.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id = 'home' className='hero'>
        <img className='profile' src={profile} alt="profile pic" />
        <h1><span>I'm Niranjan P Shaji,</span> <br />Python Developer</h1>
        <p>Innovative coder committed to transforming ideas into impactful solutions, one line of code at a time.
projects.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset = {50} href='#contact' >Connect with me</AnchorLink></div>
            <div className="hero-resume">Resume</div>
        </div>
      
    </div>
  );
} 

export default Hero;
