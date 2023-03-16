let tabliza = document.querySelector("table");
let API = "https://restcountries.com/v3.1/all";

fetch(API)
  .then((res) => res.json())
  .then((data) =>
    data.forEach((item) => {
      tabliza.innerHTML += `<tr> 
      <td>${item.name.common}</td>
      <td>${item.capital} </td>  
      <td>${item.population}</td> 
      <td> <img style='width: 200px' src="${item.flags.png}" alt="..."></td> 
      </tr>`;
    })
  );
