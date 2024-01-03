import Home from "./1-Home/Home"
import About from "./2-About/About"
import Project from "./4-projects/Project"
import Particule from "./Component/Particule"
import "./App.scss"
import { useState } from "react"
import Edu from "./3-Education/Edu"
import Contact from "./5-Contact/Contact"


function App() {
    const [state , setState] = useState(1);
  return (
    <div className="mainPage">
      <Particule />
      <div className="showPage">
        <div className="leftSection">
          <Home setState={setState} state = {state}/>
        </div>
        <div className="rightSection">
          <About state = {state}/>

          <Edu state = {state}/>

          <Project state = {state} />

          <Contact state = {state}/>
        </div>
      </div>
    </div>
  )
}

export default App
