import React from 'react';
// import './hero.css'
import profile from '../../assets/chaos.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <>
    <div id = 'home' className='hero'>
        <img className='profile' src={profile} alt="profile pic" />
        <h1><span>I'm Niranjan P Shaji,</span> Python Devloper</h1>
        <p>Proficient in Python and C. Skilled in web design using Figma, with hands-on experience in diverse
projects.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset = {50} href='#contact' >Connect with me</AnchorLink></div>
            <div className="hero-resume">Resume</div>
        </div>
      
    </div>
    </>
  );
} 

export default Hero;
