import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./pages/Book.jsx";
import CreateBook from "./pages/CreateBook.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Sidebarmenu from "./Sidebarmenu.jsx";
import BookForEdit from "./pages/BookForEdit.jsx";
import CreateBookImg from "./pages/CreateBookImg.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Sidebarmenu>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/book" element={<Book />} />
        {/* <Route path="/add/Book" element={<CreateBook />} /> */}
        <Route path="/add/Book" element={<CreateBookImg />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit/book/:id" element={<BookForEdit />} />
      </Routes>
    </Sidebarmenu>
    </BrowserRouter>
  </StrictMode>
);
