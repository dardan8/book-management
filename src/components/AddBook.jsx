import { React, useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookForm from "./form/BookForm";
import { useNavigate } from "react-router-dom";

const AddBook = () => {

  const navigate = useNavigate();
  const { books, setBooks } = useContext(BookContext);

  // On submit the new book is added to the state and the rest of the books are spread into the state object

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate("/");
  };

  return (
    <div className="addbook">
      <BookForm handleSubmit={handleOnSubmit} />
    </div>
  );
};

export default AddBook;