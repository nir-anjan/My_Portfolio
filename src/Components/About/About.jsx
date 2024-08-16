import React from 'react';
import'./About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/my_pic.jpg'




const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img className='mypic' src={profile_img} alt="alt tes" />

        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Results-driven Computer Science student with a strong commitment to developing innovative software
                solutions.
                </p>
                <p> Demonstrates exceptional teamwork and leadership skills, consistently delivering high-quality work.
                    Experienced in leading both coding and non-coding teams, with a keen interest in project management and
                    team leadership.
                    </p>

            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>HLML &CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"40%"}} /></div>
            </div>
       
        </div>
      </div>
      <div className="achivements">
        <div className="about-achivement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>90+</h1>
            <p>PROJECTS COOMPLETED</p>
        </div>  
        <div className="about-achivement">
            <h1>50+</h1>
            <p>HAPPY CLIENTS</p>
        </div> 
      </div>

    </div>
  );
}

export default About;
