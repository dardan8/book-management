import React from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";

const Book = ({ book, handleRemoveBook }) => {
  const navigate = useNavigate();

  const { id, name, author, price, date } = book;

  return (
    <div className="book-card">
      <div className="book-data">
        <p>
          <span className="text-data">Name:</span> {name}
        </p>
        <p>
          <span className="text-data">Author:</span> {author}
        </p>
        <p>
          <span className="text-data">Price: </span> {price}
        </p>
      </div>
      <p className="text-date">Date added: {new Date(date).toDateString()}</p>
      <hr />
      <div className="book-card-buttons">
        <RiDeleteBinLine
          className="delete-icon"
          onClick={() => handleRemoveBook(id)}
        />

        <RiEditBoxLine
          className="edit-icon"
          onClick={() => navigate(`/edit/${id}`)}
        />
      </div>
    </div>
  );
};

export default Book;
