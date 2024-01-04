
import "./About.scss"
import Lottie from "lottie-react";
import aboutAnimat from "../Component/animation/dev.json"


const About = ({ state , vAbout}) => {

    return (
        <div ref={vAbout} className={`about ${state === 1 ? "apear" : "hide"}`} >

            <div className='about-me'>
                <h3><span>A</span>bout Me</h3>
                <div className='about-information'>
                    <div className='hello'>
                        <h4>Hello! Iam Tamer Fouad Boshara.</h4>
                        <p>
                            I gained high skills in <span> 𝗙𝗿𝗼𝗻𝘁 𝗘𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 </span>{" "}
                            that allows me to do attractive designs and provide high
                            quality and wonderful projects, and it works smoothly.
                            <br />
                            As a front-end developer, I have extensive knowledge of
                            <span> HTML, CSS, JavaScript, React ,Bootstrap,Tailwind , Vite</span> and
                            other related technologies. I always make sure my code is
                            clean, well organized, and optimized for performance.
                        </p>
                    </div>
                    <div className='about-ID'>
                        <ul>
                            <li>
                                <h5>Email :</h5>
                                <p>tamer.fbhb.wd@gmail.com</p>
                            </li>
                            <li>
                                <h5>Phone :</h5>
                                <p>(+2)-0127-7080-2197</p>
                            </li>
                            <li>
                                <h5>Freelance :</h5>
                                <p>Available</p>
                            </li>
                            <li>
                                <h5>Address :</h5>
                                <p>Cairo, Egypt</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="animation">
                    <Lottie animationData={aboutAnimat} style={{ width: 350 }} />;
                </div>
            </div>





        </div>
    );
}

export default About;
