import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import API from '../../utils/API';

const Search = (props)=>{
    let searchTerm = props.location.search;
    if(searchTerm){
        searchTerm = searchTerm.split('=')[1];
    }
    const userToken = localStorage.getItem('USER_TOKEN');

    const [isLoading, setIsLoading] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    const [gameDetails, setGameDetails] = useState(null);

    useEffect(()=>{
    API.getSearchRawG(searchTerm, userToken).then(res=>{
      //  console.log("SEARCH RES", res.data.data.results);
       setSearchResults(res.data.data.results)
    }).catch(err=>{
        console.log("SEARCH ERROR", err);
    })
    }, [searchTerm]);

    const getGameDetails = (gameId) =>{
        API.getGameDetails(gameId, userToken).then((res)=>{
            console.log("GAME DETAILS==>", res.data);
            setGameDetails(res.data.data)
        }).catch(err=>{
            console.log("GETTING GAME ERROR", err);
        })

    }

    const addGame =(game)=>{
        const gameToAdd = {
            id: game.id,
            title: game.name,
            game_img: game.background_image
        };
        API.addGame(gameToAdd, userToken)
            .then(()=>{
                alert('Game Added Successfully!');
                getGameDetails(game.id)
                setIsLoading(!isLoading)
            })
            .catch(e=>alert('Something went wrong while adding the game!'))

    }

    const removeGame = (gameId)=>{
        API.removeGame(gameId, userToken)
            .then(()=>{
                console.log("Game Removed");
                getGameDetails(gameId)
            })
            .catch(()=>alert("Error removing game!"))

    }
    return (
        
        <div className="container">

<form>
            <div className="form-group">
                <label className="BookSearchLabel"><h3>Search For Game</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Enter Game"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
                <h1>Search Results</h1>
                <hr/>
                <div class="row">
                <div class="col-5 col-lg-3">
                    <ul class="list-group">
                    {
                        searchResults.length > 0 ?
                        (
                            searchResults.map(game=>(
                                <li class="list-group-item" key={game.id}>
                                <a onClick={()=>getGameDetails(game.id)} style={{textDecoration: 'none', cursor: 'pointer'}} >{game.name}</a>
                                </li>
                            ))
                        ) : (
                            <h2 style={{color: 'red'}}>Opps! No Results Found!</h2>
                        )
                    }
                
                    </ul>
                </div>
                <div class="col-7 offset-lg-1" id="game_details">
                    {
                       gameDetails && (
                           <div>
                        <img src={gameDetails.background_image} alt={gameDetails.name} style={{width: '100%'}} />
                        <hr />
                        <div dangerouslySetInnerHTML={{__html: gameDetails.description }} style={{color: '#fff'}}/>
                        {gameDetails.hasGame ?
                         <button className="btn btn-danger" onClick={()=>removeGame(gameDetails.id)}>Remove</button> :
                         <button className="btn btn-primary" onClick={()=>addGame(gameDetails)}>Add</button>
                        }
                        </div>
                       )
                    }
                  
                </div>
        </div>
    </div>
    )
}

export default withRouter(Search);