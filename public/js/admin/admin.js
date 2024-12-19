//import { deleteProduct } from "./delete";
///.//////// LẤY LIST SẢN PHẨM

const { Button } = require("bootstrap");


// fetch('/products')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
  

//   // lấy tbody trong table để nhét data vào
// //  const tableBody = document.querySelector('.table.pr-list');
// const tableBody = document.querySelector('.table.pr-list tbody');


//   // bắt đầu lấy data gán vào table 
//  data.forEach(products => {

//   const row = document.createElement('tr');
//   row.innerHTML = `
//       <td>${products._id}</td>
//       <td>${products.category}</td>
//       <td>${products.image}</td>
//       <td>${products.name}</td>
//       <td>${products.priceCent}</td>

//       <td>
//        <button class="edit-btn" data-id="${products._id}">Delete</button>
//       <a href = "http://localhost:3000/admin/editProducts/?id=${products._id}">  <button> Edit </button>
//       </a>
//        </td>
//   `;
//   tableBody.appendChild(row)
//  });
// })
// .catch(error => console.error('Error:', error));
 

//////////// DELETE


document.addEventListener('DOMContentLoaded', () => {
  // Gắn sự kiện cho tất cả các nút Delete
  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', async () => {
      const productId = button.dataset.id; // Lấy ID từ nút

      if (confirm('Are you sure you want to delete this product?')) {
        try {
          const response = await fetch(`/products/${productId}`, {
            method: 'DELETE',
          });

          if (response.ok) {
            const result = await response.json();
            alert(result.message);
            button.closest('tr').remove(); // Xóa dòng khỏi giao diện
          } else {
            alert('Failed to delete product');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while deleting the product.');
        }
      }
    });
  });
});




// setup nút add
const addNew = document.querySelector('.btn-add');
addNew.addEventListener('click', () => {
  window.location.assign('/view/layouts/admin/add.html');

})