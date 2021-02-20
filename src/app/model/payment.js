const mongoose = require("mongoose");

const payment = new mongoose.Schema({
    paymentId: {type: 'string', required: true},
    userEmail: {type: 'string', required: true}
})

module.exports = mongoose.model('payments', payment);