import express, {Request, Response} from 'express'
import { getAllBooks, getBookByCategory, getBookById, addBook } from "./services/BookService";
import bookRoutes from "./routes/BookRoute";
import type  Book from "./models/Book";

const app = express();
app.use(express.json());
const port = 3000;


app.use('/api/books', bookRoutes);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})







