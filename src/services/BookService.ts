import Book from "../models/Book";
import * as repo from "../repositories/BookRepositoryPrisma";

export async function getBookByCategory(category: string): Promise<Book[]> {
  return repo.getBookByCategory(category);
}

export async function getAllBooks(): Promise<Book[]> {
    return repo.getAllBooks();
}

export async function getBookById(id: number): Promise<Book | null> {
    return repo.getBookById(id);
}

export async function addBook(newBook: Book): Promise<Book> {
    return repo.addBook(newBook);
}

export async function updateBook(id: number, updatedBook: Partial<Book>): Promise<Book> {
    return repo.updateBook(id, updatedBook);
}

export async function deleteBook(id: number): Promise<Book> {
    return repo.deleteBook(id);
}

