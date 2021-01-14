import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import "./jumbotron.css"
import Image from "react-bootstrap/Image"
import SharkIcon from "../../assets/cheapSharkIcon.jpg"
import Carousel from "../ElasticCarousel/ECarousel"

const MyJumbotron= (props)=>{
    return(
        <Jumbotron id="bg" fluid>
  <Container>
    <h1>{props.title}</h1>
    <p>
      {props.text}
    </p>
    <Image src={SharkIcon}roundedCircle className="h-1 w-1 k mr-100" />
    <Carousel/>
  </Container>

</Jumbotron>
    );
};

export default MyJumbotron;