import * as db  from '../db';
import type Book from '../models/Book';



export async function getBookByCategory(category: string): Promise<Book[]> {
   const result = await db.query('SELECT * FROM books WHERE category = $1', [category]);
   return result.rows as Book[];
}
export async function getAllBooks(): Promise<Book[]> {
   const result = await db.query('SELECT * FROM books');
   return result.rows as Book[];
}


export async function getBookById(id: number): Promise<Book | undefined> {
   const result = await db.query('SELECT * FROM books WHERE id = $1', [id]);
   const books = result.rows as Book[];
   return books.length > 0 ? books[0] : undefined;
}


export async function addBook(newBook: Book): Promise<Book> {
   const { category, title, description, author, isbn, publicationDate, pages } = newBook;
   const result = await db.query(
       'INSERT INTO books (category, title, description, author, isbn, publicationDate, pages) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
       [category, title, description, author, isbn, publicationDate, pages]
   );
   return result.rows[0] as Book;
}
