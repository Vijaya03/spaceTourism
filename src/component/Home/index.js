import React, { Component, useState } from 'react';
import './index.css';
import NavBar from '../NavBar';
const Home = ()=>{
return(<>
        <div className="main">
            <NavBar></NavBar>
            <div className="section">
                <div className="description">
                    <p className="line_1">So, you want to travel to</p>
                    <p className="line_2">SPACE</p>
                    <p className="line_3">Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="exploreButton">
                    <button className="explore">Explore</button>
                </div>
            </div>
        

        </div>


</>)
}
export default Home;