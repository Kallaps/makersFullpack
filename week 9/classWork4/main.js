const API = "https://fakestoreapi.com/products";
function getDataFormAPI() {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("data", JSON.stringify(data));
    });
}
getDataFormAPI();

const productsList = document.querySelector(".product-list");

function render() {
  const data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  data.forEach((item) => {
    productsList.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src= ${item.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p ${item.description}</p>

    <a href="#" class="btn btn-danger"> $${item.price}</a>
  </div>

<div class="card-body">
<button class="card-link" data-bs-toggle="modal" data-bs-target="#editproductModal">Edit</button>
<button class="card-link">Delete</button>

</div>



</div>
    
    `;
  });
}
render();
