const express = require('express');
const router = express.Router();

const {listOfSeller,sellerCatalog,createOrder} = require('../controllers/buyer');

router.get('/list-of-sellers', listOfSeller);

router.get('/seller-catalog/:sellerId', sellerCatalog);

router.post('/create-order', createOrder);


module.exports = router;