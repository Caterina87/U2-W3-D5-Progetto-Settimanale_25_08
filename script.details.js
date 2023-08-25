const URL = "https://striveschool-api.herokuapp.com/api/product/";

const productId = new URLSearchParams(window.location.search).get("productId");
console.log("Product ID: ", productId);

window.addEventListener("DOMContentLoaded", () => {
  displayProducts(productId);
});

function displayProducts(productId) {
  fetch(URL + productId, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTliZGMwMzRmZjAwMTQwM2Y1MDEiLCJpYXQiOjE2OTI5NDg5MjUsImV4cCI6MTY5NDE1ODUyNX0._R-yls9V3LvgQ-1dH89kWRuZbzYx3jr-FwJ45EFIeng`,
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      const container = document.getElementById("product-details");
      container.innerHTML = `<div class="card mb-3" style="max-width: 600px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.imageUrl}" class="img-fluid rounded-start" alt="bagImage">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.description}</p>
        <p class="card-text">${data.price} €</p>
      </div>
    </div>
  </div>
</div>`;
    });
}
