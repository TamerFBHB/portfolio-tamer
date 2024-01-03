import "./NavBarMobile.scss"
import DarkMode from '../Component/00- dark-mode/DarkMode';
import {  FaRegFolderOpen, FaRegUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import LogoT from "../Component/LogoT/LogoT"
import { useState } from "react";

const NavBarMobile = () => {
    const [activebar , setActivebar] =useState(1)
    return (
        <div className='BarMobile'>
            <div className='sideBar-above'>
                <div className='menu-mode'>
                    <LogoT />
                    <DarkMode />
                </div>
            </div>

            <div className='sideBar-down'>
                <ul>
                    <li><a onClick={()=>{setActivebar(1) }} href="#MyAbout"
                    className={`${activebar === 1? "active" : "noActive"}`}>
                        <FaRegUser className='nav-icon' />
                        about
                    </a></li>
                    <li><a onClick={()=>{setActivebar(2)}} href="#MyResume"
                    className={`${activebar === 2? "active" : "noActive"}`}>
                        <MdCastForEducation className='nav-icon' />
                        Resume
                    </a></li>
                    <li><a onClick={()=>{setActivebar(3)}} href="#MyProject"
                    className={`${activebar === 3? "active" : "noActive"}`}>
                        <FaRegFolderOpen className='nav-icon' />
                        projects
                    </a></li>
                    <li><a onClick={()=>{setActivebar(4)}} href="#MyContact"
                    className={`${activebar === 4? "active" : "noActive"}`}>
                        <BsEnvelope className='nav-icon' />
                        contact
                    </a></li>

                </ul>
            </div>
        </div>
            );
}

            export default NavBarMobile;
