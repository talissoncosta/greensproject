const express = require('express');
const router = express.Router();
const productsController = require('../controller/products')

router.get('/products', productsController.get_all_products);
router.get('/products/:productId', productsController.get_product);
//router.post('/products', productsController.store_products);
router.put('/products/:productId', productsController.update_product);
router.delete('/products/:productId', productsController.remove_product);


module.exports = router;