const Book = require("../models/Book");
const cloudinary = require("cloudinary").v2;

async function addBook(req, res) {
  try {
    console.log(req.body, "req.body");
    console.log(req.file, "req.file");
    cloudinary.config({
      cloud_name: "dwjcgsujt",
      api_key: "578516159766915",
      api_secret: "tNGDAoQN_fVweJDK64MHNKTNJK8",
    });
    const upload = await cloudinary.uploader.upload(req.file.path);
    req.body.bookImage = upload.secure_url;
    let book = new Book(req.body);
    await book.save();
    res.status(200).send({ success: true });
  } catch (err) {
    console.log("Error: " + err);
    res.status(500).send({ success: false });
  }
}

async function getBooks(req, res) {
  try {
    console.log(req.query, 'req.query....'); // to get the query from the url
    // let books = await Book.find({}); // "{}" means get all the books from the database
    let books = await Book.find({ bookName: new RegExp(req.query.search, 'i') }); // get the books from the database with the search query
    res.status(200).send({ success: true, data: books }); // send the data to the client side amd 200 is the success status
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Something Wrong : code dakh la ak bar",
    }); // 500 is the server error
  }
}

async function getBookForEdit(req, res) {
  try {
    let id = req.params.id; // due to exprees we can get the id from the url using req.params.id directly without importing like react
    let book = await Book.findOne({ _id: id });
    res.status(200).send({ success: true, data: book });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Something went wrong" });
  }
}

async function updateBook(req, res) {
  try {
    let id = req.params.id;
    let book = await Book.findOne({ _id: id });
    console.log(book, "book");
    console.log("---------------------------------------");
    console.log(req.body, "req.body");
    book.bookName = req.body.bookName;
    book.auther = req.body.auther;
    book.description = req.body.description;
    book.publisher = req.body.publisher;
    book.price = req.body.price;
    book.language = req.body.language;
    await book.save();
    res.status(200).send({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Something went wrong" });
  }
}

async function deleteBook(req, res) {
  try {
    let id = req.params.id;
    await Book.deleteOne({ _id: id });
    res.status(200).send({ success: true });
  }
  catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Something went wrong" });
  }
}

module.exports = {
  addBook,
  getBooks,
  getBookForEdit,
  updateBook,
  deleteBook,
};
