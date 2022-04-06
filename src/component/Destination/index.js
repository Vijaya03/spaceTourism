import React, { Component, useState, useEffect } from 'react';
import {   Link } from "react-router-dom";
// import Moon from '../../assets/destination/image-moon.webp';
// import Mars from '../../assets/destination/image-mars.webp';
// import Europa from '../../assets/destination/image-europa.webp';
// import Titan from '../../assets/destination/image-titan.webp';
import  './index.css';
import NavBar from '../NavBar';
import data from '../../data.json'
const Destination = () =>{
    const [planets,setPlanets] = useState("Moon");
    const [desArray,setArray] = useState(data.destinations[0]);
    useEffect(()=>{
        data.destinations.map(item=>{  
            if(item.name == planets) {
                return  setArray(item);
            }
         });
    },[planets,setPlanets]);
    function isActive(value){
        return ((value===planets) ?'active':'default');
      }
    const image = require('../../assets/destination/image-' +(desArray.name).toLowerCase() + '.webp')
    return(
        
           <div className="destination-content">
                <NavBar></NavBar>
                <div className="destination-area">
                    <div className="planets">
                        <p className="planets-header">
                            <span className="num">01</span>
                            <span>Pick your destination</span>
                        </p>
                        <p className="pic-area"><img src={image} alt={desArray.name} /></p>
                    </div>
                    <div className="planet-description">
                        <div className="changing-planets">
                            <span className={isActive('Moon')} onClick={()=>setPlanets("Moon")}>Moon</span>
                            <span className={isActive('Mars')} onClick={()=>setPlanets("Mars")}>Mars</span>
                            <span className={isActive('Europa')} onClick={()=>setPlanets("Europa")}>Europa</span>
                            <span className={isActive('Titan')} onClick={()=>setPlanets("Titan")}>Titan</span>
                        </div>
                        <div className="planet-description-line1">{desArray.name}</div>
                        <div className="planet-description-line2">{desArray.description}</div>
                        <hr className="line"/>
                        <div className="distance">
                            <p className="avg-distance">Avg. distance</p>
                            <p className="est-distance"> Est. travel time</p>
                            <p className="avg-value">{desArray.distance}</p>
                            <p className="est-value">{desArray.travel}</p>
                        </div>
                    </div>
                </div>

           </div>
    )
} 
export default Destination;
