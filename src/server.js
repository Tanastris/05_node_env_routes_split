require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const { port } = require('./config');

const PORT = process.env.PORT || 5000;

const pass = process.env.PASS;
const users = [
  {
    id: 1,
    name: 'Serbentautas',
    town: 'Vilnius',
    isDeleted: false,
  },
  {
    id: 2,
    name: 'Lenteja',
    town: 'Kaunas',
    isDeleted: false,
  },
  {
    id: 3,
    name: 'James',
    town: 'London',
    isDeleted: false,
  },
];
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

// Middleware
app.use(cors());
app.use(morgan('dev'));

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World');
});

// GET /api/users - grazina visus vartotojus
app.get('/api/users', (req, res) => {
  res.json(users);
});
// GET single user
app.get('/api/users/:userId', (req, res) => {
  const userId = +req.params.userId;
  const found = users.find((obj) => obj.id === userId);
  if (found === undefined) {
    res.status(404).json({
      msg: `user not found with id ${userId}`,
    });
    return;
  }
  res.json(found);
});

// BOOKS ROUTES
// GET /api/books - grazina visas knygas
app.get('/api/books', (req, res) => {
  res.json(books);
});

// GET /api/books/2 grazina knyga kurios id 2
app.get('/api/books/:bookId', (req, res) => {
  const found = books.find((bObj) => bObj.id === +req.params.bookId);
  if (found === undefined){
  res.status(404).json({
    msg: `user not found with id ${userId}`,
  });
  return;

  res.json(found);
});
// route error
// jei iki cia atejo kodas, reiskia tokio
// url kuriuo kreipiamasi nera
app.get('*', (req, res) => {
  res.status(404).json({
    msg: 'Path does not exist',
    url: req.path,
  });
});

app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`);
});
// app.listen(PORT);
