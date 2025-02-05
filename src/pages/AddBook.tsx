import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { BookForm } from '../components/BookForm';
import { addBook } from '../store/bookSlice';
import type { Book } from '../types/book';

export const AddBook: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (bookData: Omit<Book, 'id'>) => {
    const newBook = {
      ...bookData,
      id: uuidv4(),
    };
    dispatch(addBook(newBook));
    navigate('/books');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Book</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <BookForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};