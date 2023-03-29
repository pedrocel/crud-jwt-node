const express = require('express');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const authRouter = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(usersRouter);
app.use('/auth', authRouter);
app.use(productsRouter);

module.exports = app;