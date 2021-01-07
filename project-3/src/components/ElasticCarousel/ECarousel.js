import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel'
import Item from "./ECarouselItem";
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import SamplePic from "../../assets/Runescape.jpg"
import axios from "axios"
import "./ECarousel.css"
const breakPoints=[
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},
    ]

function ECarousel() {
// use a hook to call the api?

const options = {
    method: 'GET',
    url: 'https://rawg-video-games-database.p.rapidapi.com/games',
    headers: {
      'x-rapidapi-key': 'b6efeb7736msh6775ab537a821bcp18edc8jsn999d0bb0a682',
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
    }
  };
    const [data, setData] = useState({ gamesArray: [] });
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            options
          )
          .then(function (response) {
            console.log(response.data.results);})
     


          setData(result.data)


        };
        
     
        fetchData();
      }, []);

return(
<> 
<Container>
<h1 style={{textAlign:'center'}}>New Releases</h1>
<ul>
      {data.gamesArray.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
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