import React from 'react'
import "./Hero.css";
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import aditiResume from '../../assets/aditiResume.pdf';

const Hero = () => {

  const downloadResume = () => {
    // window.open(aditiResume, '_blank');
    const link = document.createElement('a');
    link.href = aditiResume;
    link.download = 'Aditi_Mehra_Resume.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" /> 
      <h1> <span>I'm Aditi Mehra ,</span>Frontend Developer </h1> 
    <p>I am frontend developer from bilaspure chhatisgarh .</p>
    <div className='hero-action'>
    <AnchorLink className="anchor-link" offset={50} href="#contact">   <div className="hero-connect">Connect with me</div> </AnchorLink>
    <div onClick={downloadResume} className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero