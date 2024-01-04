import LogoT from "../Component/LogoT/LogoT";
import "./MobileBar.scss";

const MobileBar = ({show,setShow}) => {
    return (
        <div className="mobilebar">
            <LogoT />
            <div className="menuSideBar close" 
            onClick={()=>{show?setShow(false):setShow(true)}}>
                <span></span> 
                <span></span> 
                <span></span>
            </div>
        </div>
    );
}

export default MobileBar;
