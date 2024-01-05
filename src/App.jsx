import Home from "./1-Home/Home"
import About from "./2-About/About"
import Project from "./4-projects/Project"
import Particule from "./Component/Particule"
import "./App.scss"
import { useRef, useState } from "react"
import Edu from "./3-Education/Edu"
import Contact from "./5-Contact/Contact"


function App() {
  //to create switch between pages in big screen 
    const [state , setState] = useState(1);

    //to create move for pages to top when press links
  const scrollToSection = (Ref) => {
    var x = window.matchMedia("(max-width: 650px)")
    if (x.matches){
      window.scrollTo({
        top: Ref.current.offsetTop -(-600),
        behavior: "smooth",block: 'start',
    })
    }else {
      window.scrollTo({
        top: Ref.current.offsetTop -(-820),
        behavior: "smooth",block: 'start',
    })
    }
}

    const vAbout = useRef()
    const vResume = useRef()
    const vProject = useRef()
    const vContact = useRef()

  return (
    <div className="mainPage">
      <Particule className="particles" />
      <div className="showPage ">
        <div className="leftSection">
          <Home vAbout={vAbout}
                vResume={vResume}
                vProject={vProject}
                vContact={vContact} 
                scrollToSection={scrollToSection} setState={setState} state = {state}/>
        </div>
        <div className="rightSection">
          <About state = {state} vAbout={vAbout}/>

          <Edu state = {state} vResume={vResume}/>

          <Project state = {state} vProject={vProject}/>

          <Contact state = {state} vContact={vContact}/>
        </div>
      </div>
    </div>
  )
}

export default App
