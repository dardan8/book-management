import React from "react";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

const BookForm = ({handleSubmit}) => {

    const [bookState, setBookState] = useState({
        name: " ",
        author: " ",
        price: " ",
    });

    console.log(bookState);

    const handleChange = (e) => {
        setBookState({
            id: uuidv4(),
            ...bookState,
            [e.target.name]: e.target.value,
        })

    }

   const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
        ...bookState,
        date: new Date()
    });
   } 

  const renderInputField = (label, placeholder, name) => (
    <div className="inputField">
      <label>{label}</label>
      <input value={bookState[name]} onChange={handleChange} type="text" name={name} placeholder={placeholder} />
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="form">
      {renderInputField("Book Name", "Enter Book Name...", "name")}
      {renderInputField("Book Author", "Enter Book Author...", "author")}
      {renderInputField("Book Price", "Enter Book Price...", "price")}
    <button className="btnForm" type="submit"> Submit</button>
    </form>
  );
};

export default BookForm;
