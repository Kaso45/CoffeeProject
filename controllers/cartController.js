const User = require("../models/User");
const Product = require("../models/Product");
const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const  userId  = req.session.userId;

  if (!userId) {
    return res.status(401).json({ success: false, message: 'User not logged in' });
  }

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    const existProductIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId
    );
  // Kiểm tra sản phẩm đã tồn tại chưa
  const existingItem = cart.items.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += parseInt(quantity, 10); // Cập nhật số lượng
  } else {
    cart.items.push({ productId, quantity: parseInt(quantity, 10) }); // Thêm sản phẩm mới
  }
  
    await cart.save();
    res.redirect('back')
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCart = async (req, res) => {
  const { userId } = req.session.body;
  try {
    // const cart = await Cart.findOne({ userId }).populate("products.productId");
    // if (!cart) {
    //   res.status(404).json({ message: "Cant find product" });
    // }
    

    // const cartData = {
    //   products: cart.products.map((item) => ({
    //     productId: item.productId._id,
    //     image: item.productId.image,
    //     price: item.productId.price,
    //     name: item.productId.name,
    //     quantity: item.quantity,
    //   })),
    // };
    // return res.status(StatusCodes.OK).json(cartData);

// check giỏ
        const cart = await Cart.findOne({ userId }).populate( 'products.productId' )
        if (!cart || cart.items.length === 0) {
          return res.render('cart', { cart: { products: [] } });
        }
    
        const cartItems = cart.items.map(item => ({
          id: item.productId._id,
          name: item.productId.name,
          image: item.productId.image,
          priceCent: item.productId.price,
          quantity: item.quantity
        }));      
        res.render('cart', { cart: { products: cartItems } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.cartRemove = async (req, res) => {
  const { productId } = req.body;
  const  userId  = req.session.userId;
  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      res.status(404).json({ message: "cant find product" });
    }
    cart.products = cart.products.filter(
      (item) => item.productId && item.productId.toString() !== productId
    );
    await cart.save();
    res.redirect('/cartss')
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
