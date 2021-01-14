  
import React from "react";
import "./style.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const SaveCard = props => {
    return (props.gameDetails.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Books that You Saved</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Books that You Saved</h3>
                    {props.gameDetails.map(gameDetails => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={gameDetails.title + "Card"} key={gameDetails._id}>
                                    {/* col-3 show image of the book */}
                                    <Col size="2" className="bookImage">
                                        <img src={gameDetails.image} alt={gameDetails.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    {/* col-9 show information of the book */}
                                    <Col size="9" className="bookInfo">
                                        <Row>
                                            <h2 className="bookTitle">{gameDetails.title}</h2>
                                        </Row>
                                        <Row>
                                            <h3 className="bookAuthor">{gameDetails.authors}</h3>
                                        </Row>
                                        <Row>
                                            <p className="bookDescription">{gameDetails.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                       
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default SaveCard 