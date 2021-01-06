import React from 'react';
import ReactDOM from "react-dom";
import Carousel from 'react-elastic-carousel'
import Item from "./ECarouselItem";
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
<h1 style={{textAlign:'center'}}>E</h1>
<div className="ECarousel">
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

</>
)}

export default ECarousel