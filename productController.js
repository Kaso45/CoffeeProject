// controllers/productController.js
const Product = require('../models/Product');

// // Lấy tất cả sản phẩm
// exports.getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.render('layouts/products/products category/products', { products });
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving products' });
//   }
// };

// lấy beans:
exports.getBeans = async (req, res) => {
  try {
    const products = await Product.find( {category: "beans"})
    res.render('layouts/products/beans/beans', { products });
    
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products' });

  }
}


// lấy grounds:
exports.getGrounds = async (req, res) => {
  try { 
   const products = await Product.find({category: "grounds" }) 
   res.render('layouts/products/grounds/grounds', {products})
    
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products' });

    
  }
}
// lấy capsules:
exports.getCapsules = async (req, res) => {
  try { 
   const products = await Product.find({category: "capsules" }) 
   res.render('layouts/products/capsules/capsules', {products})
    
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products' });

    
  }
}


////////admin
  // Lấy tất cả sản phẩm
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('layouts/admin/admin', { products });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products' });
  }
};

// Thêm sản phẩm mới
exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.render('layouts/admin/add')
  } catch (error) {
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
        const productId = req.params.id; // Lấy ID sản phẩm từ URL
        const product = await Product.findById(productId); // Lấy sản phẩm từ database
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.render('/layouts/admin/edit', { product }); // Render form chỉnh sửa
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving product');
    }
};

// Xử lý cập nhật sản phẩm
exports.postEditProduct = async (req, res) => {
    try {
        const productId = req.params.id; 
        const { name, description, price, category } = req.body; 
        await Product.findByIdAndUpdate(productId, {
            name,
            description,
            price,
            category,
        }); 
        res.redirect('/layouts/admin/admin'); // Quay lại trang admin sau khi cập nhật
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating product');
    }
};




// Xóa sản phẩm
exports.deleteProduct = async (req, res) => {
  try {
      const productId = req.params.id; // Lấy ID từ URL
      await Product.findByIdAndDelete(productId); // Xóa sản phẩm khỏi database
      res.redirect('/admin'); // Quay lại trang admin
  } catch (error) {
      console.error(error); // Log lỗi ra console
      res.status(500).send('Error deleting product');
  }
};