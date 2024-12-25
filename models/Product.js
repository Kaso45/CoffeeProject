const mongoose = require('mongoose');

// kết lối riêng tới product dtb
const productsDB = mongoose.connection.useDb('products')


const productSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  rating: {
    type: Number,
  },
  priceCent: {
    type: Number,
  },

  de: {
    type: String,
  }
});

module.exports = productsDB.model('Product', productSchema);
