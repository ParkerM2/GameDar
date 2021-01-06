import React from 'react';
import Carousel from 'react-elastic-carousel'
import Item from "./ECarouselItem";
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import SamplePic from "../../assets/Runescape.jpg"
import "./ECarousel.css"
const breakPoints=[
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},
    ]

function ECarousel() {
return(
<> 
<Container>
<h1 style={{textAlign:'center'}}>New Releases</h1>
<div className="ECarousel">
    <h1>Recommended</h1>
    <Carousel breakPoints={breakPoints}>
        <Item className="c-image1"><Image className="c-image1" src={SamplePic} thumbnail /></Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item>
        <Item>9</Item>
        <Item>10</Item>
    </Carousel>
</div>

<div className="ECarousel">
    <h1>New Releases</h1>
    <Carousel breakPoints={breakPoints}>
        <Item>One</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item>
        <Item>9</Item>
        <Item>10</Item>
    </Carousel>
</div>
</Container>
</>

)}

export default ECarousel