let API = "https://rickandmortyapi.com/api/character";
let list = document.querySelector(".list");
let list2 = document.querySelector(".list2");

let APIdb = "http://localhost:8000/character";

fetch(API)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let elem = data.results;
    elem.forEach((item) => {
      list.innerHTML += `
        <li>${item.name}</li>
        <li> <img src = ${item.image}></li>
        `;
    });
    // fetch(APIdb, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    //   },
    //   body: JSON.stringify(elem),
    // });
  });

fetch(APIdb)
  .then((resDB) => resDB.json())
  .then((dataDB) => {
    console.log(dataDB);
    dataDB.forEach((item) => {
      item.forEach((i) => {
        console.log(i.name);
        list2.innerHTML += `
        <li>${i.name}</li>
        <img src= ${i.image} >
        `;
      });
    });
  });
