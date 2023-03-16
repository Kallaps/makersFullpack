// TODO===========================================УСЛОВНЫЕ ОПЕРАТОРЫ================================================

// =============================================if...else if....else...=============================================

// if (условие){
//     код
// }else{
//     код2 , (если условие не верно)
// }

// const age = 50;
// if (age >= 18) {
//   alert("Доступ разрешен");
// } else {
//   alert("Вам нет 18 лет, доступ закрыт");
// }

// const user = {
//     isAdmin: false
// }
// if (!user.isAdim){
//     console.log("вы не админ");
// }else{
//     console.log("вы админ");
// }

//-------------------------------------------------------------------------------
// ?================= если ни один из блоков if и else if  не возвратит true
//  ?===================== то в противном случае срабатывает блок else
//-------------------------------------------------------------------------------
// const age = 13;
// if (age > 18) {
//   console.log("доступ разрешен");
// } else if (age === 18) {
//   console.log("ну ладно , заходи");
// } else {
//   console.log("школярам тут не место");
// }

// todo==================================================ТЕРНАРНЫЙ ОПЕРАТОР=============================================================

// let sale = 31;
// let buyPhone;

// if (sale > 30) {
//   buyPhone = true;
// } else {
//   buyPhone = false;
// }

// sale > 30 ? (buyPhone = true) : (buyPhone = false);
//можно переписать простые условия if ...else на тернарный через тернарный оператор
// оператор:
// условие? (действие1 , если true) : (действие2 , если false)

// console.log(buyPhone);
// ----------------------------------------
// let marks = prompt("enter your marks");
// let result = marks >= 61 ? "pass" : "fail";
// console.log(`you ${result} the exam`);

// todo==================================================  SWITCH  ==========================================================================
// const income = 307;
// switch (income) {
//   case 100:
//     console.log("доход равен 100");
//     break;
//   case 200:
//     console.log("доход равен 200");
//     break;
//   case 300:
//     console.log("доход равен 300");
//     break;
//   case 400:
//     console.log("доход равен 400");
//     break;

//   default:
//     console.log("доход задан неверно");
// }

// ----------------------------------------------------   практика if...else

// let dayOfWeek = +prompt("Enter the number of day");
// if (dayOfWeek === 1) {
//   console.log("Monday");
// } else if (dayOfWeek === 2) {
//   console.log("Tuesday");
// } else if (dayOfWeek === 3) {
//   console.log("Wendsday");
// } else if (dayOfWeek === 4) {
//   console.log("Thursday");
// } else if (dayOfWeek === 5) {
//   console.log("Friday");
// } else if (dayOfWeek === 6) {
//   console.log("Sunday");
// } else if (dayOfWeek === 7) {
//   console.log("Saturday");
// } else console.log("r u dum?");

// ----------------------------------------------  практика switch

// switch (dayOfWeek) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("wendsday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("fridaay");
//     break;

//   default:
//     console.log("wrong");
// }
// ----------------------------------------------- пример с условиями в switch
// const num = prompt("Enter the number");

// switch (true) {
//   case num > 0 && num < 11:
//     console.log("это 1-10");

//     break;
//   case num > 11 && num < 21:
//     console.log("это 10-20");

//     break;

//   case num > 21 && num < 31:
//     console.log("это 20-30");

//     break;

//   default:
//     console.log("bye bye");
//     break;
// }
//? --------------------------------------  task на 2 варианта решения ----------------------------------------------------
// * вариант 1
// 1. Используя условынй оператор switch определите тип данных переменной x. Результат выведите в консоли.
// let x = true;
// let x = { name: "Sam" };
// let x = 123;
// let x = 'Hello World!';
// let x = [12, "str", false];

// switch (typeof x) {
//   case "number":
//     console.log(`тип данных - number`);
//     break;
//   case "object":
//     console.log(`тип данных - object`);
//     break;
//   case "string":
//     console.log(`тип данных - string`);
//     break;

//   case "boolean":
//     console.log(`тип данных - boolean`);
//     break;

//   default:
//     console.log("нет такого кейса");
//     break;
// }

