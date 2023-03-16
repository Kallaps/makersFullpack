// let arr = document.querySelector("#button1");
// let arr1 = document.querySelectorAll("p");
// arr.addEventListener("click", () => {
//   for (i of arr1) {
//     i.style.backgroundColor = "red";
//   }
// });

// let btn = document.querySelector("#button1");
// let allh2 = document.querySelectorAll("h2");
// arr.addEventListener("click", () => {
//   for (i of arr1) {
//     i.innerText = "";
//     i.innerText = "Nuray";
//   }
// });

/** 3
 * При нажатии на Button 1 выберите элементы нумерованного списка
 * с классом "falseFact" и замените текст на "True Fact".
 * Использовать  метод массива
 */

// ** 5
//  * При нажатии на кнопку 2, поменяйте цвет всех h2 на зеленый
//  * Навесить событие как свойство ДОМ элемента (onclick)
//  */

// document.getElementById("button2").onclick = function () {
//   let headings = document.querySelectorAll("h2");
//   for (let heading of headings) {
//     heading.style.color = "green";
//   }
// };

/** 6
 * При нажатии на кнопку 2, поместите внутрь тэга "blockquote"
 "<span>no quote</span>"
 */
// let btn = document.querySelector("#button2");
// let blockquote = document.querySelector("blockquote");
// btn.addEventListener("click", () => {
//   blockquote.innerHTML = "<span>no quote</span>";
// });

// document.querySelector("#button3").onclick = () => {
//   document.querySelector("h1").innerText = "DOM is easy";
// };

/** 8
 * При нажатии на кнопку 3, добавьте после h1, параграф
 описывающий какое действие произошло, например нажали такую кнопку
 в таком месте (указать координаты)
 */

// let btn = document
//   .querySelector("#button3")
//   .addEventListener("click", (event) => {
//     const h1 = document.querySelector("h1");
//     const p = document.createElement("p");
//     p.innerText = `Нажата кнопка ${"#button3"} призолшло событие (${
//       event.clientX
//     }, ${event.clientY})`;
//     h1.after(p);
//   });

// document.querySelector("#button3").onclick = () => {
//   document.body.p.color = "red";
//   document.body.p.fontFAmily = "georgia";
// };

// document.getElementById("button3").addEventListener("click", function () {
//   let paragraphs = document.querySelectorAll("p");
//   for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.color = "red";
//     paragraphs[i].style.fontFamily = "georgia";
//   }
// });

// todo ===============================================================
// TODO Вам необходимо прописать следующую логику: у вас должна быть функция random(), которая генерирует случайное число от 1 до 80, данное число должно быть целое. Далее на кнопку необходимо навесить слушатель событий, и в качестве события указать 'mouseenter', вторым аргумент передается функция , которая меняет top и left на значения, которые мы взяли из функции random()  в процентах, если получится нажать на кнопку, то срабатывается alert c текстом "вы победили"

const button = document.querySelector("#btn");

function random() {
  return Math.floor(Math.random() * 80);
}

button.addEventListener("mouseenter", () => {
  let top = random() + "%";
  let left = random() + "%";
  button.style.top = top;
  button.style.left = left;
});

button.addEventListener("click", () => {
  alert("You won!");
});
// TODO 1. С помощью тега select запрашивать у пользователя цвет фона для боди(красный, синий, черный, зеленый, желтый), затем после выбора заменить фон на нужный(по умолчанию цвет боди черный)
// let select = document.querySelector("select");
// let body = document.querySelector("body");
// select.addEventListener("change", function (e) {
//   const n = e.target.value;
//   body.style.background = n;
//   console.log(n);
// });

// const button1 = document.querySelector('#change');
// function random() {
//   return Math.floor(Math.random() * 100);
// }
// button1.addEventListener('click', () => {
//   let rgb = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';

//   button1.style.backgroundColor = rgb;
// });

let lift = {
  currFloor: 1,
  min: 0,
  max: 15,
  toFloor: function (etaj) {
    if (etaj > 15 || etaj < 0) {
      console.log("no");
    } else {
      for (let i of etaj) console.log(i);
    }
  },
  checkFloor: function () {
    console.log(this.currFloor);
  },
};
