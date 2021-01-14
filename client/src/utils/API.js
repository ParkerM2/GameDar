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

    addGame: function(data, token){
        return axios.post("/api/addGame", data, {
            headers: { Authorization: `Bearer ${token}`},  
        })
    },

    removeGame: function(gameId, token){
        return axios.delete("/api/removeGame/"+gameId, {
            headers: { Authorization: `Bearer ${token}`},  
        })
    },

    getGameDetails:  function(gameId, token){
        return axios.get("/api/gameDetails?id=" + gameId, {
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


