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
    <Route path ='/' element={<BookList />}/>
    <Route path ='/add' element={<AddBook />}/>
    <Route path='/edit/:id' element={<EditBook />} />
   </Routes>
   </BookProvider> 
    </div>
  )
}

export default App
