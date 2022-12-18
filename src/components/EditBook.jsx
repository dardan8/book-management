import { React, useContext } from "react";
import { BookContext } from "../context/BookContext";

import BookForm from "./form/BookForm";

import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { books, setBooks } = useContext(BookContext);

  //Object stores the book that needs to be edited.
  const bookToEdit = books.filter((book) => book.id === id);

  /** Filters the books object and only keeps items that don't match the id of the selected book.
  It sets the books state to this filtered array and adds the edited book on top.
  Navigates to the main page. **/

  const handleOnSubmit = (book) => {
    const filteredBook = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBook]);
    navigate("/book-management/");
  };

  return (
    <div className="editBook">
      <BookForm book={bookToEdit[0]} handleSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;
