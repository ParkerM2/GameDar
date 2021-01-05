import React,{useState} from 'react'
import {Link} from "react-router-dom"
function Navbar(){
    const [click,setClick]= useState (false);

    const handleClick=()=>
        setClick(!click);
        const closeMobileMenu=()=> setClick(false);
    
    return (
        <>
<nav className="navbar">
        <div className="navbar-container">

            {/* //link is like an anchor tab this is the logo of the navbar */}
            <Link to="/" className="navbar-logo">
                GameDar <i className="fab fa-typo3"/></Link>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" :"fas fa-bars"}/>
                </div>
                <ul className= {click ? "nav-menu active": "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                </ul>
        </div>

    </nav>

         </>
    )
}
export default Navbar