const express = require('express');

const booksRouter = express.Router();
// data
const books = [
  {
    id: 1,
    title: 'Book 1',
    year: 2021,
    isPublished: true,
    category: 'Fiction',
  },
  {
    id: 2,
    title: 'Book 2',
    year: 2022,
    isPublished: false,
    category: 'Mystery',
  },
  {
    id: 3,
    title: 'Book 3',
    year: 2020,
    isPublished: true,
    category: 'Fantasy',
  },
  {
    id: 4,
    title: 'Book 4',
    year: 2019,
    isPublished: true,
    category: 'Science Fiction',
  },
  {
    id: 5,
    title: 'Book 5',
    year: 2023,
    isPublished: false,
    category: 'Thriller',
  },
];
// routes
// BOOKS ROUTES
// GET /api/books - grazina visas knygas
booksRouter.get('/api/books', (req, res) => {
  res.json(books);
});

// GET /api/books/2 grazina knyga kurios id 2
booksRouter.get('/api/books/:bookId', (req, res) => {
  const bookId = +req.params.bookId;
  // surasti obj su id === bookId
  const found = books.find((bObj) => bObj.id === bookId);
  // jei neradom
  if (found === undefined) {
    res.status(404).json({
      msg: `book not found with id ${bookId}`,
    });
    return;
  }
  res.json(found);
});

// POST /api/books

module.exports = booksRouter;
