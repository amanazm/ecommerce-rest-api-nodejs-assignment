const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const {signUp, logIn} = require('../controllers/user');

router.post('/register',auth, signUp);

router.post('/login',auth, logIn);


module.exports = router;