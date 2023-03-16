// // ! =====================================   getElement/s  =============================================
// // console.log(document.head);
// // console.log(document.body);

// let title = document.getElementsByTagName("h1");
// // console.log(title);

// let list = document.getElementById("list");
// // console.log(list);

// let li = document.getElementsByClassName("elem");
// // console.log(li);

// // for (let i of li) {
// //   console.log(i);
// // }

// let block = document.getElementsByName("block");
// // console.log(block);

// //! ===================================   querySelector/all  =============================================
// // ? querySelector - возвращает первое совпадение

// // let elem = document.querySelector(".elem");
// // console.log(elem);

// //? querySelectorAll - возвращает все совпадения

// // let elem = document.querySelectorAll(".elem");
// // console.log(elem);

// //? NodeList - это массивоподобная коллекция, можем перебрать коллекция методом ForEach

// let elem1 = document.querySelectorAll(".elem");
// let elem2 = document.getElementsByClassName("elem");

// // elem2.forEach((x) => console.log(x));

// // ! ========================= createElement / createTextNode / innerHTML / innerText =========================

// // ? ==========================  createElem - создает новый элемент по указонному html тегу
// const newDiv = document.createElement("div");
// // console.log(newDiv);

// //? ==========================  cteateTextNode - создай текстовый узел
// let text = document.createTextNode("<p>hola</p>");
// // newDiv.prepend(text);
// // console.log(newDiv);

// // ? ==========================  innerText -
// newDiv.innerText = "текст внутри див";
// // console.log(newDiv);

// // ? ==========================  innerHTML -
// newDiv.innerHTML = "<h1>Welcome</h1>";
// // console.log(newDiv);

// // ! ==================  firstElemtChild / lastElemtChild /  nextElemtSibling / previousElemtSibling  =============
// const list1 = document.querySelector("#list");
// // console.log(list1.firstElementChild.textContent);
// // console.log(list1.lastElementChild);
// // console.log(list1.lastElementChild.textContent);

// //? nextPreviousSibling - выводит следующий элемент на том же уровне с элементом, к которму применен метод

// const div2 = document.querySelector("#block2");
// // console.log(div2.nextElementSibling); //block3

// // console.log(div2.previousElementSibling); //block3

// // ! ===============   добавление элементов в DOM , append , prepend / before / after   ===================

// const ul = document.querySelector("ul");
// // ?  a======================ppend- добавляет в конец указанного элемента
// const newNode = document.createElement("li");
// newNode.innerText = "Salamat baike - 30 var";

// ul.append(newNode);
// // console.log(ul);

// // ? ======================prepend - добавляет в начало указанного элемента

// const newNode2 = document.querySelector("li");
// newNode2.innerText = "Anton baike - 30 var";
// ul.prepend(newNode2);
// // console.log(newNode2);

// // ?   ======================before - помещает данные до элемента

// const newNode3 = document.createElement("li");
// newNode3.innerText = "hello Aizireck";
// ul.before(newNode3);

// // ?  ======================after- помещает данные после элемента
// const newNode4 = document.createElement("li");
// newNode4.innerText = "hello Dastan";
// ul.after(newNode4);

// //
// //
// //
// // ?  =========================setAttribute - позволяет задать аттрибут элементу ,
// //?  =========================данный метод  принимает 2 аргумента , первый - название: второе - значение

// const block1 = document.querySelector("#block");
// const inp = document.createElement("input");
// inp.setAttribute("placeholder", "enter something");
// block1.prepend(inp);

// //?  =================== appendChild VS append ======================
// //1) append -  принимает обьекты узла и DOMstring(текстовый узел) , в то время когда appendChild принимает только обьекты узла
// //2) append - позволяет добавить несколько элементов , в то время когда как appendChild  допускает только 1 элемент

// // const parent = document.createElement("div");
// // const child = document.createElement("p");

// // parent.append(child);
// // console.log(parent);

// //? =========================

// // const parent = document.createElement("div");

// // parent.append("Appending text");
// // console.log(parent);

// // ? ============== appendChild

// // const parent = document.createElement("div");
// // const child = document.createElement("p");
// // parent.appendChild(child);
// // console.log(parent);

// //?----------------------------------

// // const parent = document.createElement("div");

// // parent.appendChild("Appending text");  //error
// // console.log(parent);

// ! task 7
// var elem = document.getElementsByClassName("row");
// var style = window.getComputedStyle(elem[1]);
// console.log(style)

// !  task 8
// let elem = document.getElementsByClassName('row')
// for(let i of elem){
//     i.classList.add('third')
//     console.log(i)
// }

// ! task 9
// let elem = document.getElementsByClassName('row-inner')
// for(let i of elem){
//   i.style.color = 'pink'

// }
// !task 10??
// let elem = document.getElementsByClassName("row-input");
// let elem2 = elem.getElementsByTagName("div");
// let inp = document.createElement("input");
// let text = document.createAttribute("type", "text");

// ! task 11
// let elem = document.getElementsByTagName('input')
// for(let i of elem){
//     i.style.background = 'yellow'
// }

// !task 12
// let elem = document.getElementsByTagName('input')
// for(let i of elem){
//     i.setAttribute('placeholder',"input")
// }

// ! task 13
// let elem = document.getElementsByClassName('row-outer')
// for(let i of elem){
//     i.style.fontSize = '20px'
// }

// !task 14
// let elem = document.getElementsByClassName('last')
// for( let i of elem){
//     i.append('Last but not least')
// }

