import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom"; // useParams is used to get the id from the url

function BookForEdit() {

  const navigate = useNavigate();

  let [book, setBook] = useState({
    bookName: "",
    auther: "",
    description: "",
    publisher: "",
    price: 0,
    language: "",
    ISBN: "",
    quantity: 0,
  });

  const params = useParams();
  let id = params.id;
  console.log(id, "id");

  useEffect(() => {
    axios({
      url: "http://localhost:3000/get/book/" + id,
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        setBook(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  function handlerChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setBook((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  function editBook() {
    axios({
      url: "http://localhost:3000/edit/book/" + id,
      method: "PUT",
      data: book,
    })
      .then((res) => {
        console.log(res);
        navigate("/book");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Form className="border border-dark rounded pt-4 px-2">
      <Form.Group className="mb-3">
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          type = "text"
          value = {book.bookName}
          name = "bookName"
          onChange={ handlerChange }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Auther</Form.Label>
        <Form.Control
          type = "text"
          value = {book.auther}
          name = "auther"
          onChange={ handlerChange }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as = "textarea"
          rows = {3}
            value={book.description}
          name="description"
          onChange={ handlerChange }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Publisher</Form.Label>
        <Form.Control
          type = "text"
          value = {book.publisher}
          name = "publisher"
          onChange={ handlerChange }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type = "text"
          value = {book.price}
          name = "price"
          onChange={ handlerChange }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Language</Form.Label>
        <Form.Control
          type = "text"
          value = {book.language}
          name = "language"
          onChange={ handlerChange }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ISBN No</Form.Label>
        <Form.Control
          type = "text"
          value = {book.ISBN}
          name = "ISBN"
          onChange={ handlerChange }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type = "text"
          value = {book.quantity}
          name = "quantity"
          onChange={ handlerChange }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type = "file"
          value = {book.image}
          name = "Image"
          onChange={ handlerChange }
        />
      </Form.Group>
      <Button variant="primary" 
        onClick={ editBook }
      >
        Edit Book
      </Button>
      
    </Form>
  )
}

export default BookForEdit;
