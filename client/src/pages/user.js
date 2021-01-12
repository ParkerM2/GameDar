import React, { useState } from "react";
import useSWR from "swr";
import Image from "react-bootstrap/Image"
import runescapeImg from "./../assets/Runescape.jpg"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";


function UserPage ({ fetcher }) {
    // need to be able to grab the user data here @ Thomas
    // I have no clue how to bring in the authorized user data
    // const [userData, setUserData] = useState({});


    // const { data, error } = useSWR('/api/user', fetcher)


    return(
        
        <Container className="mx-auto">
            {/* We need user_pokemonImg instead of runescape IMG */}
            <Row>
                <Col >
                    <Image src={runescapeImg} className="h-75 w-50 d-inline-block mt-3" />
                    {/* pokemon name  */}
                </Col>
            {/* Inputting Column for news from api call */}
                <Col>
                    <Jumbotron className="mt-3"> 
                       {/* insert API INFO */}
                        <h1>API INFO HERE</h1>

                    </Jumbotron>
                </Col>
            </Row>       
        </Container>
        
        
       
    )

}

export default UserPage;


