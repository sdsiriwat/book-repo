import { prisma } from '../lib/prisma';
import type Book from '../models/Book';

export function getBookByCategory(category: string) {
    return prisma.book.findMany({
        where: { category },
    });
}

export function getAllBooks() {
    return prisma.book.findMany();
}

export function getBookById(id: number) {
    return prisma.book.findUnique({
        where: { id },
    });
}

export function addBook(newBook: Book) {
    return prisma.book.create({
        data: {
            category: newBook.category,
            title: newBook.title,
            description: newBook.description,
            author: newBook.author,
            isbn: newBook.isbn,
            publicationDate: newBook.publicationDate,
            pages: newBook.pages,
        }
    });
}

export function updateBook(id: number, updatedBook: Partial<Book>) {
    return prisma.book.update({
        where: { id },
        data: updatedBook,
    });
}

export function deleteBook(id: number) {
    return prisma.book.delete({
        where: { id },
    });
}
