'use strict';
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
app.use(bodyParser.json());
let Genre = require('./models/genre');
let Book = require('./models/book');

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
let db = mongoose.connection;

app.get('/', function (req, res) {
    res.send('<h1>Welcome to my first node project !!</h1>');
});

app.get('/api/genres', function (req, res) {
    Genre.getGenres(function (err, genres) {
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.get('/api/genres/:_id', function (req, res) {
    Genre.getGenreById(req.params._id, function (err, genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.post('/api/genres', function (req, res) {
    let genre = req.body;
    Genre.addGenre(genre,function (err, genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.put('/api/genres/:_id', function (req, res) {
    let id = req.params._id;
    let genre = req.body;
    Genre.updateGenre(id, genre, {}, function (err, genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.delete('/api/genres/:_id', function (req, res) {
    let id = req.params._id;
    Genre.deleteGenre(id, function (err, genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

//************** BOOKS *******************

app.get('/api/books', function (req, res) {
    Book.getBooks(function (err, books) {
        if(err){
            throw err;
        }
        res.json(books);
    });
});

app.get('/api/books/:_id', function (req, res) {
    Book.getBookById(req.params._id, function (err, book) {
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.post('/api/books', function (req, res) {
    let book = req.body;
    Book.addBook(book,function (err, book) {
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.put('/api/books/:_id', function (req, res) {
    let id = req.params._id;
    let book = req.body;
    console.log('hey ',id,book);
    Book.updateBook(id, book, {}, function (err, book) {
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.delete('/api/books/:_id', function (req, res) {
    let id = req.params._id;
    Book.deleteBook(id, function (err, book) {
        if(err){
            throw err;
        }
        res.json(book);
    });
});


app.listen(3000);
console.log('running on port 3000...');