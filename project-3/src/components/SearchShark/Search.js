import React, { Component } from "react";
import Jumbotron from "../../components/MyJumbotron/jumbotron";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SearchForm from "./SearchForm"
import SearchResults from "./SearchResults"
// import Nav from "./components/Nav";
import API from "../../utils/API";


class SearchBooks extends Component {
    //create state
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
        API.getCheapSharkSearchGames(this.state.search)
            .then(res => { console.log(res)
                if (res.data === "error") {
                    throw new Error(res.data);
                }
                else {
                    // store response in a array
                    let results = res.data
                console.log(results)
                    //map through the array 
                    results = results.map(result => {
                        //store each book information in a new object 
                        result = {
                            key: result.GameID,
                            id: result.GameID,
                            title: result.internalName,
                            author: result.External,
                            description: result.cheapest,
                            image: result.thumb,
                            link: result.cheapest
                        }
                        return result;
                    })
                    // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.books)
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid>
                <Jumbotron title="Search Below for the cheapest price on the web"
                 text="Powered by CheapShark API">
                 
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchResults books={this.state.books} handleSavedButton={this.handleSavedButton}  />
                </Container>
            </Container>
        )
    }


}

export default SearchBooks