import React from 'react';
import './hero.css'
import profile from '../../assets/chaos.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img className='profile' src={profile} alt="profile pic" />
        <h1><span>I'm Niranjan P Shaji,</span> Python Devloper</h1>
        <p>Proficient in Python and C. Skilled in web design using Figma, with hands-on experience in diverse
projects.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">Resume</div>
        </div>
      
    </div>
  );
} 

export default Hero;
