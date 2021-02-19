const { Router } = require('express');
const routes = new Router
const buyController = require('../app/controller/buyController');

routes.post('/payment', buyController.create);

module.exports = routes;