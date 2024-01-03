import "./Edu.scss"
import { RiBankFill } from "react-icons/ri";
import { MdOutlineCastForEducation } from "react-icons/md";
import Lottie from "lottie-react";
import resumeAnimat from "../Component/animation/resume.json"
import Data from "./Data";

const Edu = ({ state }) => {
    return (
        <div className={`resume ${state === 2 ? "apear" : "hide"}`} id="MyResume">
            <h3><span>R</span>esume</h3>
            <div className="myResume">

                <div className="edu">
                    <RiBankFill className="edu-icon" />
                    <h3 className="">Education :</h3>
                </div>
                <h4>Bachelor in Commerce, Ein Shams university, Cairo, Egypt.</h4>
                <div className="edu">
                    <MdOutlineCastForEducation className="edu-icon" />
                    <h3 className="">Courses :</h3>
                </div>

                <div className="course">
                    <div className="group">
                        <h5>
                            To achieve my goal of changing my field of work to programming Front End Developer , i studied a group of courses :
                        </h5>
                        <div className="cards">
                            {Data.map((item) => {
                                return (
                                    <div className="card" key={item}>
                                        <img src={item.image} alt="" />
                                        <p>{item.name}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="animation">
                        <Lottie animationData={resumeAnimat} style={{ width: 350 }} />;
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edu;
