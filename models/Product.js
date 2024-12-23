const mongoose = require('mongoose');

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

module.exports = mongoose.model('Product', productSchema);
