import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import aditiResume from "../../assets/aditiResume.pdf";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const downloadResume = () => {
    // window.open(aditiResume, '_blank');
    const link = document.createElement("a");
    link.href = aditiResume;
    link.download = "Aditi_Mehra_Resume.pdf"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        {" "}
        <span>I'm Aditi Mehra ,</span>Frontend Developer{" "}
      </h1>
      <p>I am frontend developer from bilaspure chhatisgarh .</p>
     
      <div className="social-links">
      <a href="https://github.com/ADITIMEHRA722" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaGithub size={30} />
      </a>
      <a href="https://linkedin.com/in/aditi-mehra-5921a4288" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaLinkedin size={30} />
      </a>
    </div>
      
      <div className="hero-action">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
         
          <div className="hero-connect">Connect with me</div>{" "}
        </AnchorLink>
        <div onClick={downloadResume} className="hero-resume">
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
