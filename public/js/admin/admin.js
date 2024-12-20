import { deleteProduct } from "./delete";
///.//////// LẤY LIST SẢN PHẨM

const { Button } = require("bootstrap");


fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  

  // lấy tbody trong table để nhét data vào
 const tableBody = document.querySelector('.table .pr-list');

  // bắt đầu lấy data gán vào table 
 data.forEach(products => {

  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${products._id}</td>
      <td>${products.category}</td>
      <td>${products.image}</td>
      <td>${products.name}</td>
      <td>${products.priceCent}</td>

      <td>
       <button class="edit-btn" data-id="${products._id}">Delete</button>
      <a href = "/view/layouts/admin/edit.html?id='${products._id}'>  <button> Edit </button>
      </a>
       </td>
  `;
  tableBody.appendChild(row)
 });
})
.catch(error => console.error('Error:', error));
 

//////////// DELETE


//Lắng nghe sự kiện cho các nút Delete
document.addEventListener('DOMContentLoaded', () => {
  const deleteButtons = document.querySelectorAll('.delete-btn');

  deleteButtons.forEach(button=> {
    button.addEventListener('click', deleteProduct)
  });
});



// setup nút add
const addNew = document.querySelector('.btn-add');
addNew.addEventListener('click', () => {
  window.location.assign('/view/layouts/admin/add.html');

})