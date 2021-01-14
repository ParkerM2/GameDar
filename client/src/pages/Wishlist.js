import React from "react";
import useSWR from "swr";
import "../App.css"
import SearchCheapGames from "../components/SearchShark/Search"



function WishListPage({ fetcher }){
    const { data, error } = useSWR('/api/user', fetcher)

    return(
<>
       
        <pre>{JSON.stringify(error || data)}</pre>
        <h1>{data}</h1>
        <SearchCheapGames/>
</>
    )
}

export default WishListPage