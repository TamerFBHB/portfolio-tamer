import "./NavBarMobile.scss"
import DarkMode from '../Component/00- dark-mode/DarkMode';
import {  FaRegFolderOpen, FaRegUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import LogoT from "../Component/LogoT/LogoT"
import { useState } from "react";

const NavBarMobile = ({setShow , show , scrollToSection ,vAbout,vResume,vProject,vContact}) => {
    const [activebar , setActivebar] =useState(1)
    return (
        <div className={`BarMobile ${show? "showDone" : "noShow"}`}>
            <div className='sideBar-above'>
                <div className='menu-mode'>
                    <LogoT />
                    <DarkMode />
                </div>
            </div>

            <div className='sideBar-down'>
                <ul>
                    <li><a onClick={()=>{setActivebar(1); setShow(true); scrollToSection(vAbout) }} 
                    className={`${activebar === 1? "active" : "noActive"}`}>
                        <FaRegUser className='nav-icon' />
                        about
                    </a></li>
                    <li><a onClick={()=>{setActivebar(2);setShow(true); scrollToSection(vResume) }} 
                    className={`${activebar === 2? "active" : "noActive"}`}>
                        <MdCastForEducation className='nav-icon' />
                        Resume
                    </a></li>
                    <li><a onClick={()=>{setActivebar(3);setShow(true); scrollToSection(vProject) }} 
                    className={`${activebar === 3? "active" : "noActive"}`}>
                        <FaRegFolderOpen className='nav-icon' />
                        projects
                    </a></li>
                    <li><a onClick={()=>{setActivebar(4);setShow(true); scrollToSection(vContact)}} 
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
