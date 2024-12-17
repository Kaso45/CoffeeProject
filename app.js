const path = require(`path`);
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const route = require('./routes');
const PORT = 3000;

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/product-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('MongoDB connection error: ', err);
});

//chạy file csscss
app.use(express.static(path.join(__dirname, `public`)));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

//khởi tạo routes
route(app);

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
