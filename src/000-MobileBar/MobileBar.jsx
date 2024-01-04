import LogoT from "../Component/LogoT/LogoT";
import "./MobileBar.scss";
import { IoClose } from "react-icons/io5";

const MobileBar = ({show,setShow}) => {
    return (
        <div className="mobilebar">
            <LogoT />
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
