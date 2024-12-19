const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Lấy beans
router.get('/products/beans', productController.getBeans);
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
router.get('/products/beans/aroma' ,(req,res) => {
    res.render('layouts/products/beans/aroma')
})
router.get('/products/beans/bitdrew' ,(req,res) => {
    res.render('layouts/products/beans/bitdrew')
})
router.get('/products/beans/casa' ,(req,res) => {
    res.render('layouts/products/beans/casa')
})
router.get('/products/beans/koko' ,(req,res) => {
    res.render('layouts/products/beans/koko')
})
router.get('/products/beans/navy' ,(req,res) => {
    res.render('layouts/products/beans/navy')
})
router.get('/products/beans/zenbean' ,(req,res) => {
    res.render('layouts/products/beans/zenbean')
})
//// capsules
router.get('/products/capsules/buno' ,(req,res) => {
    res.render('layouts/products/capsules/buno')
})
router.get('/products/capsules/cosmo' ,(req,res) => {
    res.render('layouts/products/capsules/cosmo')
})
router.get('/products/capsules/espresso' ,(req,res) => {
    res.render('layouts/products/capsules/espresso')
})
router.get('/products/capsules/heartblend' ,(req,res) => {
    res.render('layouts/products/capsules/heartblend')
})
router.get('/products/capsules/pike' ,(req,res) => {
    res.render('layouts/products/capsules/pike')
})
router.get('/products/capsules/velvet' ,(req,res) => {
    res.render('layouts/products/capsules/velvet')
})
//// grounds
router.get('/products/grounds/aroma' ,(req,res) => {
    res.render('layouts/products/grounds/aroma')
})
router.get('/products/grounds/bitdrew' ,(req,res) => {
    res.render('layouts/products/grounds/bitdrew')
})
router.get('/products/grounds/casa' ,(req,res) => {
    res.render('layouts/products/grounds/casa')
})
router.get('/products/grounds/koko' ,(req,res) => {
    res.render('layouts/products/grounds/koko')
})
router.get('/products/grounds/navy' ,(req,res) => {
    res.render('layouts/products/grounds/navy')
})
router.get('/products/grounds/zenbean' ,(req,res) => {
    res.render('layouts/products/grounds/zenbean')
})


// home
router.get('/', (req,res) => {
    res.render('layouts/home/homepages')
})
// BESTseoler
router.get('/bestseller', (req,res) => {
    res.render('layouts/bestseller/bestseller')
})
// cart
router.get('/cart', (req,res) => {
    res.render('layouts/cart/cart')
})



// contact

/////// ADMIN
router.get('/admin',  productController.getProducts);
  


// Thêm sản phẩm mới
router.post('/admin/products', productController.addProduct);

// Cập nhật sản phẩm
router.put('/admin/editProducts/:id', productController.updateProduct);

// Xóa sản phẩm
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
