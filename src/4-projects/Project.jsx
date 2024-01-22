import { FaGithub, FaLink } from "react-icons/fa";
import "./Project.scss";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion"
import { useState } from "react";
import DataPortfolio from "./Data-Portfolio";

const Project = ({ state , vProject}) => {
    // to switch between buttons 
    const [active, setActive] = useState("All")
    const [arr, setArr] = useState(DataPortfolio)

    const handleClick = (Data) => {
        setActive(Data)
        const newData = DataPortfolio.filter((item) => {
            const zzz = item.category.find((myitem) => {
                return myitem === Data;
            })
            return zzz === Data;
        })
        setArr(newData)
    }
    return (
        <div ref= {vProject} className={`project ${state === 3 ? "apear" : "hide"}`} >
            <h3><span>P</span>roject</h3>
            <div className="myproject">
                <h3>In this section, I will show some of the projects that I redesigned, through which I show my abilities:</h3>
                <div className="cards-project" >
                    <div className="buttons">

                    <a onClick={() => { setArr(DataPortfolio) ; setActive("All")}} 
                            className={`active ${active === "All" ? "activation" : "noActivation"}`}> All</a>

                        <a onClick={() => { handleClick("React") }} 
                            className={`active ${active === "React" ? "activation" : "noActivation"}`}> React</a>

                        <a onClick={() => { handleClick("Bootstrap") }} 
                            className={`active ${active === "Bootstrap" ? "activation" : "noActivation"}`}>bootstrap</a>

                        <a onClick={() => { handleClick("tailwind") }} 
                            className={`active ${active === "tailwind" ? "activation" : "noActivation"}`}>tailwind</a>

                        <a onClick={() => { handleClick("sass") }} 
                            className={`active ${active === "sass" ? "activation" : "noActivation"}`}>sass</a>

                        <a onClick={() => { handleClick("portfolio") }} 
                            className={`active ${active === "portfolio" ? "activation" : "noActivation"}`}>portfolio</a>

                        <a onClick={() => { handleClick("food") }} 
                            className={`active ${active === "food" ? "activation" : "noActivation"}`}>food</a>

                        <a onClick={() => { handleClick("Next") }} 
                            className={`active ${active === "Next" ? "activation" : "noActivation"}`}>next.js</a>
                    </div>
                    <div className="cards" >

                        <AnimatePresence>
                            {arr.map((item) => {
                                return (
                                    <motion.div
                                        layout
                                        initial={{ transform: "scale(0.4)" }}
                                        animate={{ transform: "scale(1)" }}
                                        transition={{ type: "spring", damping: 8, stiffness: 50 }}
                                        key={item.image}
                                        className="card ">
                                        <img src={item.image} alt="" />
                                        <div className="body-card ">
                                            <h6>{item.title}</h6>
                                            <p>{item.details}</p>
                                            <div className="links ">
                                                <a href={item.url} target="_blank" rel="noreferrer">
                                                    <FaLink className="icon" />
                                                </a>
                                                <a href={item.github} target="_blank" rel="noreferrer">
                                                    <FaGithub className="icon" />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
