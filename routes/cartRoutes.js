const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// lấy giỏ
router.get('/cart', cartController.getCart);

//thêm vô
router.post('/cart/add', cartController.addToCart);

// xoá
router.post('/cart/remove', cartController.cartRemove);

module.exports = router;
