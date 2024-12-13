import { cart, addToCart, saveToStorage } from '../../data/cart.js';
import { products } from '../../data/products.js';

// render sản phẩm
const currentPage = window.location.pathname; 

function renderProducts(products, containerId) {
  const productList = document.getElementById(containerId);
  
  let productHTML = '';  // khởi tạo html
  products.forEach(product => {
    productHTML += `
      <div class="col-12 col-sm-6 col-md-4">
        <div class="pro-container card mb-4">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body d-flex justify-content-between">
            <div class="des">
              <h5 class="card-title">${product.name}</h5>
              <div class="star">
                ${generateStarRating(product.rating)}
              </div>
              <p class="card-text">${(product.priceCent / 100).toFixed(2)}$</p>
            </div>
            <button type="button"
             class="btn btn-primary px-4 addToCart"
             data-product-name="${product.name}"
             ><i class="fs-4 bi bi-cart2"></i></button>
          </div>
        </div>
      </div>
    `;
  });
  
  productList.innerHTML = productHTML; // gán toàn bộ html một lần
}

// lọc sản phẩm
if (currentPage === '/view/layouts/home/homepage.html') { // load sản phẩm bán chạy
  const bestSeller = products.filter(product => 
    ['AromaCraft', 'Casa', 'ZenBean'].includes(product.name)
  );
  renderProducts(bestSeller, 'bestSeller');
} else if (currentPage === `/view/layouts/products/capsules/capsules.html`) { //load viên nén
  const capsules = products.filter(product => 
    [`capsules`].includes(product.category)
  );
  renderProducts(capsules, `productList`);
} else if (currentPage === `/view/layouts/products/grounds/grounds.html`) { // load rang xây
  const grounds = products.filter(product => 
    [`grounds`].includes(product.category)
  );
  renderProducts(grounds, `productList`);
} else if (currentPage === `/view/layouts/products/beans/beans.html`) { // load hạt
  const beans = products.filter(product => 
    [`beans`].includes(product.category)
  );
  renderProducts(beans, `productList`);
}

// render ngôi sao
function generateStarRating(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars += "<i class='bi bi-star-fill'></i>";
    } else if (rating >= i + 0.5) {
      stars += "<i class='bi bi-star-half'></i>";
    } else {
      stars += "<i class='bi bi-star'></i>";
    }
  }
  return stars;
}

export function updateCartQuantity() {
  const cartQuantity = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
  document.querySelector(`.cart-quantity`).innerHTML = cartQuantity;
}

document.querySelectorAll(`.addToCart`)
  .forEach((button) => {
    button.addEventListener(`click`, () => {
      const productName = button.dataset.productName;
      addToCart(productName);
      updateCartQuantity();
    });
  });