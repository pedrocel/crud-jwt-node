const express = require('express');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const authRouter = require('./routes/auth');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use('/auth', authRouter);
app.use('/api', usersRouter);
app.use('/api', productsRouter);
module.exports = app;