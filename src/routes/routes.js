const { Router } = require('express')

const ProductController = require('../controllers/ProductController')

const routes = Router();

// filtro dos produtos, deve serm enviado por query params a data desejada ou o valor do produto ou sem nenhum parâmetro.
routes.get('/product/', ProductController.index);




module.exports = routes;