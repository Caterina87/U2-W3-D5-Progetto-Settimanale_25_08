function createProduct(event) {
  event.preventDefault();
  console.log("ci sei?");
  const newProduct = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imageUrl").value,
    price: parseInt(document.getElementById("price").value),
  };
  console.log(newProduct);

  const url = "https://striveschool-api.herokuapp.com/api/product/";
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTliZGMwMzRmZjAwMTQwM2Y1MDEiLCJpYXQiOjE2OTI5NDg5MjUsImV4cCI6MTY5NDE1ODUyNX0._R-yls9V3LvgQ-1dH89kWRuZbzYx3jr-FwJ45EFIeng`,
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    });
}
