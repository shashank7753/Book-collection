import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HomePage } from './pages/HomePage';
import { BooksList } from './pages/BooksList';
import { BookmarksList } from './pages/BookmarksList';
import { AddBook } from './pages/AddBook';
import { EditBook } from './pages/EditBook';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksList />} />
            <Route path="/bookmarks" element={<BookmarksList />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;