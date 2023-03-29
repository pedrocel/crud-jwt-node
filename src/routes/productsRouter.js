const express = require('express');
const productsController = require('../controllers/productsController');

const productRouter = express.Router();

productRouter.get('/products', productsController.getAll);

productRouter.post('/product', productsController.postCreate);


module.exports = productRouter;
