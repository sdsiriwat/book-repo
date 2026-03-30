import express, {Request, Response} from 'express'
import cors, {CorsOptions} from 'cors';
import { getAllBooks, getBookByCategory, getBookById, addBook } from "./services/BookService";
import bookRoutes from "./routes/BookRoute";
import uploadRoutes from "./routes/UploadFileRoutes";
import type  Book from "./models/Book";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;


const corsOptions: CorsOptions = {
   origin: ['http://localhost:5051', 
            'http://127.0.0.1:5500', 
            'http://localhost:5500'],
   methods: ['GET','POST','OPTIONS','PUT','DELETE'],
   allowedHeaders: ['Content-Type','Authorization'],
};

app.use(cors(corsOptions));

app.use('/api/books', bookRoutes);
app.use('/api', uploadRoutes);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})







