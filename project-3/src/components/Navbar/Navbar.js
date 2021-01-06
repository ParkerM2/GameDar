import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'
import FormControl from "react-bootstrap/FormControl"
import InputGroup from 'react-bootstrap/InputGroup'
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
            
{/* serach bar */}

                    

                    <> 
                    <div>
  
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Search</Button>
    </InputGroup.Append>
  </InputGroup>

</div>
                    </>
                 




                {/* links */}
                
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
                        <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
                            Sign In
                        </Link>
                    </li>
                </ul>
              
        </div>

    </nav>

         </>
    )
}
export default Navbar