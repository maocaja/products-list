var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index');

router.get('/', indexController.index);

router.get('/products', indexController.listOfProducts);

router.post('/new-product', indexController.addProducts);

module.exports = router;