import React, { Component, useState ,useContext } from 'react';
import {UserContext} from '../../App';
import {   Link } from "react-router-dom";
import './index.css';
const NavBar = () =>{
    const user = useContext(UserContext);
    const [toggle,setToggle] = useState("false");
    function isActive(value){
        return ((value===user.selected) ?'active':'default');
      }
    return (
            <nav>
                <logo>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 2">
                        <circle id="Oval" cx="24" cy="24" r="24" fill="white"/>
                        <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z" fill="#0B0D17"/>
                        </g>
                    </svg>
                </logo>
                <span className="hamburger" area-controls="navi" area-expanded={toggle} onClick={()=>setToggle("true")}>
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <rect id="Rectangle" width="24" height="3" fill="#D0D6F9"/>
                        <rect id="Rectangle Copy" y="9" width="24" height="3" fill="#D0D6F9"/>
                        <rect id="Rectangle Copy 2" y="18" width="24" height="3" fill="#D0D6F9"/>
                        </g>
                    </svg>
                </span>
                <ul data-visible={toggle} id="navi">
                <hr className="dash"></hr>
                <span className="cross" onClick={()=>setToggle("false")}>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <rect id="Rectangle Copy" x="2.5752" y="0.954102" width="24" height="3" transform="rotate(45 2.5752 0.954102)" fill="#D0D6F9"/>
                        <rect id="Rectangle Copy 3" x="0.454102" y="17.9246" width="24" height="3" transform="rotate(-45 0.454102 17.9246)" fill="#D0D6F9"/>
                        </g>
                    </svg>
                </span>
                    <li  className={isActive('Home')} 
                        onClick={()=>{user.setSelected("Home") ;setToggle("false")}}>
                        <Link to="/">
                            <span className="count">00</span>
                            <span className="nav-content">HOME</span>
                        </Link>
                    </li>
                    <li className={isActive('Destination')} onClick={()=>{user.setSelected("Destination");setToggle("false")}}>
                        <Link to="/destination">
                            <span className="count">01</span>
                            <span>DESTINATION</span>
                        </Link >
                    </li>
                    <li className={isActive('Crew')} onClick={()=>{user.setSelected("Crew");setToggle("false")}}>
                        <Link to="/crew">
                            <span className="count">02</span>
                            <span>CREW</span>
                        </Link>
                    </li>
                    <li className={isActive('Technology')} onClick={()=>{user.setSelected("Technology");setToggle("false")}}>
                        <Link to="/technology">
                            <span className="count">03</span>
                            <span>TECHNOLOGY</span>
                        </Link>
                    </li>
                </ul>
        </nav>
    )
}
export default NavBar;