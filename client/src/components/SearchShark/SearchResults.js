import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

// 

const SearchResults = props => {
    return (props.games.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Nothing Searched Yet</h3>
                </div>
            </div>
        </div>
    ) :
props.games.map(game=>{
    return(


<Card >
  <Card.Img id="CardImg" variant="top" src={game.image} />
  <Card.Body>
    <Card.Title>{game.title}</Card.Title>
    <Card.Text>
      {game.author}
    </Card.Text>
    <Card.Text>
      {game.description}
    </Card.Text>
    <Button className="saveBook btn btn-primary" 
    id={game.id} onClick={(event) => props.handleSavedButton(event)} 
    variant="success">Product Page</Button>
  </Card.Body>
</Card>)}
                            )
}

export default SearchResults