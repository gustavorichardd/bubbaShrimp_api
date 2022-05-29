const { Router } = require('express')
const multer = require("multer");
const upload = multer({ dest: 'uploads/' })

const ProductController = require('../controllers/ProductController')

const routes = Router();

// filtro dos produtos, deve serm enviado por query params a data desejada ou o valor do produto ou sem nenhum parâmetro.
routes.get('/product/', ProductController.find);

// rota de criação de um novo produto.
routes.post('/product/', upload.single('file'), ProductController.create);



module.exports = routes;