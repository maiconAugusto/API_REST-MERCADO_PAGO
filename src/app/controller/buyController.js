const MP = require('mercadopago');

module.exports = {
    async create(req, res) {
        try {
            const items = req.body;
            const response = await MP.preferences.create(items)
            return res.redirect(response.body.init_point)
        } catch (error) {
            return res.status(401).json({data: error})
        }   
    }
}