//// * вариант 2 -----------------------------------------------------------

// if (typeof x === "number") {
//   console.log("тип данных x - number");
// } else if (typeof x === "object") {
//   console.log("тип данных x - object");
// } else if (typeof x === "string") {
//   console.log("тип данных x - string");
// } else if (typeof x === "null") {
//   console.log("тип данных x - null");
// } else if (typeof x === "undefined") {
//   console.log("тип данных x - undefined");
// } else if (typeof x === "undefined") {
//   console.log("тип данных x - undefined");
// } else if (typeof x === "boolean") {
//   console.log("тип данных x - boolean");
// } else {
//   console.log("нет такого кейса");
// }

//? --------------------------------------  task на 2 варианта решения ----------------------------------------------------
// 2. Используя тернарный оператор выведите в консоли прогноз погоды. К примеру, если переменная temperature < 0, вывести "Температура воздуха опустится до ${temperature} градусов", в остальных случая вывести  "Температура воздуха поднимется до ${temperature} градусов"

// let temperature = 9;

// * вариант 1----------------------------------------------------------------

// if (temperature < 0) {
//   console.log(`Температура воздуха опустится до ${temperature} градусов`);
// } else {
//   console.log(`Температура воздуха поднимется до ${temperature} градусов`);
// }

// * вариант 2----------------------------------------------------------------

// temperature < 0
//   ? console.log(`Температура воздуха опустится до ${temperature} градусов`)
//   : console.log(`Температура воздуха поднимется до ${temperature} градусов`);

// ? -----------------task---------------------

// *----------------------------------------- №7---------------------------------

// let favDrink = "pepsi";
// b = "beer";
// c = "vodka";
// d = "coffee";
// e = "milk";
// switch (favDrink) {
//   case "pepsi":
//     favDrink = b || c;
//     console.log("Чрезмерное употребление алкоголя вредит вашему здоровью");
//     break;
//   case "pepsi":
//     favDrink = c;
//     console.log("Кофеин вреден для сердца");
//     break;
//   case "pepsi":
//     favDrink = e;
//     console.log("Поздравляю! Молоко очень полезное");
//     break;

//   default:
//     console.log("К сожалению такого напитка нет в списке");
// }

//-------------------------------------- №2-------------------------------------------
// let stroka = 987456;
// stroka[0 + 1 + 2] === stroka[3 + 4 + 5] ? console.log("нет") : console.log("да");

//------------------------------------- №10---------------------------------------------
// let firstNum = 7;
// let secondNum = 4;

// if (firstNum + secondNum > 10 && firstNum + secondNum < 20) {
//     console.log ((firstNum + secondNum) * 5);
// }else if(firstNum + secondNum > 20 && firstNum + secondNum < 50) {
//     console.log((firstNum + secondNum) / 3)
// }else{
//    console.log((firstNum + secondNum) + 10)
// }

//-------------------------------------- №12--------------------------------------------
// let a1 = 3;
// let a2 = 4;
// let a3 = 5;

// sum = Math.max(a1, a2, a3)
// console.log(sum)

// -----------------------------------------№16--------------------------------------------
// let variable = 22;
// typeof variable ==="object" ? console.log("объект является ссылочным типом данных") : console.log(`тип ${typeof variable} является примитивным типом данных`)

//--------------------------------------- №17------------------------------------------
// let num = prompt('Choose from 1 to 4');

// switch (num) {
// case 1:
//     console.log("осень");
//  break;
// case 2:
//     console.log("зима");
//     break;
// case 3:
//     console.log("весна");
//     break;
// case 4:
//     console.log("лето");
//     break
// default:
//     console.log("wrong")

// -------------------------------------№18---------------------------------------
// let user = {
//     name:"Riko" ,
//     age: 10
//   }

//   if (user.age < 17){
//       console.log(`Привет, меня зовут ${user.name} и я не совершеннолетний`)
//   }else{
//       console.log(`Привет, меня зовут ${user.name} и это мой первый код`)
//   }

// ------------------------------------------- task 26------------------------------
// let obj1 = { title: "Hello world" };
// let obj2 = { title: "Hello world" };

