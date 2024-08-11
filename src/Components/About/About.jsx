import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/profile_about.jpg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_image} alt="" />
                </div>
                <div className="about-right">
                <div className="about-para">
                <p>I’m a frontend developer and programming student from Bangladesh. I’ve worked on various projects that showcase my skills and enthusiasm for creating engaging web applications.</p>
                <p>As a problem solver, I’m eager to tackle new challenges and continue learning while contributing to exciting projects.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
                </div>
                </div>
            </div>
            <div className="about-acheivements">
                <div className="about-acheivement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
             <hr />
             <div className="about-acheivement">
                    <h1>9+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
             <hr />
             <div className="about-acheivement">
                    <h1>1+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    );
};

export default About;