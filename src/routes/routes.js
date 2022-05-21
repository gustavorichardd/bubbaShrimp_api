const { Router } = require('express')

const TestController = require('../controllers/TestController')

const routes = Router();

routes.get('/', TestController.index);


module.exports = routes;