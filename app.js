const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');
const app = express();
const productRoutes = require('./routes/productRoutes');
// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/product-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('MongoDB connection error: ', err);
});



// app.use(cors());  // Cho phép frontend ở domain khác gửi request
// app.use(express.json());  // Parse JSON body

app.use(cors({
  origin: 'http://127.0.0.1:5500/view/layouts/admin/admin.html', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


// Sử dụng routes API
app.use('/api', productRoutes);




// Khởi chạy server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
