const { Router } = require('express')

const TestController = require('../controllers/TestController')

const routes = Router();

routes.get('/teste', TestController.index);


module.exports = routes;