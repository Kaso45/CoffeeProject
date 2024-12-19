// // Lấy ID từ URL
// const productId = new URLSearchParams(window.location.search).get('id');

// // Xử lý cập nhật sản phẩm khi submit form
// document.getElementById('editProductForm').addEventListener('submit', async (event) => {
//   event.preventDefault();
// })


// // xác định update cái gì, chỗ nào
// const updateProduct= {
//    category: document.querySelector('#productCategory'),
//    image: document.querySelector('#productImage'),
//    name: document.querySelector('#productName'),
//    priceCent: document.querySelector('#productPriceCent'),
//    de: document.querySelector('#productDescription'),
// }




// try { const response = await fetch('../../controllers/productController', {
// method: 'PUT',
// headers: { 'Content-Type': 'application/json' },
// body: JSON.stringify(updateProduct),
// })
// if (response.ok) {
//     alert('Successfully!');
//   } else {
//     throw new Error('Update failed');
//   }

    
// } catch (error) {
//     alert('Error updating product');
//     console.error(error);
//   }
