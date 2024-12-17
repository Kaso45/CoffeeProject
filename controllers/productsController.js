



/////// file này dùng để nhét mấy cái (req, res) => {res.render(...)} vô để gọn hơn xong đặt tên cho tụi nó để xuất qua file productRoutes

// Lấy trang product
class ProductsController {
  // GET products
  index(req,res) {
    res.render(`layouts/products/products-categories/products.ejs`);
  }

  beans(req,res) {
    res.render(`layouts/products/beans/beans.ejs`);
  }

  capsules(req,res) {
    res.render(`layouts/products/capsules/capsules.ejs`);
  }

  grounds(req,res) {
    res.render(`layouts/products/grounds/grounds.ejs`);
  }
}

module.exports = new ProductsController

// // lấy grounds:
// exports.getGrounds = async (req, res) => {
//   try { 
//    const products = await Product.find({category: "grounds" }) 
//    res.render('layouts/products/grounds/grounds', {products})
    
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving products' });

    
//   }
// }
// // lấy capsules:
// exports.getCapsules = async (req, res) => {
//   try { 
//    const products = await Product.find({category: "capsules" }) 
//    res.render('layouts/products/capsules/capsules', {products})
    
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving products' });

    
//   }
// }

// // Thêm sản phẩm mới
// exports.addProduct = async (req, res) => {
//   try {
//     const newProduct = new Product(req.body);
//     await newProduct.save();
//     res.status(201).json(newProduct);  // Trả về sản phẩm vừa thêm dưới dạng JSON
//   } catch (error) {
//     res.status(400).json({ message: 'Error adding product' });
//   }
// };

// // Cập nhật sản phẩm
// exports.updateProduct = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(product);  // Trả về sản phẩm đã cập nhật dưới dạng JSON
//   } catch (error) {
//     res.status(400).json({ message: 'Error updating product' });
//   }
// };

// // Xóa sản phẩm
// exports.deleteProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: 'Product deleted' });  // Trả về thông báo thành công dưới dạng JSON
//   } catch (error) {
//     res.status(400).json({ message: 'Error deleting product' });
//   }
// };