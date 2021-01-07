import axios from "axios" 

export default{
        // api call use book parameter as a search query
    getCheapSharkSearchGames: function(book){
        return axios.get("https://www.cheapshark.com/api/1.0/games?title=" + book)
    },

    getBooks: function(){
        return axios.get('/api/books');
    },

    getBook: function(id){
        return axios.get('/api.books'+ id)
    },

    saveBook: function (savedBooks){
        return axios.post("/api/books", savedBooks);
    },

    deleteBook: function(id){
        return axios.delete('/api/books/'+id)
    }



}


