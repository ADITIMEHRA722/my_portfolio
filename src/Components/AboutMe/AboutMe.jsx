import React from 'react'
import './AboutMe.css'
import theme_pathern from "../../assets/theme_pattern.svg"
import profile_img2 from '../../assets/profile_img2.png'

const AboutMe = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me </h1>
            <img src={theme_pathern} alt="" />
        </div>

        <div className='about-sections'>
    <div className="about-left">
        <img src={profile_img2} alt="profilr_img" />
    </div>

    <div className="about-right">
        <div className="about-para">
            <p>Driven and innovative web developer with extensive experience in ReactJS development.</p>
            <p> Skilled in quantitative modeling, state management, and responsive design.</p>
        </div>

        <div className="about-skills">
           <div className="about-skill">
            <p>HtML & CSS</p><hr style={{width:"50%"}}/>
            </div> 

            <div className="about-skill">
            <p>Javascrip</p><hr style={{width:"50%"}}/>
            </div> 

            <div className="about-skill">
            <p>React JS</p><hr style={{width:"60%"}}/>
            </div> 

            <div className="about-skill">
            <p>Mongo DB</p><hr style={{width:"60%"}}/>
            </div> 

            <div className="about-skill">
            <p>SQL</p><hr style={{width:"80%"}}/>
            </div> 

            <div className="about-skill">
            <p>Python</p><hr style={{width:"50%"}}/>
            </div>

            <div className="about-skill">
            <p>Power BI</p><hr style={{width:"50%"}}/>
            </div> 
        </div>
    </div>
        </div>

        <div className="about-achievements">
         <div className="about-achievement">
            <h1>Fresher</h1>
            <p>Years of experience</p>
         </div>

         <hr />

         <div className="about-achievement">
            <h1>3+</h1>
            <p>Project Completed</p>
         </div>

         {/* <hr />

         <div className="about-achievement">
            <h1>+</h1>
            <p>Project Completed</p>
         </div> */}

        </div>
    </div>
  )
}

export default AboutMe