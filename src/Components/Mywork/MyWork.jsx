import React from 'react'
import './MyWork.css'
import theme_pathern from "../../assets/theme_pattern.svg"
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div  id='mywork' className='mywork'>
    <div className="mywork-title">
        <h1>My latest work</h1>
<img src={theme_pathern} alt="" />
    </div>

    <div className="mywork-container">
  {
    mywork_data.map((work, ind)=>{
    return <img  key={ind} src={work.w_img} alt=""/>
    })
  }
    </div>

    <div className="mywork-showmore">
        <p>Show More</p>
        <img  src={arrow_icon} alt="" />
    </div>
    </div>
  )
}

export default MyWork