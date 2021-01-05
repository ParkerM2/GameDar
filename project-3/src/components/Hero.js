import React from 'react'
import {Button} from './Button'
import './Hero.css'
function HeroSection (){
    return(
        <div className='hero-container'>
            {/* <video src=".videos/video-2.mp4" autoPlay loop muted/> */}
            <h1>RuneScape</h1>
            <p>Adventure Awaits</p>
            <div className="hero-btns">
                <Button 
                className="btns" 
                buttonStyle="btn--outline"
                buttonSize='btn--large'>
                    Get Started
                </Button>
                <Button 
                className="btns" 
                buttonStyle="primary"
                buttonSize='btn--large'>
                    watch trailer <i className= 'far fa-play-circle'></i>
                </Button>
            </div>
            
        </div>
    )
}
export default HeroSection