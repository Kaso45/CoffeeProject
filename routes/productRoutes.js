const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Lấy beans
router.get('/products/beans', productController.getProducts);
// Lấy grounds
router.get('/products/grounds', productController.getGrounds);
// Lấy capsules
router.get('/products/capsules', productController.getCapsules);

// 3 types
router.get('/products/productCategory', (res,req) => {
    res.render('layouts/products/products category')
})

//////// từng sản phẩm 
//// beans
router.get('/products/beans/aroma' ,(res,req) => {
    res.render('layouts/products/beans/aroma')
})
router.get('/products/beans/bitdrew' ,(res,req) => {
    res.render('layouts/products/beans/bitdrew')
})
router.get('/products/beans/casa' ,(res,req) => {
    res.render('layouts/products/beans/casa')
})
router.get('/products/beans/koko' ,(res,req) => {
    res.render('layouts/products/beans/koko')
})
router.get('/products/beans/navy' ,(res,req) => {
    res.render('layouts/products/beans/navy')
})
router.get('/products/beans/zenbean' ,(res,req) => {
    res.render('layouts/products/beans/zenbean')
})
//// capsules
router.get('/products/capsules/buno' ,(res,req) => {
    res.render('layouts/products/capsules/buno')
})
router.get('/products/capsules/cosmo' ,(res,req) => {
    res.render('layouts/products/capsules/cosmo')
})
router.get('/products/capsules/espresso' ,(res,req) => {
    res.render('layouts/products/capsules/espresso')
})
router.get('/products/capsules/heartblend' ,(res,req) => {
    res.render('layouts/products/capsules/heartblend')
})
router.get('/products/capsules/pike' ,(res,req) => {
    res.render('layouts/products/capsules/pike')
})
router.get('/products/capsules/velvet' ,(res,req) => {
    res.render('layouts/products/capsules/velvet')
})
//// grounds
router.get('/products/grounds/aroma' ,(res,req) => {
    res.render('layouts/products/grounds/aroma')
})
router.get('/products/grounds/bitdrew' ,(res,req) => {
    res.render('layouts/products/grounds/bitdrew')
})
router.get('/products/grounds/casa' ,(res,req) => {
    res.render('layouts/products/grounds/casa')
})
router.get('/products/grounds/koko' ,(res,req) => {
    res.render('layouts/products/grounds/koko')
})
router.get('/products/grounds/navy' ,(res,req) => {
    res.render('layouts/products/grounds/navy')
})
router.get('/products/grounds/zenbean' ,(res,req) => {
    res.render('layouts/products/grounds/zenbean')
})


// home
router.get('/', (res,req) => {
    res.render('layouts/home/homepages')
})
// BESTseoler
router.get('/bestseller', (res,req) => {
    res.render('layouts/bestseller/bestseller')
})
// cart
router.get('/cart', (res,req) => {
    res.render('layouts/cart/cart')
})



// contact
router.get('/contact', (res,req) => {
    res.render('layouts/contact/contact')
})

/////// ADMIN
// Thêm sản phẩm mới
router.post('/admin/products', productController.addProduct);

// Cập nhật sản phẩm
router.put('/admin/products/:id', productController.updateProduct);

// Xóa sản phẩm
router.delete('/admin/products/:id', productController.deleteProduct);

module.exports = router;
