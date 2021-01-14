import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import API from '../../utils/API';

const Search = (props)=>{
    let searchTerm = props.location.search;
    if(searchTerm){
        searchTerm = searchTerm.split('=')[1];
    }
    const userToken = localStorage.getItem('USER_TOKEN');

    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=>{
    API.getSearchRawG(searchTerm, userToken).then(res=>{
       
       setSearchResults(res.data.data.results)
    }).catch(err=>{
        console.log("SEARCH ERROR", err);
    })
    }, [searchTerm])
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
                            searchResults.map(el=>(
                                <li class="list-group-item" key={el.id}>
                                <a href="#" >{el.name}</a>
                                </li>
                            ))
                        ) : (
                            <h2 style={{color: 'red'}}>Opps! No Results Found!</h2>
                        )
                    }
                
                    </ul>
                </div>
                <div class="col-7 offset-lg-1" id="game_details">
                    <img src="" alt="" />
                    <p style={{color: '#fff'}}>Nostrud tempor laborum enim nisi. Ut et id magna fugiat. Laborum nisi aliqua amet esse in ea. Quis sit commodo incididunt qui quis ipsum Lorem nostrud reprehenderit culpa et minim velit. Amet esse est minim nisi elit reprehenderit veniam pariatur dolor adipisicing fugiat eiusmod.</p>
                    <button className="btn btn-primary">Add</button>
                </div>
        </div>
    </div>
    )
}

export default withRouter(Search);