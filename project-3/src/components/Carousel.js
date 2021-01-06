import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import RunescapePic from "../assets/Runescape.jpg"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./Carousel.css"

function TopCarousel (){
return(
    <Row>
        <Col>
<Jumbotron>

  <h1>2021 </h1>
  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="img"
      src={RunescapePic}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="img"
      src={RunescapePic}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img"
      src={RunescapePic}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
</Col>

//col 2 

<Col>
</Col>
</Row>

)

}

export default TopCarousel