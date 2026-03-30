export default interface Book {
  id?: number;
  category: string;
  title: string;
  description: string | null;
  author: string;
  isbn: string;
  publicationDate: string;
  pages: number;
  createdAt?: Date;
  updatedAt?: Date;
}
