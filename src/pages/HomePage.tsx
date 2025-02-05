import React from 'react';
import { Link } from 'react-router-dom';
import { Library } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-2xl">
        <div className="flex justify-center mb-6">
          <Library className="w-16 h-16 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Your Book Collection
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your personal library with ease. Add new books, keep track of your
          collection, and organize your reading journey.
        </p>
        <div className="space-x-4">
          <Link
            to="/books"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View Collection
          </Link>
          <Link
            to="/add"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Add New Book
          </Link>
        </div>
      </div>
    </div>
  );
};