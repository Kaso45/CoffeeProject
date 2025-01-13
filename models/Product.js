const mongoose = require('mongoose');

const productDB = mongoose.connection.useDb('products');

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
  },
});

module.exports = productDB.model('Product', productSchema);
