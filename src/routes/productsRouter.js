const express = require('express');
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/auth');

const productRouter = express.Router();

productRouter.get('/products', authMiddleware, productsController.getAll);

productRouter.post('/product', authMiddleware, productsController.postCreate);

module.exports = productRouter;