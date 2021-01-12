import React, { useState } from "react";
import useSWR from "swr";
import Navbar from "./../components/Navbar/Navbar";


function UserPage ({ fetcher }) {
    // need to be able to grab the user data here @ Thomas
    // I have no clue how to bring in the authorized user data
    // const [userData, setUserData] = useState({});


    const { data, error } = useSWR('/api/user', fetcher)


    return(
        
        
        <>
            
                <h1> hi </h1>
            
                
        </>
    )

}

export default  UserPage;