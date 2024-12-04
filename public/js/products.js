const products = [
  {
    image: `/public/images/aromacraft.png`,
    name: `AromaCraft`,
    rating: 4.5,
    price: 1500,
    de: `AromaCraft offers a premium coffee experience, crafted from high-altitude beans roasted to highlight complex flavors of caramel, cocoa, and subtle fruitiness. Designed for both connoisseurs and casual drinkers, it delivers a rich, smooth taste that's perfect for any occasion. The coffee comes in freshness-sealed packaging, ensuring peak flavor with every sip.`
  },

  {
    image: `/public/images/bitbrew.png`,
    name: `BitBrew`,
    rating: 4.0,
    price: 1500,
    de: `BitBrew Kenya Dark Roast blends tradition and innovation, with beans sourced from Kenya's highlands and roasted to enhance bold, intense flavors of citrus and cocoa. The smooth finish offers an energizing experience, perfect for a digital-age lifestyle.`
  },

  {
    image: `/public/images/casa.png`,
    name: `Casa`,
    rating: 4.0,
    price: 2000,
    de: `Casa coffee generally refers to a coffee blend or brand that focuses on providing a cozy, homey, and comforting coffee experience. The term "Casa" (Spanish for "house") often evokes warmth and familiarity, so coffee labeled as "Casa" might emphasize smooth, approachable flavors designed for everyday enjoyment.`
  },

  {
    image: `/public/images/koko.png`,
    name: `Koko`,
    rating: 5.0,
    price: 2200,
    de: `KoKo Coffee is a smooth, medium roast that combines the rich flavors of cocoa and coffee in perfect harmony. Sourced from lush, tropical farms, its beans are carefully roasted to highlight notes of chocolate, caramel, and a hint of vanilla.`
  },

  {
    image: `/public/images/navy.png`,
    name: `Navy Brew`,
    rating: 4.0,
    price: 2300,
    de:`Navy Brew is a robust dark roast coffee inspired by the adventurous spirit of the seas. Sourced from coastal regions, its beans are carefully roasted to develop a rich, smoky flavor with subtle notes of sea salt and dark chocolate. Each cup delivers a strong, invigorating taste`
  },

  {
    image: `/public/images/zenbean.png`,
    name: `ZenBean`,
    rating: 5.0,
    price: 2000,
    de:`ZenBean is likely a coffee brand or blend that emphasizes a calming, balanced coffee experience, aligning with the idea of zen or mindfulness. Although there isn't a widely known global brand by this name, the term "ZenBean" suggests a focus on quality, smoothness, and relaxation.`
  },

  
];

const productList = document.getElementById('product-list');

// render san pham
function renderProducts() {
  productList.innerHTML = '';
  products.forEach(product => {
    const productElement = `
      <div class="col-12 col-sm-6 col-md-4">
        <div class="pro-container card mb-4">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body d-flex justify-content-between">
            <div class="des">
              <h5 class="card-title">${product.name}</h5>
              <div class="star">
                ${generateStarRating(product.rating)}
              </div>
              <p class="card-text">${(product.price / 100).toFixed(2)}$</p>
            </div>
            <button type="button" class="btn btn-primary px-4"><i class="fs-4 bi bi-cart2"></i></button>
          </div>
        </div>
      </div>
    `;
    productList.innerHTML += productElement;
  });
}

// render ngoi sao
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

renderProducts();