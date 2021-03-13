import React from "react";
import useSWR from "swr";
import "../App.css"
import SearchCheapGames from "../components/SearchShark/Search"



function WishListPage({ fetcher }){
    const { data, error } = useSWR('/api/user', fetcher)


}

