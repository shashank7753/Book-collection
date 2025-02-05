import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../types/book';

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const index = state.books.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    toggleBookmark: (state, action: PayloadAction<string>) => {
      const book = state.books.find((book) => book.id === action.payload);
      if (book) {
        book.isBookmarked = !book.isBookmarked;
      }
    },
  },
});

export const { addBook, updateBook, deleteBook, toggleBookmark } = bookSlice.actions;
export default bookSlice.reducer;