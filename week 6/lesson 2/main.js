// !=============================================== hoisting ======================================================

// const name = "James";

// let info = {
//   age: 32,
//   country: "Georgia",
// };

// var city = "Bishkek";

// function sum(x, y) {     //hoisting работает до инициализации
//   return x + y;
// }
// console.log(sum(20, 3));

// !=============================================== function expression ============================================
// ? function expression - функциональное выражение - анонимная функция

// const переменная = function(){
//     тело_функции
// }

// функция может быть вызвана сразу после создания
// let triple = (function () {
//   console.log(5 * 3);
// })();

// const triple = function (num) {
//   return 3 * num;
// };

// console.log(triple(8));

//!========== arguments ======================

// const test = function (a, b, c) {
//   for (let i of arguments) {
//     console.log(i);
//   }
// };
// test(1, 444, 22);
// --------------------------------
// const task = function (sum) {
//   return sum ** 2;
// };
// console.log(task(2));

// const task = function (num) {
//   if (num > 0 && num < 2) {
//     return "понедельник";
//   } else if (num > 1 && num < 3) {
//     return "вторник";
//   } else if (num > 2 && num < 4) {
//     return "среда";
//   } else if (num > 3 && num < 5) {
//     return "четверг";
//   } else if (num > 4 && num < 6) {
//     return "пятница";
//   } else if (num > 5 && num < 7) {
//     return "суботта";
//   } else if (num > 6 && num < 8) {
//     return "воскресенье";
//   }
// };

// console.log(task(4));

// let avg1 = 0;
// const avg = function (a, b, c, d, e) {
//   for (i = 0; i < arguments.length; i++) {
//     avg1 += arguments[i];
//   }
//   return avg1 / arguments.length;
// };
// console.log(avg(4, 4, 4, 4));

// let calc = function (m, n, o) {
//     if (o == "+") return m + n;
//     else if (o == "-") return m - n;
//     else if (o == "*") return m * n;
//     else if (o == "/") return m / n;
//   };
//   console.log(calc(3, 2, "*"));

// const vowelCount = function (str) {
//   let vowel_list = "aeiouAEIOU";
//   let count = 0;
//   for (i of str) {
//     for (let j of vowel_list) {
//       if (i == j) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
// console.log(vowelCount("The quick brown fox"));

//TODO Запишите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты. Например, для [1, 2, 2] он должен вернуть 9, потому что 1^2 + 2^2 + 2^2 = 9

// let a = function () {
//   let res = 0;
//   for (i of arguments) {
//     res += i ** 2;
//   }
//   return res;
// };
// console.log(a(2, 3, 2));

// Создать функцию, которая будет принимать 3 числа в качестве аргументов, функция должна возвращать сумму первых двух чисел разделеную на третье число(использовать function declaration, а также реализовать проверку на то, что третье число не является нулем, если это ноль, то просто возвратить результат сложения первого и второго числа)
//! 1
// let num = function (m, n, o) {
//   if (o !== 0) {
//     return (m + n) / o;
//   } else if (o == 0) {
//     return m + n;
//   }
// };
// console.log(num(4, 2, 0));

//! 3.
// Создать калькулятор используя функции, должны быть доступны операции(+, -, /, *), также должна быть функция-менеджер, которая будет принимать 2 числа и операцию, а затем вызывать нужную функцию и возвращать результат

// let calc = function (m, n, o) {
//   if (o == "+") return m + n;
//   else if (o == "-") return m - n;
//   else if (o == "*") return m * n;
//   else if (o == "/") return m / n;
// };
// console.log(calc(3, 110, "*"));
// ------------------------------------------------------------
//! 4.
// Дан массив с объектами
// задача, создать функцию, которая будет рассылать сообщения пользователям, сообщая о акции в магазине компьютерной техники, отправлять сообщения нужно только тем людям, которые тем или иным образом относятся к IT-сфере

// let users = [
//   { name: "Jack", age: 35, work: "IT-backend developer" },
//   { name: "Helen", age: 35, work: "Nurse" },
//   { name: "Bob", age: 35, work: "Driver" },
//   { name: "Jessica", age: 35, work: "IT-frontend developer" },
//   { name: "Hel'ga", age: 35, work: "IT-HR" },
// ];
// let findIT = function (arr) {
//   for (i of arr) {
//     if (i.work.includes("IT")) {
//       console.log("акции в магазине компьютерной техники");
//     }
//   }
// };
// findIT(users);
// ------------------------------------------------------------
//!8.
// задача, создать фуункцию, которая будет в качестве аргумента принимать массив такого вида как указан выше, и будет возвращать отсортированный массив(сортировать по убыванию оценок, используйте sort())
// let students = [
//   { student: "Jack", marks: 43 },
//   { student: "Tom", marks: 92 },
//   { student: "Helen", marks: 85 },
//   { student: "Peter", marks: 58 },
//   { student: "Jessica", marks: 78 },
// ];
// function sortArr(arr) {
//   let res = arr.sort((a, b) => b.marks - a.marks);

//   return res;
// }
// console.log(sortArr(students));
//-----------------------------------------------------------
//! 5

// Создать функцию, которая будет рассчитывать расход топлива автомобиля, будет принимать 2 аргумента 1-й сколько всего километров проехали, второй сколько понадобилось топлива на это, затем функция должна рассчитать сколько ушло топлива на 100 км и вернуть результат вида: 'На 100км было расходовано 10л горючего'

// let rashod = function (km, toplivo) {
//   let schet = (toplivo / km) * 100;
//   return `На ${km} km. было расходовано ${schet} л. горючего `;
// };
// console.log(rashod(70, 10));
// -------------------------------------------------------------

//! 6.
// Расчет премии сотрудникам, дан массив с объектами
// let employees = [
//   { name: "Jack", salary: 10000, overTime: 4 },
//   { name: "Tom", salary: 15000, overTime: 3 },
//   { name: "Jessica", salary: 20000, overTime: 9 },
//   { name: "Helen", salary: 25000, overTime: 2 },
//   { name: "Peter", salary: 30000, overTime: 7 },
// ];
// let findExtraCash = function (newKey) {
//   for (i of employees) {
//     let res = (i.salary = i.salary + i.overTime * 200);
//   }
//   console.log(employees);
// };
// findExtraCash(employees);

// salary- это заработная плата в месяц, overTime- количество часов, которое сотрудник взял сверхурочно, задача: создать функцию, которая будет добавлять к основной зарплате сверхурочное время(1час=200$), функция должна принимать массив с объектами и возвращать также массив, но уже с измененными данными пример: [{name: 'Jack', salary: 10000, overTime: 4}] -> [{name: 'Jack', salary: 10800}]

// -------------------------------------------------------------------
//!7

// Создать функцию, которая в качестве аргумента будет принимать массив со строками и числами, задача, отсортировать числа в отдельный массив, а строки в отдельный и распечатать оба массива

// const aralash = [1, 2, 3, "a", "b", "c"];
// const nums = [];
// const words = [];
// for (let i of aralash) {
//   if (typeof i == "number") {
//     nums.push(i);
//   } else {
//     words.push(i);
//   }
// }
// console.log(nums);
// console.log(words);
// ------------------------------------------------------------------------
// !2
function checkTask(arr, cases) {
  let newArr = [];
  for (let i of arr) {
    if (cases == "lowercase") {
      newArr.push(i.toLowerCase());
    } else if (cases === "upperCase") {
      newArr.push(i.toUpperCase());
    }
  }
  return newArr;
}
console.log(checkTask(["DIAnA", "sALAmAt", "ChUpappI"], "lowercase"));
