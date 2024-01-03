import "./NavBar.scss"
import DarkMode from '../Component/00- dark-mode/DarkMode';
import {  FaRegFolderOpen, FaRegUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import LogoT from "../Component/LogoT/LogoT"

const NavBar = ({state,setState}) => {
    return (
        <div className='Bar'>
            <div className='sideBar-above'>
                <div className='menu-mode'>
                    <LogoT />
                    <DarkMode />
                </div>
            </div>

            <div className='sideBar-down'>
                <ul>
                    <li  ><a onClick={()=>{setState(1) }} 
                    className={`${state === 1? "active" : null}`}>
                        <FaRegUser className='nav-icon' />
                        about
                    </a></li>
                    <li onClick={()=>{setState(2)}}
                    ><a className={`${state === 2? "active" : null}`}>
                        <MdCastForEducation className='nav-icon' />
                        Resume
                    </a></li>
                    <li onClick={()=>{setState(3)}}
                    ><a className={`${state === 3? "active" : null}`}>
                        <FaRegFolderOpen className='nav-icon' />
                        projects
                    </a></li>
                    <li onClick={()=>{setState(4)}}
                    ><a className={`${state === 4? "active" : null}`}>
                        <BsEnvelope className='nav-icon' />
                        contact
                    </a></li>

                </ul>
            </div>
        </div>
            );
}

            export default NavBar;
