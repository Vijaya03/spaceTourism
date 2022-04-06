import React, { Component, useState, useEffect } from 'react';
import {   Link } from "react-router-dom";
import  './index.css';
import NavBar from '../NavBar';
import data from '../../data.json';
const Crew = () =>{
    const [crews,setCrews] = useState("Douglas Hurley");
    const [crewData,setCrewData] =useState(data.crew[0]);
    function isSelected(value){
        return ((value===crews) ?'glow':'');
    }
    useEffect(()=>{
        data.crew.map(items=>{
            if(items.name == crews){
                return setCrewData(items);
            }
        })
    } ,[crews,setCrews])
      const crew_image = require('../../'+ crewData.images.png);
    return(
           <div className="main-crew">
            <NavBar></NavBar>
                <div className="crew-container">
                 <div className="crew-des">
                    <div className="crew-des-header">
                        <span className="num">02</span>
                        <span className="meet">Meet your crew</span>
                  
                    </div>
                    <div className="designation">{crewData.role}</div>
                    <div className="crew-name">{crewData.name}</div>
                    <div className="crew-achieve">{crewData.bio}</div>
                    <div className="pagination">
                        <button onClick={()=>setCrews(data.crew[0].name)} className={isSelected(data.crew[0].name)}></button>
                        <button onClick={()=>setCrews(data.crew[1].name)} className={isSelected(data.crew[1].name)}></button>
                        <button onClick={()=>setCrews(data.crew[2].name)} className={isSelected(data.crew[2].name)}></button>
                        <button onClick={()=>setCrews(data.crew[3].name)} className={isSelected(data.crew[3].name)}></button>
                    </div>
                 </div>
                 <div className="crew-pic">
                  <img src={crew_image} alt={crewData.name}/>
                  <hr className="border-line"/>
                 </div>
                </div>
           </div>
    )
} 
export default Crew;
