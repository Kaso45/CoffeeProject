// document.addEventListener('DOMContentLoaded', () => {
//   // Handle Add to Cart
//   const addToCartButtons = document.querySelectorAll('.addToCart');
//   addToCartButtons.forEach(button => {
//       button.addEventListener('click', async (e) => {
//           e.preventDefault();
//           const productId = button.getAttribute('data-product-id');
//           const userId = getCurrentUserId(); // You'll need to implement this based on your auth system
          
//           try {
//               const response = await fetch('/cart/add-to-cart', {
//                   method: 'POST',
//                   headers: {
//                       'Content-Type': 'application/json'
//                   },
//                   body: JSON.stringify({
//                       productId,
//                       userId,
//                       quantity: 1
//                   })
//               });
              
//               if (response.ok) {
//                   alert('Product added to cart successfully!');
//                   updateCartCounter(); // Implementation below
//               } else {
//                   alert('Failed to add product to cart');
//               }
//           } catch (error) {
//               console.error('Error:', error);
//               alert('Error adding product to cart');
//           }
//       });
//   });

//   // Function to update cart counter
//   async function updateCartCounter() {
//       const userId = getCurrentUserId();
//       try {
//           const response = await fetch(`/cart/${userId}`);
//           const data = await response.json();
//           const cartCount = data.products.reduce((acc, item) => acc + item.quantity, 0);
//           document.querySelector('.cart-counter').textContent = cartCount;
//       } catch (error) {
//           console.error('Error updating cart counter:', error);
//       }
//   }

//   // Handle quantity updates
//   function handleQuantityUpdate(productId, action) {
//       const userId = getCurrentUserId();
//       const endpoint = `/cart/${action}-quantity`;
      
//       return fetch(endpoint, {
//           method: 'PUT',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ userId, productId })
//       })
//       .then(response => response.json())
//       .then(data => {
//           updateCartDisplay();
//       })
//       .catch(error => console.error('Error:', error));
//   }
// });