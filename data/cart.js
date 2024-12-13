
export let cart = JSON.parse(localStorage.getItem(`cart`));

export function saveToStorage () {
  localStorage.setItem(`cart`, JSON.stringify(cart));
}

export function addToCart(productName) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productName === cartItem.productName) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productName: productName,
      quantity: 1
    });
  }
  
  saveToStorage();
}

export function removeFromCart(productName) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productName !== productName) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function incrementItem() {
  
}