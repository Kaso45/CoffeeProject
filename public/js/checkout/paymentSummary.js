import { cart } from "../../../data/cart.js";
import { getProduct } from "../../../data/products.js";
import formatCurrency from "../utils/money.js";

export function renderPaymentSummary() {
  if (!cart || cart.length === 0) {
    document.querySelector(`.payment-summary`).innerHTML = ``;
    return;
  }

  // Calculate totals
  const productPriceCent = cart.reduce((sum, cartItem) => {
    const product = getProduct(cartItem.productName);
    return sum + product.priceCent * cartItem.quantity;
  }, 0);

  const taxCents = productPriceCent * 0.1;
  const totalCents = productPriceCent + taxCents;

  // Generate HTML
  const paymentSummaryHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Order Summary</h5>
          <hr />
          <div class="d-flex justify-content-between">
            <p class="mb-2">Subtotal</p>
            <p class="mb-2">${formatCurrency(productPriceCent)}</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="mb-2">Tax</p>
            <p class="mb-2">${formatCurrency(taxCents)}</p>
          </div>
          <div class="d-flex justify-content-between font-weight-bold">
            <p>Total</p>
            <p>${formatCurrency(totalCents)}</p>
          </div>
          <button class="checkout-btn btn btn-primary btn-block mt-3">Checkout</button>
        </div>
      </div>
  `;

  const paymentSummaryContainer = document.querySelector(`.payment-summary`);
  if (paymentSummaryContainer) {
    paymentSummaryContainer.innerHTML = paymentSummaryHTML;
  }
}
