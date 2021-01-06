import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import Button from "./Button"
import "./NavBar.css"
function Navbar(){
    const [click,setClick]= useState (false);
    const [button,setButton]=useState(true)

    const handleClick=()=>
        setClick(!click);

    const closeMobileMenu=()=> setClick(false);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
    } else {setButton(true);
            }
        };
        // this code uses react useEffect hook to prevent the sign up utton from jumping to the middle of the screen
        useEffect(()=>{
            showButton()
        },[])
// when window gets smaller
        window.addEventListener('resize',showButton)
    return (
        <>
<nav className="navbar">
        <div className="navbar-container">

            {/* //link is like an anchor tab this is the logo of the navbar */}
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                GameDar <i className="fas fa-microscope"/></Link>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" :"fas fa-bars"}/>
                </div>
                <ul className= {click ? "nav-menu active": "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Favorites" className="nav-links" onClick={closeMobileMenu}>
                            Favorites
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/myList" className="nav-links" onClick={closeMobileMenu}>
                            MyList 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
                {/* if true pass these children through */}
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>

    </nav>

         </>
    )
}
export default Navbar