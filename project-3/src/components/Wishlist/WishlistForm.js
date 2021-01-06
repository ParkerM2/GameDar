

import React, {useState} from 'react'

function WishlistForm() {
    const [input,setInput]=useState("")
    return (
        <form className="wishlist-form">
            <input
             type="text" 
            placeholder="add a game" 
            value={input}
            name= 'text' 
            className="wishlist-input"/>
            
            <button className="wishlist-button">+</button>
        </form>
            
        
    )
}

export default WishlistForm
