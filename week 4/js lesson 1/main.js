// =========================ПЕРЕМЕНННЫЕ====================

// TODO Пременная - это именнованое хранилище для данных
//* ключевые слова для создания переменных: var , const , let

// let name;
// let name1;
// let $name;
// let _name;
// let имя; //*не желательно
// let Name;

let name = "JavaScript";
// *НЕЛЬЗЯ создовать переменные с одинаковыми названиями

// const -
const age = 25;

// var- устаревший способ обьявления переменных
var language = "JS";
console.log(age);

// ============================= HOISTING===================
// TODO Хоистинг - это поднятие обьявления переменной

// console.log(someVar);
// const someVar = "с переменной не работает";

// var someVar2 = "Хоистинг работает только с переменной var";
// console.log(someVar2);

//*==========================Изменение данных переменной===========
// let car = "Tesla";
// console.log(car);

// car = "Mersedes";
// console.log(car);

//? const -  НЕЛЬЗЯ присвоить новое значение переменной обьявленной , при помощи const
// const brand = "Adidas";
// brand = "Nike";
// console.log(brand);

//*========================Копирование данных============================
// let student1 = "Sheraman";
// let student2 = student1;

// console.log(student1);
// console.log(student2);

// *==============================Типы данных===============================
// let id;
// console.log(typeof id); //undefined

// id = 45;
// console.log(typeof id); //number

// id = 45n;
// console.log(typeof id); //bigint

// id = "45";
// console.log(typeof id); //string

// id = null;
// console.log(typeof id); //object

// id = {
//   name: "Nuray",
//   age: 18,
//   alive: false,
// };
// console.log(typeof id);

// id = true;
// console.log(typeof id);

// id = Symbol();
// console.log(typeof id);

//*====================================Обьекты===============================

const person = {
  name: "John",
  age: 26,
  job: "FrontEnd Dev",
  car: {
    model: "Audi",
    color: "black",
  },
};

console.log(person);
console.log(person.name, person.age);
console.log(person.car.color);

let personName = person.name;
console.log(personName);
