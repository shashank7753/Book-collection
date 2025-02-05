import React from 'react';
import { Book } from '../types/book';
import { Book as BookIcon, Edit, Trash2, Bookmark, BookmarkCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleBookmark, deleteBook } from '../store/bookSlice';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      dispatch(deleteBook(book.id));
    }
  };

  const handleToggleBookmark = () => {
    dispatch(toggleBookmark(book.id));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h3>
          <p className="text-gray-600 mb-1">By {book.author}</p>
          <p className="text-sm text-gray-500 mb-3">Genre: {book.genre}</p>
          <p className="text-gray-700 line-clamp-3 mb-4">{book.description}</p>
        </div>
        {book.coverUrl && (
          <img
            src={book.coverUrl}
            alt={`Cover of ${book.title}`}
            className="w-24 h-36 object-cover rounded-md ml-4"
          />
        )}
        {!book.coverUrl && (
          <div className="w-24 h-36 bg-gray-200 rounded-md ml-4 flex items-center justify-center">
            <BookIcon className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={handleToggleBookmark}
          className={`p-2 rounded-full transition-colors ${
            book.isBookmarked
              ? 'text-blue-600 hover:bg-blue-50'
              : 'text-gray-400 hover:bg-gray-50'
          }`}
          title={book.isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          {book.isBookmarked ? (
            <BookmarkCheck className="w-5 h-5" />
          ) : (
            <Bookmark className="w-5 h-5" />
          )}
        </button>
        <Link
          to={`/edit/${book.id}`}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
        >
          <Edit className="w-5 h-5" />
        </Link>
        <button
          onClick={handleDelete}
          className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};