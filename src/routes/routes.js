const { Router } = require('express')

const ProductController = require('../controllers/ProductController')
const CategoryController = require('../controllers/CategoryController')

const routes = Router();

// filtro dos produtos, deve serm enviado por query params a data desejada ou o valor do produto ou sem nenhum parâmetro.
routes.get('/product/', ProductController.find);

// rota de criação de um novo produto.
routes.post('/product/', ProductController.create);

// rota para buscar todas as categorias cadastradas para uma determinada companhia.
routes.get('/category', CategoryController.find)

// rota para cadastrar uma nova categoria para uma determinada companhia.
routes.post('/category', CategoryController.create)



module.exports = routes;