// !  task 15
// let elem = document.getElementsByClassName('last')
// for(let i of elem){
//     i.style.fontWeight = 'bold'
// }

// ! task 16
// let elem = document.getElementsByTagName('em')
// for(let i of elem){
//     i.style.color = "orange"
// }

// ! task 17
// let elem = document.getElementsByTagName('strong')
// for(let i of elem){
//     i.classList.add('selected')
// }

// ! task 18
// let elem = document.getElementsByClassName('container')
// for(let i of elem){
//     i.style.background = 'green'
// }

// ! task 19
// let elem = document.querySelectorAll('a')
// for(let i of elem){
//     i.style.textDecoration = 'none'
// }
// !task 22
// let elem = document.querySelectorAll("em");
// for (i of elem) {
//   i.classList.toggle("every");
// }

// ! task 23
// let elem = document.getElementsByTagName('ul')
//     elem[1].classList.remove('row')

// ! task 25
// let elem = document.getElementById('unordered-1')
// elem.innerHTML=''
// let li1 = document.createElement('li')
// let li2 = document.createElement('li')
// li1.innerText = 'Привет'
// li2.innerText = 'JS'
// elem.append(li1,li2)

// let elem = document.querySelector("#unordered-2");
// elem.innerHTML = "<li>New Element</li>";

// ! task 28
// let elem = document.getElementsByClassName('end')
// for(i of elem){
//     i.innerText = 'Лучше поздно, чем никогда'
//     i.style.fontSize = '28px'
//     i.style.color = 'green'
// }
// !==========================================  inserAdjacentHTML  =============================================
// * данный метод принимает 2 аргумента , первый аргумент - это куда вставляяется фрагмент, второй - сам HTML фрагмент

// ? ======= beforebegin -  вставляется перед элементом на одном уровне с ним

// ? ======= afterbegin - вставляет HTML элемент в наяало указанного элем-та (внутри)

// ? ======= beforeend - вставляет HTML элемент в конец элемента

// ? ======= afterend - вставляет HTML элемент после элемента , на одном уровне

// const block5 = document.querySelector("#block5");

// block5.insertAdjacentHTML("afterbegin", "<span>***</span>");

// block5.insertAdjacentHTML("beforeend", "<p>Текст внутри параграфа</p>");

// block5.insertAdjacentHTML(
//   "afterend",
//   '<img width="150"  src="https://cdn.britannica.com/87/2087-004-264616BB/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg"/>'
// );

// block5.insertAdjacentHTML(
//   "beforebegin",
//   '<a href="https://www.google.com">ссылка</a>'
// );

// !==================================== classList ==============================
// const block5 = document.querySelector("#block5");
// block5.classList.add("newClass");

// //? удаление класса
// block5.classList.remove("newClass");

// ? toggle - преключатель
// block5.classList.toggle("newClass");

// console.log(block5.classList.contains("newClass"));

// if (block5.classList.contains("newClass")) {
//   console.log("i have this class");
//   block5.style.color = "green";
// } else {
//   console.log("i dont have this class");
//   block5.style.color = "red";
// }

// !===================================== style ===================================
// document.getElementById("block2").style.color = "blue";
// document.getElementById("block3").style.background = "gray";

// для удаления свойства присваиваем пустую строку

// document.getElementById("block3").style.background = "";

// //? добавление стиля через атрибут

// const block4 = document.querySelector("#block4");
// block4.setAttribute(
//   "style",
//   "width: 200px; height: 21px; background-color: gold;"
// );

// const elemGroup = document.querySelectorAll(".elem");
// console.log(elemGroup);

// elemGroup[1].style.color = "aqua";

// ?  добавление стилей через object.assingn
// let styles = {
//   backgroundColor: "violet",
//   width: "200px",
//   height: "22px",
//   border: "2px solid none",
// };
// styles.borderRadius = "5px";
// const block3 = document.querySelector("#block3");
// Object.assign(block4.style, styles);

// console.log(block4.style, styles);

// ? добавление стилей через string interpolation

// let style = `
//     font-size:1em;
//     color:teal;
// transform:rotate(2deg);
//     background-color: lightgray
// `;
// document.querySelector("*").style = style;

// ! ================================   NodeList vs HTMLcollection  ===================================
//?1.)  для HTMLcolletion доступно свойство children,  которая выводит все элементы коллекции , а
//      для childnodes, которое выводит все дочерние элементы
// const list2 = document.getElementById("list");
// console.log(list.children);

// const listNode = document.querySelector("#list");
// console.log(listNode.childNodes);

//?2.)  и для HTMLcollection и NodeList доступны длина и индексация

// let li2 = document.querySelectorAll("li");
// console.log(li2.length);

// li2[1].style.color = "black";

//?3.) и тот и это можно перебрать циклом

// let li1 = document.querySelectorAll("li");

// for (i of li1) {
//   console.log(i.innerText);
// }

// const li2 = document.getElementsByTagName("li");
// for (i of li2) {
//   console.log(i);
// }

//?4.) NodeList  можно перебрать методом массива forEach
// let li1 = document.querySelectorAll("li");
// let li1 = document.getElementsByTagName("li");      // ------- ошибка

// li1.forEach((elem) => (elem.innerText = "NEW text"));

//?5.) NodeList -является статичной коллекцией , а HTML живой

// let li = document.getElementsByTagName("li");

// const ol = document.querySelector("ol");

// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   const newLi = document.createElement("li");
//   newLi.innerText = "Salamat hey";
//   ol.append(newLi);
//   console.log(li);
// });
