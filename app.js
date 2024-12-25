const path = require(`path`);
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');
const expressLayouts = require('express-ejs-layouts');
const PORT = 3000;

const route = require(`./routes/productRoutes`);
dotenv.config();

app.use(cors());
app.use(cookieParser());

// import những thứ đã xuất ra từ /routes/index.js
// const route = require('./routes');

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

//tro toi file css
app.use(express.static(path.join(__dirname, `public`)));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

//epress-ejs-layout
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// //dòng code là bao gồm tất cả routes của các trang (ctrl+click vô chữ route để dẫn tới /routes/index.js)
// route(app);
app.use(route)

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
