const path = require(`path`);
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const PORT = 3000;

// import những thứ đã xuất ra từ /routes/index.js
const route = require('./routes');

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/product-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('MongoDB connection error: ', err);
});

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

//dòng code là bao gồm tất cả routes của các trang (ctrl+click vô chữ route để dẫn tới /routes/index.js)
route(app);

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
