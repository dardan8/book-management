import React from "react";
import {useNavigate} from "react-router-dom"

const Book = ({ book , handleRemoveBook}) => {

const navigate = useNavigate();
const { id, name, author, price, date } = book;

  return (
    <div>
      <div>
        <p>Author: {author}</p>
        <p>Price: {price}</p>
        <p>Date: {new Date(date).toDateString()}</p>
      </div>
      <div>
        <button onClick={() => navigate(`/edit/${id}`)}> Edit </button>

        <button onClick={() => handleRemoveBook(id)}> Delete</button>
      </div>
    </div>
  );
};

export default Book;
