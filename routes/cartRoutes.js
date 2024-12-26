const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');



// // them vo gio hang
// router.post('cart/add-to-cart', cartController.addToCart);
// // hien thi gio hang
// router.get('cart/:userId', cartController.getCart);
// // xoa san pham khoi gio hang
// router.delete('cart/remove-from-cart', cartController.cartRemove);
// // update san pham
// router.put('cart/update-quantity', cartController.updateProductQuantity);
// // tang so luong san pham
// router.put('cart/increase-quantity', cartController.increaseQuantity)
// //giam so luong san pham
// router.put("/cart/decrease-quantity", cartController.decreaseQuantity);


// lấy giỏ 
// router.get('/cart', cartController.getCart)
router.get("/cart", cartController.getCart) 
//thêm vô
router.post('/cart/add', cartController.addToCart)

// xoá 
router.post('/cart/remove', cartController.cartRemove)

module.exports = router;
