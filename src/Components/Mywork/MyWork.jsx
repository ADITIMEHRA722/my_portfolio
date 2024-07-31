// import React from 'react'
// import './MyWork.css'
// import theme_pathern from "../../assets/theme_pattern.svg"
// import mywork_data from '../../assets/mywork_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

// const MyWork = () => {
//   return (
//     <div  id='mywork' className='mywork'>
//     <div className="mywork-title">
//         <h1>My latest work</h1>
// <img src={theme_pathern} alt="" />
//     </div>

//     <div className="mywork-container">
//   {
//     mywork_data.map((work, ind)=>{
//     return <img  key={ind} src={work.w_img} alt=""/>
//     })
//   }
//     </div>

//     <div className="mywork-showmore">
//         <p>Show More</p>
//         <img  src={arrow_icon} alt="" />
//     </div>
//     </div>
//   )
// }

// export default MyWork


import React from 'react';
import './MyWork.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
     
      <div className="mywork-container">
        {mywork_data.map((work, ind) => (
          ind === 0 ? (
            <a href= "https://youtube-add.netlify.app" key={ind} target="_blank" rel="noopener noreferrer" className="work-item">
              <img src={work.w_img} alt={work.title} />
            </a>
          ) :
          ind === 1 ? (
            <a href= "https://net-ad.netlify.app/" key={ind} target="_blank" rel="noopener noreferrer" className="work-item">
              <img src={work.w_img} alt={work.title} />
            </a>
          ) :  ind === 2 ? (
            <a href= "https://hero-page-add.netlify.app/" key={ind} target="_blank" rel="noopener noreferrer" className="work-item">
              <img src={work.w_img} alt={work.title} />
            </a>
          ) : ind === 3 ? (
            <a href= "https://todoapp-add.netlify.app/" key={ind} target="_blank" rel="noopener noreferrer" className="work-item">
              <img src={work.w_img} alt={work.title} />
            </a>
          ) : ind === 4 ? (
            <a href= "https://amazon-add.netlify.app/" key={ind} target="_blank" rel="noopener noreferrer" className="work-item">
              <img src={work.w_img} alt={work.title} />
            </a>
          ) : (

            <div key={ind} className="work-item">
              <img src={work.w_img} alt={work.title} />
            </div>
          )
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
