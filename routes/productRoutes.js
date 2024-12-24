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
router.get('/products/beans/:name', productController.getDetails);

// grounds
router.get('/products/grounds/:name', productController.getDetails);

//capsules
router.get('/products/capsules/:name', productController.getDetails);


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

// brew guides
router.get(`/brewguides`, (req,res) => {
    res.render(`layouts/brewguide/brewguide.ejs`)
});




/////// ADMIN
router.get(`/admin`,  productController.getProducts);
  

// Hiển thị form thêm sản phẩm
router.get('/admin/add', (req, res) => {
    res.render('layouts/admin/add');
  });
  
  // Thêm sản phẩm mới
  router.post('/admin/products', productController.addProduct);



// Xóa sản phẩm
router.post('/admin/delete-product/:id', productController.deleteProduct);

// Hiển thị form chỉnh sửa sản phẩm
router.get('/admin/edit/:id', productController.getEditProduct);

// Xử lý cập nhật sản phẩm
router.post('/admin/edit/:id', productController.postEditProduct);

module.exports=router;
