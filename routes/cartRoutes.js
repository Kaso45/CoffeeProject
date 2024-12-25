const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// them vo gio hang
router.post('/add-to-cart', cartController.addToCart);

// hien thi gio hang
router.get('/cart', cartController.cartSummary);

// xoa san pham khoi gio hang
router.get('/remove-from-cart', cartController.cartRemove);

module.exports = router;
