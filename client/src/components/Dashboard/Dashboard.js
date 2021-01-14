
import React, {useState, useEffect} from 'react';

import API from "../../utils/API"

const Dashboard = (props)=>{
 
    
    const userToken = localStorage.getItem('USER_TOKEN');
    const [searchResults, setSearchResults] = useState([]);
    const [gameDetails, setGameDetails] = useState(null);

    
    const getGameDetails = (gameId) =>{
        API.getGameDetails(gameId, userToken).then((res)=>{
            console.log("GAME DETAILS==>", res.data);
            setGameDetails(res.data.data)
        }).catch(err=>{
            console.log("GETTING GAME ERROR", err);
        })

    }

    return (
        <div className="container">
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
                        
                        </div>
                       )
                    }
                  
                </div>
        </div>
    </div>
    )
}



export default Dashboard;