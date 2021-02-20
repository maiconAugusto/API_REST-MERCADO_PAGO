const MP = require('mercadopago');
const buyController = require('./buyController');

module.exports = {
    create(req, res) {
        const {id} = req.query;
        setTimeout(async() => {
            let filter = {
                "order.id": id
            }

            const response = await MP.payment.search({
                qs: filter
            })
            if (response.body.results[0] !== undefined) {
                const data = { 
                    status: response.body.results[0].status,
                    paymentId: response.body.results[0].external_reference
                }
                req.body = data;
                buyController.update(req, res);
            }
        }, 20000)
        return res.status(200);
    }
}