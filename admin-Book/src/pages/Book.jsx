import React, { useState } from "react";
import { Container, Button, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import axios from "axios";

function Book() {
  let [books, setBooks] = useState([]);

  let [isDelete, setIsDelete] = useState(false);

  let [searchBook, setSearchBook] = useState("");

  useEffect(() => {
    axios({
      url: "http://localhost:3000/books",
      method: "GET",
      params: { 
        search: searchBook 
      }
    })
      .then((res) => {
        console.log(res);
        setBooks(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isDelete, searchBook]);

  const navigate = useNavigate();

  function addBookRoute() {
    navigate("/add/book");
  }

  function gotoEditBook(id) {
    alert(id);
    navigate("/edit/book/" + id); // : is used to pass the id ( value ) to the next page
  }

  function handleDelete(id) {
    alert(id);
    axios({
      url: "http://localhost:3000/delete/book/" + id,
      method: "DELETE",
    })
      .then(() => {
        setIsDelete(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Enter book name to search" onChange={ (e) => setSearchBook(e.target.value) }/>
        </Form.Group>
      </Form>
      <Button
        variant="dark"
        onClick={addBookRoute}
        style={{ float: "right", marginBottom: "10px" }}
      >
        Add Book
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Book id</th>
            <th>Book Name</th>
            <th>Auther</th>
            <th>Language</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={index}>
                <td> <img src={book.bookImage} alt="book" style={{ width: "60px", height: "60px" }} /> </td>
                <td>{book._id}</td>
                <td>{book.bookName}</td>
                <td>{book.auther}</td>
                <td>{book.language}</td>
                <td>{book.price}</td>
                <td>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => gotoEditBook(book._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "brown",
                      color: "white",
                      padding: "4px",
                    }}
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Book;
