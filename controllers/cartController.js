const User = require('../models/User');
const Cart = require('../models/User');
const Product = require('../models/Product');
const { formatCurrency } = require(`../public/js/utils/money`);

exports.getCart = async (req, res) => {
  const userId = req.session.user;

  try {
    const cart = await Cart.findOne({ userId }).populate('products.productId');
    console.log('Found cart:', cart);

    if (!cart || cart.products.length === 0) {
      return res.render('layouts/cart/cart.ejs', {
        cart: { products: [] },
        formatCurrency,
      });
    }

    const cartItems = cart.products.map((item) => ({
      id: item.productId._id,
      name: item.productId.name,
      image: item.productId.image,
      priceCent: item.productId.priceCent,
      quantity: item.quantity,
    }));

    res.render('layouts/cart/cart.ejs', {
      cart: { products: cartItems },
      formatCurrency,
    });
  } catch (err) {
    console.error('Cart retrieval error:', err);
    res.status(500).json({ message: err.message });
  }
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.session.user;

  if (!userId) {
    return res
      .status(401)
      .json({ success: false, message: 'User not logged in' });
  }

  try {
    // Find or create cart for user
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, products: [] });
    } else if (!Array.isArray(cart.products)) {
      cart.products = [];
    }

    // Check if product already exists in cart
    const existingProduct = cart.products.find(
      (item) => item.productId.toString() === productId
    );

    if (existingProduct) {
      // Update quantity if product exists
      existingProduct.quantity += parseInt(quantity, 10);
    } else {
      // Add new product if it doesn't exist
      cart.products.push({
        productId,
        quantity: parseInt(quantity, 10),
      });
    }

    await cart.save();
    res.redirect('back');
  } catch (err) {
    console.error('Error adding to cart:', err);
    res.status(500).json({ message: err.message });
  }
};

exports.cartRemove = async (req, res) => {
  const { productId } = req.body;
  const userId = req.session.userId;
  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      res.status(404).json({ message: 'cant find product' });
    }
    cart.products = cart.products.filter(
      (item) => item.productId && item.productId.toString() !== productId
    );
    await cart.save();
    res.redirect('/cartss');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// exports.updateProductQuantity = async (req, res) => {
//   const { userId, productId, quantity } = req.body;
//   try {
//     let cart = await Cart.findOne({ userId });
//     if (!cart) {
//       res.status(404).json({ message: "Cant find cart" });
//     }
//     const product = cart.products.find(
//       (item) => item.productId.toString() === productId
//     );

//     if (!product) {
//       res.status(404).json({ message: "Cant find product" });
//     }
//     product.quantity = quantity;
//     await cart.save();
//     res.status(200).json({ cart });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.increaseQuantity = async (req, res) => {
//   const { userId, productId } = req.body;
//   try {
//     let cart = await Cart.findOne({ userId });
//     if (!cart) {
//       res.status(404).json({ message: "cant find cart" });
//     }
//     const product = cart.products.find(
//       (item) => item.productId.toString() === productId
//     );
//     if (!product) {
//       return res.status(404).json({ message: "Không tìm thấy sản phẩm trong giỏ hàng !" });
//     }
//     product.quantity++;

//     await cart.save();
//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.decreaseQuantity = async (req, res) => {
//   const { userId, productId } = req.body;
//   try {
//       let cart = await Cart.findOne({ userId });

//       if (!cart) {
//           return res.status(404).json({ message: "Không tìm thấy giỏ hàng !" });
//       }

//       const product = cart.products.find((item) =>
//         item.productId.toString() === productId
//       );
//       if (!product) {
//           return res.status(404).json({ message: "Không tìm thấy sản phẩm trong giỏ hàng !" });
//       }

//       if (product.quantity > 1) {
//           product.quantity--;
//       }

//       await cart.save();
//       res.status(200).json(cart);
//   } catch (error) {
//       res.status(500).json({ message: error.message });
//   }
// };
