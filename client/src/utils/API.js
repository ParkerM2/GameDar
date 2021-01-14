import axios from "axios" 

export default{
        // api call use book parameter as a search query
    getCheapSharkSearchGames: function(game){
        return axios.get("https://www.cheapshark.com/api/1.0/games?title=" + game)
    },

    getSearchRawG:  function(q, token){
        return axios.get("/api/search?q=" + q, {
            headers: { Authorization: `Bearer ${token}`}
        })
    },

    getBooks: function(){
        return axios.get('/api/games');
    },

    getBook: function(id){
        return axios.get('/api.games'+ id)
    },

    saveCheapGame: function (savedCheapGames){
        return axios.post("/api/games", savedCheapGames);
    },

    deleteBook: function(id){
        return axios.delete('/api/games/'+id)
    }



}


