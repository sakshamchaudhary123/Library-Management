import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import axios from "axios";

import {useNavigate} from "react-router-dom";

function CreateBook() {

  const navigate = useNavigate();

  function addBook() {
    let data = {
      bookName: bookName,
      auther: auther,
      description: description,
      publisher: publisher,
      price: price,
      language: language,
      ISBN: ISBN,
      quantity: quantity
    };
    axios({
      url: "http://localhost:3000/add/book", // this is for nodejs server
      method: "POST",
      data: data,
    }).then(() => {
      // console.log(res);
      navigate("/book");
    }).catch((err) => {
      console.log(err);
    })
  }

  let [bookName, setBookName] = useState("");
  let [auther, setAuther] = useState("");
  let [description, setDescription] = useState("");
  let [publisher, setPublisher] = useState("");
  let [price, setPrice] = useState("");
  let [language, setLanguage] = useState("");
  let [ISBN, setISBN] = useState("");
  let [quantity , setQuantity] = useState("");

  return (
    <Form className="border border-dark rounded pt-4 px-2">
      <Form.Group className="mb-3">
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter book name "
          onChange={(e) => setBookName(e.target.value)}
        />
      </Form.Group>
      {bookName}
      <Form.Group className="mb-3">
        <Form.Label>Auther</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Auther name "
          onChange={(e) => setAuther(e.target.value)}
        />
      </Form.Group>
      {auther}
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Description of the book "
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      {description}
      <Form.Group className="mb-3">
        <Form.Label>Publisher</Form.Label>
        <Form.Control
          type="text"
          placeholder="Publisher of the book "
          onChange={(e) => setPublisher(e.target.value)}
        />
      </Form.Group>
      {publisher}
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Price of the book "
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>
      {price}
      <Form.Group className="mb-3">
        <Form.Label>Language</Form.Label>
        <Form.Control
          type="text"
          placeholder="Language of the book "
          onChange={(e) => setLanguage(e.target.value)}
        />
      </Form.Group>
      {language}
      <Form.Group className="mb-3">
        <Form.Label>ISBN No</Form.Label>
        <Form.Control
          type="text"
          placeholder="ISBN no of the book "
          onChange={(e) => setISBN(e.target.value)}
        />
      </Form.Group>
      {ISBN}
      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="text"
          placeholder="Quantity of the book "
          onChange={(e) => setQuantity(e.target.value)}
        />
      </Form.Group>
      {quantity}
      <Button variant="primary" onClick={addBook}>
        Add Book
      </Button>
    </Form>
  );
}

export default CreateBook;
