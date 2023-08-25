function createProduct() {
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  //recuperi l'oggetto dalla form
  fetch(url, {
    method: "POST",
    body: JSON.stringify({ name: "" }),
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTliZGMwMzRmZjAwMTQwM2Y1MDEiLCJpYXQiOjE2OTI5NDg5MjUsImV4cCI6MTY5NDE1ODUyNX0._R-yls9V3LvgQ-1dH89kWRuZbzYx3jr-FwJ45EFIeng`,
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      // ridare prodotto
      console.log(data);
    });
}
