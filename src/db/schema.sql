CREATE TABLE books (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  author TEXT,
  isbn TEXT,
  publicationDate DATE,
  pages INTEGER
);