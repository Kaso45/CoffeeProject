const User = require('../models/User')
const Product = require('../models/Product')

exports.addToCart = async (req,res) => {
  try {
    const {productId} = req.body;
    const user = await User.findById(req.session.user._id);

    const cartProductIndex = user.cart.items.findIndex(cartProduct => cartProduct.productId.toString() === productId);
    if (cartProductIndex >= 0) {
      user.cart.items[cartProductIndex].quantity += 1;
    } else {
      user.cart.items.push({ productId, quantity: 1 });
    }

    await user.save();
  } catch {
    console.log('failed')
  }
}

exports.cartSummary = async (req,res) => {
  const user = await User.findById(req.session.user._id).populate('cart.items.productId')
  res.render('layouts/cart/cart.ejs', { cart: user.cart });
}

exports.cartRemove = async (req,res) => {
  const { productId } = req.body;
  const user = await User.findById(req.session.user._id);
  user.cart.items = user.cart.items.filter(item => item.productId.toString() !== productId);
  await user.save();
  res.redirect('/cart');
}