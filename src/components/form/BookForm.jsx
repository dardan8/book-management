import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BookForm = ({ book, handleSubmit }) => {

  const [bookState, setBookState] = useState({
    name: book ? book.name : "",
    author: book ? book.author : "",
    price: book ? book.price : "",
  });

  const handleChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      id: uuidv4(),
      ...bookState,
      date: new Date(),
    });
    setBookState({ name: "", author: "", price: "" });
  };

  const renderInputField = (label, placeholder, name) => (
    <div className="inputfield">
      <label>{label}</label>
      <input
       placeholder={placeholder}
       name={name}
        value={bookState[name]}
        type="text"
        onChange={handleChange}
      />
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="">
      {renderInputField("Book Name", "Enter book name...", "name")}
      {renderInputField("Book Author", "Enter book author...", "author")}
      {renderInputField("Book Price", "Enter book price...", "price")}
      <button className="btnForm" type="submit">
        {" "}
        {book ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default BookForm;
