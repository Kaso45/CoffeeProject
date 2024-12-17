const productsRouter = require(`./productRoutes`);

// hàm route chứa route của tất cả các trang
function route(app) {
  //homepage
  app.get('/', (req,res) => {
    res.render('layouts/home/homepage');
  });

  //contact
  app.get('/contact', (req,res) => {
    res.render('layouts/contact/contact');
  });

  //////// Do trang products sẽ chứa nhiều đường dẫn tới các đường dẫn con (VD: localhost:3000/products/beans/aromacraft)
  //////// Vì vậy phải tạo một file riêng là productsRoutes.js 
  //products
  app.use('/products', productsRouter); ///// khi mà thanh tìm kiếm trỏ tới /products thì sẽ sài biến productsRouter được gán ở trên

  //profile
  app.get(`/profile`, (req, res) => {
    res.render(`layouts/user/profile/profile`)
  });

  //gio hang
  app.get('/cart', (req,res) => {
    res.render('layouts/cart/cart.ejs');
  });

  //trang pha che
  app.get(`/brewguides`, (req,res) => {
    res.render(`layouts/brewguide/brewguide.ejs`)
  });
}

module.exports = route;