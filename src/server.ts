import express, {Request, Response} from 'express'
import { getAllBooks, getBookByCategory, getBookById, addBook } from "./services/BookService";
import type  Book from "./models/Book";


const app = express();
app.use(express.json());
const port = 3000;


app.get("/books/:id", async (req: Request, res: Response) => {
   const id = parseInt(req.params.id);
   const book = await getBookById(id);
   if (book) {
       res.json(book);
   } else {
       res.status(404).send("Book not found");
   }
});


app.get("/books", async (req: Request, res: Response) => {
   if (req.query.category) {
       const category = req.query.category as string;
       const filteredBooks = await getBookByCategory(category);
       res.json(filteredBooks);
   } else {
       res.json(await getAllBooks());
   }
});


app.post("/books", async (req: Request, res: Response) => {
   const newBook: Book = req.body;
   res.json(await addBook(newBook));
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})







