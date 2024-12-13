export async function deleteProduct(event) {
    const productID = event.target.getAttribute('data-id', product._id)
    if (confirm('Are you sure you want to delete this product?')) {
        try {
          const response = await fetch(`http://localhost:3000/products/${productId}`, {
            method: 'DELETE',
          });
          if (response.ok) {
            alert('Product deleted successfully!');
            fetchProducts();
          } else {
            throw new Error('Failed to delete product');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };