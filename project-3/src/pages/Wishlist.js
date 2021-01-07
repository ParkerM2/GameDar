import React from "react";
import "../App.css"
import Footer from "../components/Footer/Footer"
import SearchCheapGames from "../components/SearchShark/Search"
import Wishlist from "../components/Wishlist/Wishlist";


function WishListPage(){
    return(
<>
        <Wishlist/>
        <SearchCheapGames/>
        <Footer/>
</>
    )
}

export default WishListPage