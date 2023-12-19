require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const { port } = require('./config');

const PORT = port || 5000;

// Middleware
app.use(cors());
app.use(morgan('dev'));

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World');
});
// importuojam userRouter
const userRouter = require('./routes/usersRouters');
const booksRouter = require('./routes/bookRouters');

// panaudoju users routeri
app.use('/', userRouter);
app.use('/', booksRouter);

// route error 404
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
