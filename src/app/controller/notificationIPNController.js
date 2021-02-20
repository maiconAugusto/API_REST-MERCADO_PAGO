const MP = require('mercadopago');

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
        }, 20000)
        return res.status(200);
    }
}