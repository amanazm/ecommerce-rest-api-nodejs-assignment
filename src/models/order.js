const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderId : {type : Number, unique: true },
    sellerId : {type : Number },
    product: { type: Array },
    // quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model('Order', orderSchema);