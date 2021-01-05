import React from 'react'
import {Button} from './Button'
import './Hero.css'
import Iframe from 'react-iframe'
function HeroSection (){
    return(
        <div className='hero-container'>
        
            <h1>RuneScape</h1>
            <p>Game of the day</p>
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
                    Watch trailer <i className= 'far fa-play-circle'></i>
                </Button>
            </div>
            
        </div>
    )
}
export default HeroSection