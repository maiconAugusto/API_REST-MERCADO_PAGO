const express = require('express');
const routes = require('../routes/index');
const DB = require('../database/index');
const cors = require('cors');
const mercado_pago = require('mercadopago');
require('dotenv').config()

class Server {
    constructor() {
        this.server = express();
        this.database();
        this.paymentMP();
        this.middleware();
        this.route();
    }
    database() {
        DB.then(() => {
            console.log('database connection');
        })
        .catch((error) => {
            console.log(error);
        })
    }
    paymentMP() {
        mercado_pago.configure({
            sandbox: true,
            access_token: process.env.ACCESS_KEY
        })
    }
    middleware() {
        this.server.use(cors());
        this.server.use(express.json())
        this.server.use(express.urlencoded({ extended: true }))
    }
    route() {
        this.server.use(routes);
    }
}
module.exports = new Server().server;