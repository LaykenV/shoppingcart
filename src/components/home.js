import React, { useState, useEffect } from 'react';
import Video from "../assets/homepage-video.mp4";
import Footer from './footer';

function Home() {
    return(
        <div className='homeContainer'>
            <video playsInline autoPlay loop src={Video} muted>
            </video>
            <div></div>
            <h1 className='homeh1'>WHAT'S BEHIND YOU DOESN'T MATTER</h1>
            <Footer />
        </div>
    )
};

export default Home;