const express = require('express');
const router = express.Router();

const {createCatalog,listOfOrder} = require('../controllers/seller');

router.post('/create-catalog', createCatalog);

router.get('/orders', listOfOrder);



module.exports = router;