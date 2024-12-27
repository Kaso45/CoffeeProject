function generateStarRating(rating) {
  let stars = "";
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

module.exports = { generateStarRating };
