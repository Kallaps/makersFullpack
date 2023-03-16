let API = "https://fakestoreapi.com/products";

let productList = document.querySelector(".product-list");

// стягивание данных

function getDataFromAPI() {
  fetch(API).then((res) =>
    res
      .json()
      .then((data) => localStorage.setItem("data", JSON.stringify(data)))
  );
}

getDataFromAPI();
function render() {
  const data = JSON.parse(localStorage.getItem("data"));

  productList.innerHTML = "";
  data.forEach((item, index) => {
    productList.innerHTML += `
        <div class='card' style='width:15rem;'>
        <img src="${item.image}" class='card-img-top' alt="...">
        <div class='card-body'>
        <h5 class='card-title'>${item.title.slice(0, 20)}</h5>
        <p class='card-text'>${item.price}</p>
        <p class='card-text'>${item.description.slice(0, 50)}</p>
        </div>
        
        <div class='card-body'>
        <button onclick='openEditModal(${item.id})' data-bs-toggle='modal'
        data-bs-target='#editproductModal' class='card-link'>Edit</button>
        <button onclick='deleteProduct(${
          item.id
        })' class='card-link'>Delete</button>
        </div>
        
        </div>
      
        `;
  });
}
render();
// достаем инпуты

let inpTitle = document.querySelector(".input-title");
let inpDescr = document.querySelector(".input-descr");
let inpPrice = document.querySelector(".input-price");
let inpCat = document.querySelector(".input-cat");
let inpImage = document.querySelector(".input-image");
let btnAdd = document.querySelector(".btn-add");

let obj = {
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
};
console.log(obj);
