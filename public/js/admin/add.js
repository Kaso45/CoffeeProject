
// // Ngăn không reload trang
// document.getElementById('addProductForm').addEventListener('submit', async (e) => {
//     e.preventDefault(); 



// // xác định data
// const newProduct= {
//     category: document.querySelector('#productCategory'),
//     image: document.querySelector('#productImage'),
//     name: document.querySelector('#productName'),
//     priceCent: document.querySelector('#productPriceCent'),
//     de: document.querySelector('#productDescription'),
// }
 

// // fetch
// try { const response = await fetch('http://localhost:3000/products', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newProduct)
// })
// if (response.ok){
//     alert('Product added')
    
// }
// if (!response.ok){
//     alert('Failed')
// }
    
// } catch (error) {
//     console.error('Error:', err);
//     alert('An error occurred while adding the product.');
// }
// })