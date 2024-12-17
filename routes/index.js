function route(app) {
  app.get('/', (req, res) => {
    res.render('layouts/home/homepage');
  });
}

module.exports = route;