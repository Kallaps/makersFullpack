// todo=========================================== Функции. Область видимости =======================================================
//  функция - это именованный блок кода , который можно использовать (вызвать по имени)

//*========================== function declaration -- именованная функция =========================

// function имя_функции(список_параметров){
//     блок кода
// }

// function funcName(name = "SSalamat") {
//   console.log(`Hello ${name} baike`);
// }
// funcName("John");
// funcName();
// funcName();
// funcName("Evelyn");
// funcName("Diana");
// funcName();

// function countUntil() {
//   for (let i = 10; i >= 1; i--) {
//     console.log(`Counter${i}`);
//   }
// }
// // countUntil();

// function countUntilFix(number) {
//   for (let i = 1; i <= number; i++) {
//     console.log(`Counter${i}`);
//   }
// }
// countUntilFix(25);

// function congratulate(firstName, lastName) {
//   console.log(`Поздравляю с днем рождения , ${firstName} ${lastName}`);
// }
// congratulate("Salamat", "Kadyroff");
// congratulate("pickle", "Kadyroff");

// congratulate("tomat", "Kadyroff");

//* =========================================== return ============================================

// function calcTriangleSquare(base, height) {
//   return (1 / 2) * base * height;
// }

// console.log(calcTriangleSquare(20, 6));
// let square = calcTriangleSquare(10, 5);
// console.log(square);

// const person = {
//   name: "Alex",
//   salary: 30000,
// };
// function givePremium(salary, percent) {
//   return (salary * percent) / 100;
// }
// console.log(givePremium(1000, 10));

// person.premium = givePremium(person.salary, 20);
// console.log(person);

// function checkAge(age) {
//   if (age > 18) {
//     return console.log("вход разрешен");
//   } else {
//     return console.log("вход запрешен");
//   }
// }
// const userAge = prompt("enter your age");
// checkAge(userAge);

// function checkType(elem) {
//   if (!elem) return;
//   console.log(`Этот обьект типа ${typeof elem}`);
// }s
// checkType([]);
// -------------------------------------
// function get_cube(num) {
//   return num ** 3;         //*возврат умножения
// }

// console.log(get_cube(2));

// TODO 1. Напишите программу на JavaScript для вычисления суммы двух заданных целых чисел. Если два значения одинаковы, то возвращается тройная их сумма.

// function checkNum(num1, num2) {
//   if (num1 === num2) {
//     return (num1 + num2) * 3;
//   } else {
//     return num1 + num2;
//   }
// }
// =================================

// console.log(checkNum(2, 2));

// function check(x, n) {
//   return x ** n;
// }

// console.log(check(2, 2));

// ------------task1------------------
// function checkTask() {
//     console.log('Hello World!')
// }
// checkTask()

// todo===================================================== Область видимости ==============================================

// function showMessage() {
//   let message = "hello, my name is Dastan";
//   console.log(message);
// }
// showMessage();
// console.log(message);

// // ? global
// let userName = "Vasya";
// function showMessage() {
//   let userName = "Petya";
//   let message = "hello " + userName;
//   console.log(message);
// }
// console.log(userName);
// // showMessage();

// todo ====================================================== object arguments ===========================================
// обьект arguments - это массивоподобный обьект, существующий только внутри (lenght  и индекссация), через данную переменную arguments млжно ссылаться на аргументы функции внутри нее

// function foo(a, b, c, d, e) {
//   console.log([...arguments]);
//   console.log(...arguments);
//   console.log(arguments[3]);
// }
// foo(10, 20, 30, 40, 50);

// function rgb(a, b, c) {
//   if ((!a, b, c)) {
//     console.log(0, 0, 0);
//   } else {
//     console.log(...arguments);
//   }
// }
// rgb(23, 100, 134);
//!=============================== task 2
// function checkTask() {
//     str = `Привет, JavaScript!`;
//     return str;
//   }

//   console.log(checkTask());
//!=============================== task 3
// function checkTask(a, b) {
//     return a + b ;
//   }
//   console.log(checkTask(2, 3));
//!=============================== task 4
// function checkTask(age) {
//     if (age >= 18) {
//       return ("Добро пожаловать");
//     } else {
//       return ("Вход запрещен");
//     }
//   }
//   console.log(checkTask(22));
//!=============================== task 5
// function checkTask(num) {
//     let check = num.toString();
//     let sum = 0;
//     for (let i = 0; i < check.length; i++) {
//       sum += parseInt(check[i]);
//     }
//     return(sum);
//   }
//!=============================== task 6
// function checktask() {
//   let checkTask1 = ["Финляндия", "Япония", "Лаос", "Испания", "Мексика"];
//   checkTask1.sort((a, b) => a.length - b.length);
//   return checkTask1;
// }
// console.log(checktask);
//!=============================== task 10

// function checkTask(str) {
//   let check = "";
//   for (let i = str.length - 1; i >= 0; --i) {
//     check += str[i];
//   }
//   return str == check;
// }
// console.log(checkTask("dovod"));
//!=============================== task 9
// function checkTask(num1, num2) {
//     let arr = [];
//     for (i = num1; i <= num2; i++) {
//       arr.push(i);
//     }
//     return (arr);
//   }
//   console.log(checkTask(1, 5));
//!=============================== task 8
// function checkTask(n) {
//     return n != 1 ? n * checkTask(n - 1) : 1;
//   }
//   console.log(checkTask(7));
