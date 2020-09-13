var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index');

var items =[
    {id: 1, name: 'product1'},
    {id: 2, name: 'product2'},
    {id: 3, name: 'product3'}
];


router.get('/', indexController.index);

router.get('/products', indexController.listOfProducts);

router.post('/new-product', indexController.addProducts);

module.exports = router;