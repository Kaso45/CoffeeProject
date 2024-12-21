const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const {formatCurrency} = require(`../public/js/utils/money`)
const {generateStarRating} = require(`../public/js/utils/stars`);

// Lấy beans
router.get('/products/beans', productController.getBeans);
// Lấy grounds
router.get('/products/grounds', productController.getGrounds);
// Lấy capsules
router.get('/products/capsules', productController.getCapsules);

// 3 types
router.get('/products', (req,res) => {
    res.render('layouts/products/products-categories/products.ejs')
})

//////// từng sản phẩm 
//// beans
router.get('/products/beans/aromacraft' ,(req,res) => {
    res.render('layouts/products/beans/aroma')
})
router.get('/products/beans/bitbrew' ,(req,res) => {
    res.render('layouts/products/beans/bitbrew')
})
router.get('/products/beans/casa' ,(req,res) => {
    res.render('layouts/products/beans/casa')
})
router.get('/products/beans/koko' ,(req,res) => {
    res.render('layouts/products/beans/koko')
})
router.get('/products/beans/navybrew' ,(req,res) => {
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
router.get('/products/grounds/aromacraft-g' ,(req,res) => {
    res.render('layouts/products/grounds/aroma-g')
})
router.get('/products/grounds/bitbrew-g' ,(req,res) => {
    res.render('layouts/products/grounds/bitbrew-g')
})
router.get('/products/grounds/casa-g' ,(req,res) => {
    res.render('layouts/products/grounds/casa-g')
})
router.get('/products/grounds/koko-g' ,(req,res) => {
    res.render('layouts/products/grounds/koko-g')
})
router.get('/products/grounds/navybrew-g' ,(req,res) => {
    res.render('layouts/products/grounds/navy-g')
})
router.get('/products/grounds/zenbean-g' ,(req,res) => {
    res.render('layouts/products/grounds/zenbean-g')
})





// home
router.get('/', (req,res) => {
    res.render('layouts/home/homepage.ejs', { formatCurrency, generateStarRating })
})

// cart
router.get('/cart', (req,res) => {
    res.render('layouts/cart/cart')
})

// contact
router.get('/contact', (req,res) => {
    res.render('layouts/contact/contact');
});

// profile
router.get(`/profile`, (req,res) => {
    res.render(`layouts/user/profile/profile.ejs`);
});

// login
router.get(`/login`, (req,res) => {
    res.render(`layouts/user/login/login.ejs`);
});

//register
router.get(`/register`, (req,res) => {
    res.render(`layouts/user/register/register.ejs`);
});





/////// ADMIN
router.get(`/admin`,  productController.getProducts);
  

// Hiển thị form thêm sản phẩm
router.get('/admin/add', (req, res) => {
    res.render('layouts/admin/add');
  });
  
  // Thêm sản phẩm mới
  router.post('/admin/products', productController.addProduct);

// // Cập nhật sản phẩm
// router.put('/admin/editProducts/:id', productController.updateProduct);

// Xóa sản phẩm
router.post('/admin/delete-product/:id', productController.deleteProduct);

// Hiển thị form chỉnh sửa sản phẩm
router.get('/admin/edit/:id', productController.getEditProduct);

// Xử lý cập nhật sản phẩm
router.post('/admin/edit/:id', productController.postEditProduct);

module.exports=router;
