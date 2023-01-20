const express = require('express');
const router = express.Router();

const usersRoute = require('./routes/user');
const buyersRoute = require('./routes/buyers');
const sellersRoute = require('./routes/sellers');
const {generateData} = require('./controllers/generateProductData');

router.use('/auth', usersRoute);
router.use('/buyer', buyersRoute);
router.use('/seller', sellersRoute);
router.get('/data', generateData);

module.exports = router;