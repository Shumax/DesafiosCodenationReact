const { Router } = require('express');

const Products = require('./controllers/products');

const routes = Router();

routes.get('/catalog', Products.index);

module.exports = routes;
