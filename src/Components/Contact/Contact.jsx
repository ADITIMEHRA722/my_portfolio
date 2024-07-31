import React, { useState } from 'react'
import './Contact.css'
import theme_pathern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "21b933d4-4bc0-4b36-a42c-093ddcf56e4a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(res.message)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id='contact' className='contact'>
     <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pathern} alt="theme_img" />
        </div>   

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new project , so feel free to send me a message about anything that you want to work on. you can connect anytime </p>
           <div className="contact-details">
            <div className="contact-detail">
               <img src={mail_icon} alt="" /> <p>aditimehra3910@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={call_icon} alt="" /> <p>+91 7224063360</p>
            </div>
            <div className="contact-detail">
                <img src={location_icon} alt="" /> <p>India</p>
            </div>

           </div>

            </div>
       
       <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor=""> Your Name</label>
        <input type="text" placeholder='Enter your name' name='name' />

        <label htmlFor="">Your Email</label>
        <input type="email" placeholder='Enter your email' name='email' />

        <label htmlFor="">Write your message here</label>
        <textarea rows="8" placeholder='Enter your message' name='message' />

<button type='submit' className='contact-submit'>Submit now</button>
       </form>

        </div>
    </div>
  )
}

export default Contact