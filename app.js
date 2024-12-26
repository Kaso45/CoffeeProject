const path = require(`path`);
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session')
const PORT = 3000;

// import những thứ đã xuất ra từ /routes/index.js
// const route = require('./routes');

// import
const route = require('./routes/index')
const users = require('./routes/auth')
const products = require(`./routes/productRoutes`);
const cart = require('./routes/cartRoutes')
dotenv.config();

app.use(cors());
app.use(cookieParser());

//tro toi file css
app.use(express.static(path.join(__dirname, `public`)));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

// session middleware
app.use(session({
  secret: 'coffee-project',
  resave: false,
  saveUninitialized: false
}))

app.use((req,res,next) => {
  res.locals.user = req.session.user
  next();
})

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


//epress-ejs-layout
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// //dòng code là bao gồm tất cả routes của các trang (ctrl+click vô chữ route để dẫn tới /routes/index.js)
// route(app);
app.use(users)
app.use(products)
app.use(route)
app.use(cart)

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});