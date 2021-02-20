const MP = require('mercadopago');
const payment = require('../model/payment');

module.exports = {
    async create(req, res) {
        try {
            const items = req.body;
            const response = await MP.preferences.create(items);

            await payment({paymentId: items.external_reference, userEmail: items.payer.email}).save();

            return res.redirect(response.body.init_point)
        } catch (error) {
            return res.status(401).json({data: error})
        }   
    }
}