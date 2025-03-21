export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  coverUrl?: string;
  isBookmarked?: boolean;
}