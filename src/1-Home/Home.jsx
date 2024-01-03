import "./Home.scss";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NavBar from '../00-NavBar/NavBar';
import { Textillate } from "textillate-react";
import { IoLogoGithub } from "react-icons/io";
import NavBarMobile from "../00-NavBar -mobile/NavBarMobile"
import tamer from "../../public/images/tamer.jpg";

const Home = ({state,setState}) => {

    return (
        <div className='AllHome'  >
            <NavBar state = {state} setState={setState}/>
            <NavBarMobile />
            
            <div className='home'>
                <div className="cover">
                    <div className="cover-tamer">
                        <img src={tamer} alt='' className='tamerPhoto' />
                    </div>
                </div>
                <div className='informion'>
                    <h1 >Tamer Fouad</h1>

                    <div className="FrontEnd">
                        <p>
                            <Textillate
                                option={{
                                    in: {
                                        effect: "fadeInDownBig",
                                        delay: 20,
                                        delayScale: 3,
                                    },
                                    out: {
                                        effect: "bounceOut",
                                        sequence: true,
                                        delay: 20,
                                        delayScale: 3,
                                        reverse: true,
                                    },
                                    type: "char",
                                    loop: true,
                                }}
                            >
                                Front End Developer
                            </Textillate>
                        </p>
                    </div>

                    <div className='social'>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" >
                            <FaFacebook className='icon' />
                        </a>
                        <a href="https://github.com/TamerFBHB" target="_blank" rel="noreferrer" >
                            <IoLogoGithub className='icon' />
                        </a>
                        <a href="https://www.linkedin.com/feed/?trk=public_post_google-one-tap-submit" target="_blank" rel="noreferrer" >
                            <FaLinkedin className='icon' />
                        </a>
                    </div>
                </div>
                <div className='Footer-home'>
                    <div>download cv</div>
                    <div onClick={()=>{setState(4)}}>contact me</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
