import axios from "axios" 

export default{
        // api call use book parameter as a search query
    getGoogleSearchBooks: function(book){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book)
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


