const express = require('express')
const bodyParser = require('body-parser');
const bookcontroller = require('../controllers/bookcontroller');
const Book = require('../models/Book')
const route = express.Router()
const multer = require('multer');
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extends: false
}))
const uploader = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 10 * 1024 * 1024 },
});
  
route.post('/add/book', uploader.single("file") ,(req,res)=>{
    bookcontroller.addBook(req,res);
})

route.get('/books', (req, res) => {
    bookcontroller.getBooks(req,res);
})

route.get('/get/book/:id', (req, res) => {
    bookcontroller.getBookForEdit(req,res);
})

route.put('/edit/book/:id', (req, res) => {
    console.log("Going to update book by id");
    bookcontroller.updateBook(req,res);
})

route.delete('/delete/book/:id', (req, res) => {
    console.log("Going to delete book by id");
    bookcontroller.deleteBook(req,res);
})

module.exports = route;