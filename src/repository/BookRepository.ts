import Book from "../models/Book";


const books: Book[] = [
  {
    id: 1,
    category: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel of the Jazz Age",
    author: "F. Scott Fitzgerald",
    isbn: "978-0743273565",
    publicationDate: "1925-04-10",
    pages: 180
  },
  {
    id: 2,
    category: "Fiction",
    title: "To Kill a Mockingbird",
    description: "A gripping tale of racial injustice",
    author: "Harper Lee",
    isbn: "978-0061120084",
    publicationDate: "1960-07-11",
    pages: 324
  },
  {
    id: 3,
    category: "Science",
    title: "A Brief History of Time",
    description: "A journey through space and time",
    author: "Stephen Hawking",
    isbn: "978-0553380163",
    publicationDate: "1988-04-01",
    pages: 256
  },
  {
    id: 4,
    category: "Fiction",
    title: "1984",
    description: "A dystopian social science fiction novel",
    author: "George Orwell",
    isbn: "978-0451524935",
    publicationDate: "1949-06-08",
    pages: 328
  }
];

export default books;
