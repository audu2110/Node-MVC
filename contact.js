const path = require('path');

const express = require('express');

const productsController = require('../controllers/product');

const router = express.Router();


router.get('/contactus', productsController.getContactus);


router.post('/contactus', productsController.postContactus);


module.exports = router;