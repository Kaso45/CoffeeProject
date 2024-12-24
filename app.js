const path = require(`path`);
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const PORT = 3000;

const route = require(`./routes/productRoutes`);

// import những thứ đã xuất ra từ /routes/index.js
// const route = require('./routes');

// Kết nối MongoDB
mongoose.connect('mongodb+srv://project-management:12345nhom4@cluster0.kgyvd.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0', {
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

// //dòng code là bao gồm tất cả routes của các trang (ctrl+click vô chữ route để dẫn tới /routes/index.js)
// route(app);
app.use(route)

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
