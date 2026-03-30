"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_1 = require("../src/lib/prisma");
const bookData = [
    {
        category: 'Fiction',
        title: 'The Great Gatsby',
        description: 'A classic novel of the Jazz Age',
        author: 'F. Scott Fitzgerald',
        isbn: '978-0743273565',
        publicationDate: '1925-04-10',
        pages: 180,
    },
    {
        category: 'Fiction',
        title: 'To Kill a Mockingbird',
        description: 'A gripping tale of racial injustice',
        author: 'Harper Lee',
        isbn: '978-0061120084',
        publicationDate: '1960-07-11',
        pages: 324,
    },
    {
        category: 'Science',
        title: 'A Brief History of Time',
        description: 'A journey through space and time',
        author: 'Stephen Hawking',
        isbn: '978-0553380163',
        publicationDate: '1988-04-01',
        pages: 256,
    },
    {
        category: 'Fiction',
        title: '1984',
        description: 'A dystopian social science fiction novel',
        author: 'George Orwell',
        isbn: '978-0451524935',
        publicationDate: '1949-06-08',
        pages: 328,
    },
    {
        category: 'Self-Help',
        title: 'Thinking, Fast and Slow',
        description: 'About system thinking and decision making',
        author: 'Daniel Kahneman',
        isbn: '978-0374533557',
        publicationDate: '2011-10-25',
        pages: 542,
    },
    {
        category: 'History',
        title: 'Sapiens',
        description: 'A brief history of humankind',
        author: 'Yuval Noah Harari',
        isbn: '978-0062316097',
        publicationDate: '2014-09-30',
        pages: 468,
    },
];
async function main() {
    try {
        console.log('Seeding books...');
        for (const book of bookData) {
            await prisma_1.prisma.book.create({
                data: book,
            });
            console.log(`Created book: ${book.title}`);
        }
        console.log('Seeding completed successfully!');
    }
    catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
    finally {
        await prisma_1.prisma.$disconnect();
    }
}
main();
