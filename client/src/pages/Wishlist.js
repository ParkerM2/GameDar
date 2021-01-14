import React from "react";
import useSWR from "swr";
import "../App.css"
import SearchCheapGames from "../components/SearchShark/Search"
import Wishlist from "../components/Wishlist/Wishlist";


function WishListPage({ fetcher }){
    const { data, error } = useSWR('/api/user', fetcher)

    return(
<>
        <Wishlist/>
        <pre>{JSON.stringify(error || data)}</pre>
        <SearchCheapGames/>
</>
    )
}

export default WishListPage