import React from 'react';
import './Hero.css';
import image from '../../assets/profile_img.jpg'
import resume from '../../assets/Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={image} alt="" />
            <h1><span>I’m Tajwone Chowdhury,</span> Frontend Developer Based in Bangladesh.</h1>
            <p>I’m passionate about creating engaging web applications and continuously expanding my skills. Excited to work on innovative projects!</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink></div>
                <div  className="hero-resume"> <a href={resume} target='blank'>My Resume</a></div>
            </div>
        </div>
    );
};

export default Hero;