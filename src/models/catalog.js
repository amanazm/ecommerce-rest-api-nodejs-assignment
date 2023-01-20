const mongoose = require('mongoose');

const catalogSchema = mongoose.Schema({
    sellerId : {type : Number,unique: true },
    items: { type: Array},
})

module.exports = mongoose.model('Catalog', catalogSchema);