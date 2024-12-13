import { cart, removeFromCart, saveToStorage } from "../../../data/cart.js";
import { products, getProduct } from "../../../data/products.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import { updateCartQuantity } from "../index.js";

export function renderOrderSummary() {
  const cartSummaryContainer = document.querySelector(`.cart-summary`);
  let cartSummaryHTML = ``;

  cart.forEach((cartItem) => {
    const productName = cartItem.productName;
    const matchingProduct = getProduct(productName);

    cartSummaryHTML += `
      <div class="card mb-3 item-container-${matchingProduct.name}">
        <div class="card-body d-flex gap-4">
          <div class="card-picture">
            <img src="${matchingProduct.image}" alt="${matchingProduct.name}" width="120" height="120">
          </div>
          <div class="card-content">
            <h5 class="card-title">${matchingProduct.name}</h5>
            <p class="card-text text-muted">${(matchingProduct.priceCent / 100).toFixed(2)}$</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex">
                <button class="decrease-btn btn btn-outline-secondary btn-sm" data-product-name="${matchingProduct.name}">-</button>
                <input
                  type="number"
                  value="${cartItem.quantity}"
                  class="form-control d-inline mx-1 quantity-input"
                  style="width: 50px"
                  disabled
                />
                <button class="increment-btn btn btn-outline-secondary btn-sm" data-product-name="${matchingProduct.name}">+</button>
              </div>
              <button class="remove-btn btn btn-danger btn-sm mx-5" data-product-name="${matchingProduct.name}">Remove</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  cartSummaryContainer.innerHTML = cartSummaryHTML;

  cartSummaryContainer.addEventListener(`click`, (event) => {
    const target = event.target;

    if (target.classList.contains(`remove-btn`)) {
      const productName = target.dataset.productName;
      removeFromCart(productName);

      const container = document.querySelector(`.item-container-${productName}`);
      if (container) container.remove();

      saveToStorage
      updateCartQuantity();
      renderPaymentSummary();
    }

    if (target.classList.contains(`decrease-btn`) || target.classList.contains(`increment-btn`)) {
      const productName = target.dataset.productName;
      const cartItem = cart.find((item) => item.productName === productName);

      if (cartItem) {
        if (target.classList.contains(`decrease-btn`) && cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        } else if (target.classList.contains(`increment-btn`)) {
          cartItem.quantity += 1;
        }

        const quantityInput = document.querySelector(
          `.item-container-${productName} .quantity-input`
        );
        if (quantityInput) quantityInput.value = cartItem.quantity;

        saveToStorage();
        updateCartQuantity();
        renderPaymentSummary();
      }
    }
  });
}
