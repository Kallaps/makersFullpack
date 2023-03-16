// ! =====================================   getElement/s  =============================================
// console.log(document.head);
// console.log(document.body);

let title = document.getElementsByTagName("h1");
// console.log(title);

let list = document.getElementById("list");
// console.log(list);

let li = document.getElementsByClassName("elem");
// console.log(li);

// for (let i of li) {
//   console.log(i);
// }

let block = document.getElementsByName("block");
// console.log(block);

//! ===================================   querySelector/all  =============================================
// ? querySelector - возвращает первое совпадение

// let elem = document.querySelector(".elem");
// console.log(elem);

//? querySelectorAll - возвращает все совпадения

// let elem = document.querySelectorAll(".elem");
// console.log(elem);

//? NodeList - это массивоподобная коллекция, можем перебрать коллекция методом ForEach

let elem1 = document.querySelectorAll(".elem");
let elem2 = document.getElementsByClassName("elem");

// elem2.forEach((x) => console.log(x));

// ! ========================= createElement / createTextNode / innerHTML / innerText =========================

// ? ==========================  createElem - создает новый элемент по указонному html тегу
const newDiv = document.createElement("div");
// console.log(newDiv);

//? ==========================  cteateTextNode - создай текстовый узел
let text = document.createTextNode("<p>hola</p>");
// newDiv.prepend(text);
// console.log(newDiv);

// ? ==========================  innerText -
newDiv.innerText = "текст внутри див";
// console.log(newDiv);

// ? ==========================  innerHTML -
newDiv.innerHTML = "<h1>Welcome</h1>";
// console.log(newDiv);

// ! ==================  firstElemtChild / lastElemtChild /  nextElemtSibling / previousElemtSibling  =============
const list1 = document.querySelector("#list");
// console.log(list1.firstElementChild.textContent);
// console.log(list1.lastElementChild);
// console.log(list1.lastElementChild.textContent);

//? nextPreviousSibling - выводит следующий элемент на том же уровне с элементом, к которму применен метод

const div2 = document.querySelector("#block2");
// console.log(div2.nextElementSibling); //block3

// console.log(div2.previousElementSibling); //block3

// ! ===============   добавление элементов в DOM , append , prepend / before / after   ===================

const ul = document.querySelector("ul");
// ?  a======================ppend- добавляет в конец указанного элемента
const newNode = document.createElement("li");
newNode.innerText = "Salamat baike - 30 var";

ul.append(newNode);
// console.log(ul);

// ? ======================prepend - добавляет в начало указанного элемента

const newNode2 = document.querySelector("li");
newNode2.innerText = "Anton baike - 30 var";
ul.prepend(newNode2);
// console.log(newNode2);

// ?   ======================before - помещает данные до элемента

const newNode3 = document.createElement("li");
newNode3.innerText = "hello Aizireck";
ul.before(newNode3);

// ?  ======================after- помещает данные после элемента
const newNode4 = document.createElement("li");
newNode4.innerText = "hello Dastan";
ul.after(newNode4);

//
//
//
// ?  =========================setAttribute - позволяет задать аттрибут элементу ,
//?  =========================данный метод  принимает 2 аргумента , первый - название: второе - значение

const block1 = document.querySelector("#block");
const inp = document.createElement("input");
inp.setAttribute("placeholder", "enter something");
block1.prepend(inp);

//?  =================== appendChild VS append ======================
//1) append -  принимает обьекты узла и DOMstring(текстовый узел) , в то время когда appendChild принимает только обьекты узла
//2) append - позволяет добавить несколько элементов , в то время когда как appendChild  допускает только 1 элемент

// const parent = document.createElement("div");
// const child = document.createElement("p");

// parent.append(child);
// console.log(parent);

//? =========================

// const parent = document.createElement("div");

// parent.append("Appending text");
// console.log(parent);

// ? ============== appendChild

// const parent = document.createElement("div");
// const child = document.createElement("p");
// parent.appendChild(child);
// console.log(parent);

//?----------------------------------

// const parent = document.createElement("div");

// parent.appendChild("Appending text");  //error
// console.log(parent);

// ! task 7
// var elem = document.getElementsByClassName("row");
// var style = window.getComputedStyle(elem[1]);
// console.log(style)
//

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

const block5 = document.querySelector("#block5");
