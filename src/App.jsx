import AboutMe from "./Components/AboutMe/AboutMe"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import MyWork from "./Components/Mywork/MyWork"
import Navbar from "./Components/Navbar/Navbar"
import Services from "./Components/Services/Services"



function App() {
  
  return (
   <div>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    {/* <Services/> */}
    <MyWork/>
    <Contact/>
   
   </div>
  )
}

export default App
