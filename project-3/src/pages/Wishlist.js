import React from "react";
import "../App.css"
import Footer from "../components/Footer/Footer"
import SearchBooks from "../components/SearchShark/Search"
import Wishlist from "../components/Wishlist/Wishlist";


function WishListPage(){
    return(
<>
        <Wishlist/>
        <SearchBooks/>
        {/* <Footer/> */}
</>
    )
}

export default WishListPage