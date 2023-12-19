const express = require('express');

const usersRouter = express.Router();

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

// Routes
// GET /api/users - grazina visus vartotojus
usersRouter.get('/api/users', (req, res) => {
  res.json(users);
});

usersRouter.get('/api/users/:userId', (req, res) => {
  const userId = +req.params.userId;
  // surasti obj su id === userId
  const found = users.find((uObj) => uObj.id === userId);
  // jei neradom
  if (found === undefined) {
    res.status(404).json({
      msg: `user not found with id ${userId}`,
    });
    return;
  }
  res.json(found);
});

module.exports = usersRouter;