// if (obj1 === obj2) {
//   cosole.log("Объекты равны");
// } else {
//   console.log("Объекты не равны, т.к объект - ссылочный тип данных");
// }

// if (obj1.title == obj2.title) {
//     console.log("названия одинаковые");
// } else {
//     console.log("названия не одинаковые");
// }
//--------------------------------------------task 22-------------------------------
// let user = {
//     name: "World",
//     age: 25,
//     status: "student",
//     class: "JS-54",
//     school: "Makers",
//   };

//   if (user.age >= 20 && user.status == "student" && user.school == "Makers") {
//     console.log(
//       `Привет, меня зовут ${user.name} и я студент в ${user.school} классе ${user.class}`
//     );
//   } else {
//     console.log(`Привет, меня зовут ${user.name} и мне ${user.age} лет`);
//   }
// -------------------------------------- task 20-------------------------------------
// let string = "hksjkefkhfkjehfjfkhfkjhkfhksfhjkhskfhkjfhskjhskjfhsjkffk";
// isUpperCase = string.toUpperCase() == string;
// console.log(isUpperCase);

// -----------------------------------------task 23-------------------------------------
// let minute = 7;
// if (minute > 0 && minute < 15){
//     console.log("1")
// }else if(minute >= 15 && minute < 30){
//     console.log("2")
// }else if(minute >= 30 && minute < 45){
//     console.log("3")
// }else if(minute >= 45 && minute <= 60){
//     console.log("4")
// }else{
//     console.log("Число не верное")
// }
// ------------------------------------------------------------------------------
// let num = 212121;
// num[0 + 1 + 2] == num[3 + 4 + 5] ? console.log("true") : console.log("false");

// ----------------------------------------task 25------------------------------------------
// let month = 2;
// if (month >= 1 && month <= 2) {
//   console.log("зима");
// } else if (month >= 3 && month < 6) {
//   console.log("весна");
// } else if (month >= 6 && month < 9) {
//   console.log("лето");
// } else if (month >= 9 && month <= 11) {
//   console.log("осень");
// } else if (month == 12){
//   console.log("зима");
// }else{
//     console.log("Число не верное")
// }
// ----------------------------------------- task 24------------------------------------------------------

// let num = 111111;
// num = String(num);

// let left = +num[0] + +num[1] + +num[2];
// let right = +num[3] + +num[4] + +num[5];

// if (left == right) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// num = Number(num);
// console.log(typeof num);

// -------------------------------------------- task 20-------------------------------
// let string = "string"

// switch(string) {
//     case (string.toLowerCase()):
//     console.log(string.toUpperCase());
//     break;
//     case (string.toUpperCase()):
//     console.log(string.toLowerCase());
//     break;
// }

// ------------------------------------------task 21--------------------------------

//

// let lang = "en"
//  lang === "en" ? console.log("his is english") :  lang === "ru" ? console.log("Это русский") : lang === "de" ? console.log("Das ist Deutsch") : console.log("Бул кыргыз тили")

// --------------------------------------------task 27------------------------
// let data = 3;
// if (typeof data == "number" || typeof data == "boolean") {
//   console.log("It's number") || console.log("It's boolean ");
// } else {
//   console.log("It's not number and boolean ");
// }
// ----------------------------------------------task 29----------------------------------
// let data = "hello";
// if (typeof data == "number") {
//   console.log(`${data} - это число`);
// } else if (typeof data == "string" && +data) {
//   console.log(`${data} - это строка, в которой лежит число`);
// } else {
//   console.log("Необработанный случай");
// }
// ?=======================================================новые такски===========================================

// ------------------------task 1------------------------
// let arr = ['1,2,3']
// arr.unshift(4,5,6,)let arr = ["Apple", "Orange", "Banana", "Pineapple", "Cherry"]

// console.log(arr)
//-------------------------task 8-----------------------------
// let arr = ["Apple", "Orange", "Banana", "Pineapple", "Cherry"] 
// let res = arr.sort((a, b)=>a-b)
// console.log(res[0])
// console.log(res)