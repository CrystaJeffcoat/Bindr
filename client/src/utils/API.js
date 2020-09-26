import axios from 'axios';
// API Constants
const URI = 'https://api.nytimes.com/svc/books/v3/lists';
const API_KEY = 'cU0r1snQvANZRCak9V0WDfE5r2QE1E9j';
const DATE = 'current'; // YYYY-MM-DD or "current"

export default {
    // Gets all books
    getUser: function () {
        return axios.get('/api/user');
    },
    // Gets Genre Dropdown Select Options
    getGenre: function () {
        return axios.get(`${URI}/names.json?api-key=${API_KEY}`);
    },
    // Gets Book list based off select dropdown selection (defaults to hardcover-fiction)
    getBooks: function (genre) {
        return axios.get(`${URI}/${DATE}/${genre}.json?api-key=${API_KEY}`);
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get('/api/books/' + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete('/api/books/' + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post('/api/books', bookData);
    },
};
