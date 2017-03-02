'use strict';
let mongoose = require('mongoose');

//Book Schema
let bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    author:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

let Book = module.exports = mongoose.model('Book', bookSchema);

// Get all Books
module.exports.getBooks = function (callback, limit) {
    Book.find(callback).limit(limit);
}

// get book by id
module.exports.getBookById = function (id, callback) {
    Book.findById(id, callback);
}

//Add Book
module.exports.addBook = function (book, callback) {
    Book.create(book, callback);
}

//Update Book
module.exports.updateBook = function (id, book, options, callback) {
    let query = {_id: id};
    let update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author
    }

    Book.findOneAndUpdate(query,update, options, callback);
}

//Delete Book
module.exports.deleteBook = function (id, callback) {
    let query = {_id: id};
    Book.remove(query, callback);
 }