const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 6,
    maxlength: 20,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cart: {
    items: [
      {
        productId: {type: mongoose.Schema.Types.Objected, ref: 'Product', required: true},
        quantity: {type: Number, required: true} 
      }
    ]
  }
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);
});

module.exports = mongoose.model('User', userSchema);
