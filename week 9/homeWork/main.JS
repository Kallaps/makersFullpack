const form = document.querySelector("#korzina");
const productInput = document.querySelector("#product");
const categoryInput = document.querySelector("#category");
const costInput = document.querySelector("#cost");
const deliveryInput = document.querySelector("#delivery");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("product", productInput.value);
  localStorage.setItem("category", categoryInput.value);
  localStorage.setItem("cost", costInput.value);
  localStorage.setItem("delivery", deliveryInput.value);
});

window.addEventListener("load", () => {
  productInput.value = localStorage.getItem("product") || "";
  categoryInput.value = localStorage.getItem("category") || "";
  costInput.value = localStorage.getItem("cost") || "";
  deliveryInput.value = localStorage.getItem("delivery") || "";
});
