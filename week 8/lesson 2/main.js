// !=======================================   методы для работы с событиями   ========================================

// let btn = document.querySelector("#button");
// let body = document.querySelector("body");

// btn.addEventListener("click", changeColor);

// function changeColor() {
//   body.style.background = "pink";
// }

// btn.removeEventListener("click", changeColor);

// btn.onclick = () => {
//   btn.style.width = "300px";
//   btn.style.height = "100px";
//   btn.style.background = "violet";
// };

// !==========================================   Cобытия в JS  ========================================================

const para = document.getElementById("p");
para.addEventListener("contextmenu", () => {
  alert("get out");
});

// ?==================   mouseover/ mousout - когда наводишь на мышь на элемент

const img = document.querySelector("#image");
img.addEventListener("mouseover", () => {
  console.log("mouseover");
});

// ?================= mousedown / mouseup - зажим кнопки миши
// function zoom() {
//   img.style.width = "1000px";
// }
// img.addEventListener("mousedown", zoom);
// img.addEventListener("mouseup", () => {
//   img.style.width = "400px";
// });

// ?===================  mousemove - при движении миши
// img.addEventListener("mousemove", (event) => {
//   console.log(event);
// });

// ?==================   change - изменение
// let chx = document.getElementById("chx");
// chx.addEventListener("change", (e) => {
//   console.log(e);
// });

// img.addEventListener("click", (event) => {
//   console.log(event.target.src);
// });

// ?=====================  focus - фокус пользователя на элементе , например клик по <input/>
let inp = document.querySelector("#inp");
inp.addEventListener("focus", () => {
  console.log("input focused");
  inp.setAttribute("placeholder", "start typing!");
});

let div = document.querySelector("#myDiv");
div.style.backgroundColor = "grey";
div.style.width = "200px";
div.style.height = "200px";

// div.addEventListener("click", () => {
//   console.log("you clicked");
//   div.style.backgroundColor = "pink";
// });
div.addEventListener("mousedown", () => {
  console.log("you pressing mouse");
  div.style.backgroundColor = "blue";
});
div.addEventListener("mouseup", () => {
  console.log("you pressing mouse");
  div.style.backgroundColor = "red";
});

div.addEventListener("dblclick", () => {
  console.log("you double clicked");
  div.style.backgroundColor = "purple";
});

div.addEventListener("contextmenu", () => {
  console.log("you opened the contextmenu");
  div.style.backgroundColor = "green";
});

div.addEventListener("mouseover", () => {
  console.log("you entered the squary");
  div.style.backgroundColor = "teal";
});

div.addEventListener("mouseout", () => {
  console.log("you leaved the squary");
  div.style.backgroundColor = "gold";
});
div.addEventListener("mousemove", () => {
  console.log("you are with iin the square");
  div.style.backgroundColor = "aqua";
});

let backgroundColor = document.querySelector("app");
backgroundColor.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "R":
      document.body.style.backgroundColor = "red";
      break;
    case "G":
      document.body.style.backgroundColor = "green";
      break;
    case "B":
      document.body.style.backgroundColor = "blue";
      break;
    case "w":
      document.body.style.backgroundColor = "white";
      break;
    default:
  }
});

