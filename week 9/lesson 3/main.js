//!===================================  HTTP запросы  ======================================

// ?   ============================ XMLHTTPRequest ================
let btn = document.querySelector(".btn");
let getData = () => {
  // *==== создаем XMLHTTPRequest обьект
  let xhr = new XMLHttpRequest();

  // *==== инициализируем запрос, указывая метод запрос и то куда запрос отправляем
  xhr.open("GET", "https://reqres.in/api/users?page=2");

  xhr.send(); //* ==отправка запроса

  //* ==== отправляем запрос , указывая метод запроса и то куда запрос отправляем
  xhr.onload = () => {
    // console.log(xhr.response);

    const data = JSON.parse(xhr.response); //приводим JSON формату
    console.log(data);
  };

  console.log(xhr);
};

btn.addEventListener("click", getData);

// ?================================  fetch ============================

// fetch("https://reqres.in/api/users?page=2").then((data) =>
//   data.json().then((unpacked) => console.log(unpacked.data))
// );

// let container = document.querySelector(".container");
// let API = "https://jsonplaceholder.typicode.com/users";

// fetch(API) //* получаем promise , который обещает вернуть response object
//   //* Response obj -> превращаем в Promise  который обещает вернуть данные в JSON формате
//   .then((res) => res.json())

//   //*(then1) отлавливаем успешный результат выполнения промиса при помощи then(then2)
//   .then((data) =>
//     data.forEach((item) => {
//       container.innerHTML += `<div style="border:1px solid black;">
//        <h3>${item.id}.${item.name}</h3>
//        <p>${item.phone}</p>
//       </div>`;
//     })
//   );

let tabliza = document.querySelector("table");
let API1 = "https://jsonplaceholder.typicode.com/todos";

fetch(API1)
  .then((res1) => res1.json())
  .then((data1) =>
    data1.forEach((item1) => {
      console.log(item1);
      tabliza.innerHTML += `<tr> 
      <td>${item1.userId}</td>
      <td>${item1.id} </td>  
      <td>${item1.title}</td> 
      <td> ${item1.completed}</td> 
      </tr>`;
    })
  );
