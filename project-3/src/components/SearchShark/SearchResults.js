import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

// 

const SearchResults = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Nothing Searched Yet</h3>
                </div>
            </div>
        </div>
    ) :
props.books.map(book=>{
    return(


<Card >
  <Card.Img id="CardImg" variant="top" src={book.image} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
      {book.author}
    </Card.Text>
    <Card.Text>
      {book.description}
    </Card.Text>
    <Button className="saveBook btn btn-primary" 
    id={book.id} onClick={(event) => props.handleSavedButton(event)} 
    variant="success">Save Book</Button>
  </Card.Body>
</Card>)}
                            )
}

export default SearchResults