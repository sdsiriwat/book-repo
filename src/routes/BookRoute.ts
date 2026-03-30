import { Router, Request, Response } from 'express';
import { getAllBooks, getBookByCategory, getBookById, addBook, updateBook, deleteBook } from '../services/BookService';
import type Book from '../models/Book';

const router = Router();


router.get('/', async (req: Request, res: Response) => {
    try {
        if (req.query.category) {
            const category = req.query.category as string;
            const books = await getBookByCategory(category);
            res.json(books);
        } else {
            const books = await getAllBooks();
            res.json(books);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const book = await getBookById(id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch book' });
    }
});


router.post('/', async (req: Request, res: Response) => {
    try {
        const newBook: Book = req.body;
        const book = await addBook(newBook);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add book' });
    }
});


router.put('/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const updatedBook: Partial<Book> = req.body;
        const book = await updateBook(id, updatedBook);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update book' });
    }
});


router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const book = await deleteBook(id);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete book' });
    }
});

export default router;
