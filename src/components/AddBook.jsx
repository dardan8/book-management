import {React, useContext} from 'react'
import { BookContext } from '../context/BookContext'

import BookForm from './form/BookForm'
import { useNavigate } from "react-router-dom";

const AddBook = () => {

  const navigate = useNavigate();

  const {books, setBooks } = useContext(BookContext);

const handleOnSubmit = (book) => {

setBooks([book, ...books]);
navigate("/");
  }

  return (
    <div className='addbook'>
        <BookForm handleSubmit={handleOnSubmit}/>
    </div>
  )
}

export default AddBook