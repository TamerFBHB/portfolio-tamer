import LogoT from "../Component/LogoT/LogoT";
import "./MobileBar.scss";
import { IoClose } from "react-icons/io5";

const MobileBar = ({show,setShow}) => {
    return (
        <div className="mobilebar">
            <LogoT />
            <div className="menuSideBar " 
            onClick={()=>{show?setShow(false):setShow(true)}}>
                <span className={`close ${show? null : "none" }`}></span> 
                <span className={`close ${show? null : "none" }`}></span> 
                <span className={`close ${show? null : "none" }`}></span>
            <IoClose  className={`close ${show? "none" : null}`} />
            </div>
        </div>
    );
}

export default MobileBar;
