window.addEventListener("DOMContentLoaded", () => {
  displayProducts();
});

function displayProducts() {
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  fetch(url, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTliZGMwMzRmZjAwMTQwM2Y1MDEiLCJpYXQiOjE2OTI5NDg5MjUsImV4cCI6MTY5NDE1ODUyNX0._R-yls9V3LvgQ-1dH89kWRuZbzYx3jr-FwJ45EFIeng`,
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      const row = document.getElementById("mainRow");
      row.innerHTML = "";
      data.forEach((product) => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        //console.log(product.name);
        col.innerHTML = `<div class="card mb-4 shadow-sm">
                <img src="${product.imageUrl}" class="card-img-top" alt="...">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
              <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
            </svg>
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href="./details.html?productId=${product._id}">View</a>
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                   </div>
                <small class="text-muted">${product.price}</small>
              </div>
            </div>
           </div>`;

        row.appendChild(col);
      });
    })
    .catch((error) => console.log(error));
}
