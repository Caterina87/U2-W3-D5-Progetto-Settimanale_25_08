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
      const container = document.getElementById("event-details");
      container.innerHTML = `
                    <h1 class="fw-bolder">${data.name}</h1>
                    <p class="font-monospace">${data.description}</p>
                    <p>${description}</p>
                    <h6 class="bg-light px-2 py-3">Server Details</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item px-2"><strong>id:</strong> ${_id}</li>
                        <li class="list-group-item px-2"><strong>createdAt:</strong> ${createdAt}</li>
                        <li class="list-group-item px-2"><strong>updatedAt:</strong> ${updatedAt}</li>
                    </ul>`;
    });
}
