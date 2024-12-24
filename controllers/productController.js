// controllers/productController.js
const mongoose = require('mongoose');
const Product = require('../models/Product');
const {formatCurrency} = require(`../public/js/utils/money`)
const {generateStarRating} = require(`../public/js/utils/stars`);

// // Lấy tất cả sản phẩm
// exports.getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.render('layouts/products/products category/products', { products });
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving products' });
//   }
// };

// route chi tiết cho từng sản phẩm
exports.getDetails = async (req, res) => {
  try {
    const productName = req.params.name;
    const product = await Product.findOne({ name: productName });

    if (product) {
        res.render('layouts/products/product-details.ejs', { products: product, formatCurrency, generateStarRating });
    } else {
        res.status(404).send('Sản phẩm không tồn tại');
    }
  } catch (err) {
      console.error(err);
      res.status(500).send('Lỗi máy chủ');
  }
}



// lấy beans:
exports.getBeans = async (req, res) => {
  try {
    const products = await Product.find( {category: "beans"})
    res.render('layouts/products/beans/beans', { products, formatCurrency, generateStarRating });
    
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products' });

  }
}


// lấy grounds:
exports.getGrounds = async (req, res) => {
  try { 
   const products = await Product.find({category: "grounds" }) 
   res.render('layouts/products/grounds/grounds', { products, formatCurrency, generateStarRating })
    
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products' });

    
  }
}
// lấy capsules:
exports.getCapsules = async (req, res) => {
  try { 
   const products = await Product.find({category: "capsules" }) 
   res.render('layouts/products/capsules/capsules', { products, formatCurrency, generateStarRating })
    
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products' });

    
  }
}


////////admin
  // Lấy tất cả sản phẩm
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('layouts/admin/admin', { products, formatCurrency, layout: false });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products' });
  }
};

// Thêm sản phẩm mới
exports.addProduct = async (req, res) => {
  try {
    // Tạo sản phẩm mới
    const { name, de, priceCent, category, image } = req.body;
    const newProduct = new Product({ name, de, priceCent, category, image });

    await newProduct.save(); // Lưu vào database

    // Chuyển hướng về trang admin sau khi thêm sản phẩm
    res.redirect('/layout/admin');
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error adding product' });
  }
};


// // Cập nhật sản phẩm
// exports.updateProduct = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(product);  // Trả về sản phẩm đã cập nhật dưới dạng JSON
//   } catch (error) {
//     res.status(400).json({ message: 'Error updating product' });
//   }
// };

// Lấy thông tin sản phẩm để hiển thị form edit


// Hiển thị form chỉnh sửa sản phẩm
exports.getEditProduct = async (req, res) => {
    try {
        const productId = req.params.id; 
        const product = await Product.findById(productId)
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.render('layouts/admin/edit', { product }); // Render form chỉnh sửa
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving product');
    }
};

// Xử lý cập nhật sản phẩm
exports.postEditProduct = async (req, res) => {
  try {
      const productId = req.params.id; // Lấy ID từ URL
      const { name, de, priceCent, category } = req.body; // Lấy dữ liệu từ form
      await Product.findByIdAndUpdate(productId, {
          name,
          de,
          priceCent,
          category,
      });
      res.redirect('/admin'); // Quay lại trang admin sau khi cập nhật
  } catch (error) {
      console.error(error);
      res.status(500).send('Error updating product');
  }
};





exports.deleteProduct = async (req, res) => {
  try {
      const productId = req.params.id; // Lấy productId từ URL
      await Product.findByIdAndDelete(productId); // Xóa sản phẩm
      res.redirect('/admin'); // Quay lại trang admin sau khi xóa
  } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting product');
  }
};
