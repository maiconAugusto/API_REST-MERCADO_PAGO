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
            console.log(response.body.results[0])
            if (response.body.results[0] !== undefined) {
                const data = { 
                    status: response.body.results[0].status,
                    paymentId: id
                }
                req.body = data;
                buyController.update(req, res);
            }
        }, 20000)
        return res.status(200);
    }
}