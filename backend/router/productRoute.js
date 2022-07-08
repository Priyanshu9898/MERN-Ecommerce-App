const express = require('express');

// Importing Controllers
const { getProducts, createProduct, updateProduct, deleteProduct, productDetail } = require('../controllers/productController');

// Router
const router = express.Router();


// Path
router.route('/products').get(getProducts);

router.route('/products/new').post(createProduct);

router.route('/products/:id').put(updateProduct).delete(deleteProduct).get(productDetail);


module.exports = router;