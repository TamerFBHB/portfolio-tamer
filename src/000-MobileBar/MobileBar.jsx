import { Textillate } from "textillate-react";
import LogoT from "../Component/LogoT/LogoT";
import "./MobileBar.scss";
import { IoClose } from "react-icons/io5";

const MobileBar = ({show,setShow}) => {
    return (
        <div className="mobilebar">
            <LogoT />

            <div className="myName">
                        <p>
                            <Textillate
                                option={{
                                    in: {
                                        effect: "fadeInLeftBig",
                                        delay: 20,
                                        delayScale: 3,
                                        sequence: true,
                                        loop: false,
                                    },
                                    out: {
                                        effect: "fadeOutUp",
                                        sequence: true,
                                        delay: 20,
                                        delayScale: 3,
                                        loop: false,
                                    },
                                    type: "char",
                                    loop: true,
                                }}
                            >
                                Tamer Fouad Boshara
                            </Textillate>
                        </p>
                    </div>

            <div className="menuSideBar " 
            onClick={()=>{show?setShow(false):setShow(true)}}>
                <span className={`close ${show? "none" : null }`}></span> 
                <span className={`close ${show? "none" : null }`}></span> 
                <span className={`close ${show? "none" : null }`}></span>
            <IoClose  className={`close ${show? null : "none"}`} />
            </div>
        </div>
    );
}

export default MobileBar;
