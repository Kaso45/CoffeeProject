// header
fetch('/view/partials/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  })
  .catch(error => console.error('Error loading navbar:', error));

// footer
fetch('/view/partials/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(error => console.error('Error loading navbar:', error));