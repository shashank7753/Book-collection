import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { BookCard } from '../components/BookCard';
import { BookMarked } from 'lucide-react';

export const BookmarksList: React.FC = () => {
  const books = useSelector((state: RootState) => 
    state.books.books.filter(book => book.isBookmarked)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <BookMarked className="h-8 w-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Bookmarked Books</h1>
        </div>

        {books.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No bookmarked books yet. Start bookmarking your favorite books!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};