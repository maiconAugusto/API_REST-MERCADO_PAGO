const { Router } = require('express');
const routes = new Router
const buyController = require('../app/controller/buyController');
const notificationNPI = require('../app/controller/notificationIPNController');

routes.post('/payment', buyController.create);
routes.post('/notification-payment', notificationNPI.create);

module.exports = routes;