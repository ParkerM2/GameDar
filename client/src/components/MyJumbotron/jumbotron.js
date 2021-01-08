import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import "./jumbotron.css"

const MyJumbotron= (props)=>{
    return(
        <Jumbotron id="bg" fluid>
  <Container>
    <h1>{props.title}</h1>
    <p>
      {props.text}
    </p>
  </Container>
</Jumbotron>
    );
};

export default MyJumbotron;