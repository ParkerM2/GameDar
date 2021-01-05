import React from 'react'
import {Button} from './Button'
import './Hero.css'
import Iframe from 'react-iframe'
function HeroSection (){
    return(
        <div className='hero-container'>
            {/* <Iframe url="https://giphy.com/embed/SiIcgS17qLCTYdUafU"
        width="10%"
        height="100%"
        right= "100px"
        id="myId"
        className="video"
        display="initial"
        float="right"
        z-index="-1"
        position="absolute"/> */}
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