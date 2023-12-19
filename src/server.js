const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const PORT = 3000;

// Middleware

app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
