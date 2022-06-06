const { Router } = require('express')

const ProductController = require('../controllers/ProductController')
const CategoryController = require('../controllers/CategoryController')
const BeverageController = require('../controllers/BeverageController')
const CustomerController = require('../controllers/CustomerController')
const AddressController = require('../controllers/AddressController')
const OrderController = require('../controllers/OrderController')

const routes = Router();

// filtro dos produtos, deve serm enviado por query params a data desejada ou o valor do produto ou sem nenhum parâmetro.
routes.get('/product', ProductController.find);

// rota de criação de um novo produto.
routes.post('/product', ProductController.create);

// rota para buscar todas as categorias cadastradas para uma determinada companhia.
routes.get('/category', CategoryController.find)

// rota para cadastrar uma nova categoria para uma determinada companhia.
routes.post('/category', CategoryController.create)

// rota para buscar todas as bebidas cadastradas para uma determinada companhia. Podendo filtrar pelo nome de uma bebida ou sua categoria
routes.get('/beverage', BeverageController.find)

// rota para cadastrar uma nova bebida para uma determinada companhia.
routes.post('/beverage', BeverageController.create)

// rota para buscar todas os clientes cadastrados para uma determinada companhia.
routes.get('/customer', CustomerController.find)

// rota para cadastrar um novo cliente para uma determinada companhia.
routes.post('/customer', CustomerController.create)

// rota para cadastrar um novo endereço a ser vinculado a um cliente
routes.post('/address', AddressController.create)

// rota para buscar todas os pedidos cadastrados para uma determinada companhia.
routes.get('/order', OrderController.find)

// rota para cadastrar um novo pedido para uma determinada companhia.
routes.post('/order', OrderController.create)

module.exports = routes;