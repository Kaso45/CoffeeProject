const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  priceCent: {
    type: Number,
    required: true
  },

  de: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);
