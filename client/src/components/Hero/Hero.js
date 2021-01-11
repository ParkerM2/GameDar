import React from 'react'
import {Button} from '../Navbar/Button'
import './Hero.css'

function HeroSection (){
    return(
        <div className='hero-container'>
        
            <h1>Welcome to Game-Dar</h1>
            <p>Keep Track of all your Games</p>
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