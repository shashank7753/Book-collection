import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { BookForm } from '../components/BookForm';
import { updateBook } from '../store/bookSlice';
import { RootState } from '../store/store';
import type { Book } from '../types/book';

export const EditBook: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const book = useSelector((state: RootState) =>
    state.books.books.find((b) => b.id === id)
  );

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Book not found</p>
      </div>
    );
  }

  const handleSubmit = (bookData: Omit<Book, 'id'>) => {
    dispatch(updateBook({ ...bookData, id: book.id }));
    navigate('/books');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Book</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <BookForm initialValues={book} onSubmit={handleSubmit} isEditing />
        </div>
      </div>
    </div>
  );
};