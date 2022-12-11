import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";

const BookList = () => {
  
  //Get books from the Context
  const { books, setBooks } = useContext(BookContext);

  //Filters the array to remove the book with selected id. The filtered array is set as the books array state
  const handleRemoveBook = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  return (
    
    <div className="listBook">
      {books.length ? (
        books.map((book) => (
          <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
        ))
      ) : (
        <p className="noData">No books avaliable, Please add some book!</p>
      )}
    </div>
  );
};

export default BookList;