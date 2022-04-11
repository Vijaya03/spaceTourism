import React, { Component, useState, useEffect } from 'react';
import {   Link } from "react-router-dom";
import styled from 'styled-components'
import  './index.css';
import NavBar from '../NavBar';
import data from '../../data.json';

const Technology = () =>{
    console.log(process.env.PUBLIC_URL);
    const [tech,setTech] = useState(data.technology[0].name);
    const [techData,setTechData] =useState(data.technology[0]);
    useEffect(()=>{
        data.technology.map(items=>{
            if(items.name == tech){
                return setTechData(items);
            }
        })
    } ,[tech,setTech])
    const image_test ={
        "portrait":process.env.PUBLIC_URL + techData.images.portrait,
        "landscape": process.env.PUBLIC_URL + techData.images.landscape
    } ;
    const IMG = styled.div`
        background:url(${image_test.portrait});
        min-width:515px;
        height:527px;
        margin-top:60px;
        @media only screen and (max-width: 759px) and (min-width:379px){
            background:url(${image_test.landscape});
            max-height:19.375rem;
            min-width:100%;
        }
        @media (max-width: 380px){
            background:url(${image_test.landscape});
            max-height:10.625rem;
            min-width:100%;
            margin-top:0;
        }
    `;
    
    function isSelectedd(value){
        return ((value===tech) ?'white-fill':'');
    }
    return(
           <div className="main-technology">
             <NavBar></NavBar>
                <div className="Launch_history">
                    <div className="Launch">
                         <div className="Luanch_header"> 
                            <span className="Luanch_header_num">03 </span>
                            <span className="Luanch_header_content"> Space launch 101 </span>
                          </div>
                          <div className="Luanch_context"> 
                             <div className="circle_pagination"> 
                                <button onClick={()=>setTech(data.technology[0].name)} className={isSelectedd(data.technology[0].name)}>1</button>
                                <button onClick={()=>setTech(data.technology[1].name)} className={isSelectedd(data.technology[1].name)}>2</button>
                                <button onClick={()=>setTech(data.technology[2].name)} className={isSelectedd(data.technology[2].name)}>3</button>
                            </div>
                            <div className="Launch_description">
                                <div className="termo"> The terminology...</div>
                                <div className="Launch_description_header">{techData.name}</div>
                                <div className="Launch_description_context">{techData.description}</div>
                            </div>
                          </div>
                    </div>
                    <div className="Launch_photos">
                         <IMG ></IMG>
                    </div>
                </div>
           </div>
    )
} 
export default Technology;
