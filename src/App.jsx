import './App.scss'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'


import BookList from './components/BookList'
import AddBook from './components/AddBook'
import EditBook from './components/EditBook'

import BookProvider from './context/BookContext'


function App() {

  return (
    <div className="container">
  <BookProvider> 
   <Header/>
   <Routes>
    <Route path ='/book-management/' element={<BookList />}/>
    <Route path ='/book-management/add/' element={<AddBook />}/>
    <Route path='/book-management/edit/:id' element={<EditBook />} />
   </Routes>
   </BookProvider> 
    </div>
  )
}

export default App
