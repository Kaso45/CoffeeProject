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

  //products
  // app.use('/products', productsRouter);

  app.get(`/products`, (req,res) => {
    res.render(`layouts/products/products-categories/products.ejs`);
  })

    app.get(`/`)

  //profile
  app.get(`/profile`, (req, res) => {
    res.render(`layouts/user/profile/profile`)
  });

  //gio hang
  // app.get('/cart', (req,res) => {
  //   res.render('layouts/cart/cart.ejs');
  // });

  //trang pha che
  app.get(`/brewguides`, (req,res) => {
    res.render(`layouts/brewguide/brewguide.ejs`)
  });
}

module.exports = route;