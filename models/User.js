const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        productId: {type: mongoose.Schema.Types.Objected, ref: 'Product', required: true},
        quantity: {type: Number, required: true} 
      }
    ]
  }
});

module.exports = mongoose.model('User', userSchema);
