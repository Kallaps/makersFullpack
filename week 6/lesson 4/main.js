// TODO 3. Создайте объект calculator (калькулятор) с тремя методами: read() (читать) запрашивает два значения и сохраняет их как свойства объекта. sum() (суммировать) возвращает сумму сохранённых значений. mul() (умножить) перемножает сохранённые значения и возвращает результат
// let calculator = {
//     num1: 5,
//     num2: 2,
//     read: function() {
//       this.num1 = +prompt("Enter the first number: ");
//       this.num2 = +prompt("Enter the second number: ");
//     },
//     sum: function() {
//       return this.num1 + this.num2;
//     },
//     mul: function() {
//       return this.num1 * this.num2;
//     }
//   };
//   calculator.read()

// !====================================== object.keys() ============================================
// ? возврашает массив из ключей обьекта

// let obj = {
//   name: "Alex",
//   age: 22,
//   bool: true,
//   zero: null,
// };

// let objKeyes = Object.keys(obj);
// console.log(objKeyes);

// ?Object.values() - возврашает массив из значений обьекта
// console.log(Object.values(obj));

// ? Object.assign() - обьеденяет свойства нескольких обьектов и возврашает один обьедененный

// const name = {
//   firstName: "Phillip",
//   lastName: "Fry",
// };
// const details = {
//   job: "Delivery boy",
//   employer: "Poy express",
// };

// const character = Object.assign(name, details);
// console.log(character);

// Задание 5
// Напишите функцию checkTask(), которая принимает целое число и возвращает сумму всех его цифр.
// Например, для числа 456, функция должна вернуть:
// 15
// так как 4 + 5 + 6 = 15
// function checkTask(num) { 45678
//     let check = num.toString();
//     let sum = 0;
//     for (let i = 0; i < check.length; i++) {
//       sum += check[i]
//     }
//     return sum;
//   }
//   console.log(checkTask(456));

// TODO 1. Создайте функцию, которая принимает число и возвращает его противоположное значение.  Пример: input: 20, output: -20
// function checkTask (num) {
//     return -num;
//   }
//   console.log(oppositeNumber(20)); // -20
//   console.log(oppositeNumber(-20)); // 20

// TODO 2.Вы пишете код для управления светофорами в вашем городе. Вам нужна функция для обработки каждого изменения с зеленого на желтый, на красный, а затем снова на зеленый. Завершите функцию, которая принимает строку в качестве аргумента, представляющую текущее состояние источника света, и возвращает строку, представляющую состояние, в которое свет должен измениться. Например, когда вход зеленый, выход должен быть желтым.

// function svetofor(color) {
//   if (color == "green") {
//     return "next color is yellow";
//   } else if (color == "yellow") {
//     return "next color is red";
//   } else if (color == "red") {
//     return "next color is green";
//   }
// }
// console.log(svetofor("green"));

// TODO 3.Напишите функцию для преобразования имени в инициалы. Аргумент в видес строки  строго состоит из двух слов с одним пробелом между ними. На выходе должны быть две заглавные буквы с точкой, разделяющей их. Это должно выглядеть так:

// Sam Harris => S.H

// patrick feeney => P.F

// function getInitials(name) {
//   let words = name.split(" "); //  'patrick feeney' => ['paterick','feeney'];
//   let firstInitial = words[0][0].toUpperCase();
//   let secondInitial = words[1][0].toUpperCase();
//   return firstInitial + "." + secondInitial;
// }
// console.log(getInitials("John Doe"));
// console.log(getInitials("Maria Smith"));

/*

let products = ["milk", "potato", "candy", "nurayka"];
let metodFind = products.find((perebiraemyiElement) => perebiraemyiElement === 'potato'); 
console.log(metodFind);
*/
// -------------------------------------------
// function balls(a,b,c){
//     let res =(a+b+c)/3
//     if(res>=90 &&res<=100) return 'A'
//     else if(res>=80 &&res<90) return 'B'
//     else if(res>=70 &&res<80) return 'C'
//     else if(res>=60 &&res<70) return 'D'
//     else if(res>=0 &&res<60) return 'F'
//  }
//  console.log(balls(34,56,99));
// -------------------------------------------

// function func(email, password) {}

// const func = () => {};

// function countDown(n) { 5
//   let arr = [];
//   for (let i = n; i >= 1; i--) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(countDown(5)); // [5, 4, 3, 2, 1]
// console.log(countDown(3));

// TODO 7. Нэйтэн любит кататься на велосипеде. Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде. Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения. Например:
// 10
// 0.5
// 0.5 * 11 = 5.5;
// Math.floor(5.5) => 5
// Math.ceil(5.5) => 6

// время = 3 ----> литр = 1
// время = 6,7 ---> литров = 3
// время = 11,8 --> литров = 5

// let check = (time) => {
//   let res = time / 2;
//   return Math.floor(res);
// };

// console.log(check(11.7));
// ---------------------------------------------
// TODO 8. создайте функцию, которая берет список неотрицательных целых чисел и строк и возвращает новый список  только с числами.
// let arr = [1, 2, 3, 4, "hello", "hdh"];

// function check() {
//   let arr2 = [];
//   for (i of arr) {
//     if (typeof i == "number") {
//       arr2.push(i);
//     }
//   }
//   return arr2;
// }
// console.log(check(arr));

// function checkTask(num) {
//   return parseInt(
//     num
//       .toString()
//       .split("")
//       .sort((a, b) => b - a)
//       .join("")
//   );
// }
// console.log(checkTask(4213));
// console.log(checkTask(123456789));

// TODO 10. Вам будет дан массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение. Массив может содержать числа или строки. Х может быть любым. Возвращает true, если массив содержит значение, и false, если нет.

// const check = (x, y) => {
//   if (x.includes(y)) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(check([1, 2, 3], 4));
// --------------------------------------
// let arr2 = [14, 5, 6, 7];
// function name4(arr, x) {
//   for (const i = 0; i < arr.length; i++) {
//     if (arr[i] == x) {
//       return "true";
//     } else {
//       return "false";
//     }
//   }
// }
// console.log(name4(arr2, "14"));

// function fromCtoF(c) {
//   let res = (c * 9) / 5 + 32;
//   return res;
// }

// const fromCtoF = (c) => (c * 9) / 5 + 32;
// console.log(fromCtoF(10));

// Объявите объект job со свойствами position, paid, isAvailable, showDetails().
// isAvalable хранит булевое значение, в случае true будет выдаваться
// 'currently it is available', а если false то 'curruntly it is not available'.
// А showDetails() должен описывать данный объект.
// Создайте несколько объектов с помощью метода Object.create().

// let job = {
//   position: "painter",
//   paid: 100000,
//   isAvailable: true,
//   showDetails: function () {
//     console.log(
//       `Am I available? ${this.isAvailable}, my position is ${this.position} and i would like to be paid ${this.paid}`
//     );
//   },
// };
// const opisanie = Object.create(job);
// opisanie.isAvailable = true;
// opisanie.position = "painter";
// opisanie.paid = 100;
// opisanie.showDetails();

// function checkTask(str) { // hello
//   let result = [];
//   let result2 = [];
//   for (let i in str) {
//     if ("aeuoi".includes(str[i])) {
//     } else { // h
//       result2.push(str[i].toUpperCase()); //
//     }
//   }

//   // ['H', "L", "L"].join('') = 'HLL'
//   return result2.join('')
// }
// // checkTask("hello");
// checkTask(result2("hello"));
// ! task 12--------------------------
// function checkTask(num1, num2) {
//   let count = []; // 2000
//   for (let num = num1; num <= num2; num++) { // 2000
//     if (num % 2 == 0) {
//       count.push(num);
//     }
//   }
//   return count;
// }
// console.log(checkTask(2000, 2009));

// ! task 13----------------------------
// function checkTask(){
//   let result = [];
//   // 12345678
//   for(let i = 0; i < 8; i++){
//     if(i <  4){
//         let character;
//         character = Math.random()
//         result.push(`${character}`[5])
//     } else if (i === 4 || i === 5) {
//        let string = 'qwertyadsfghzxcvbnipoklm';
//         let number = `${Math.random()}`[5] //7
//         result.push(string[number].toUpperCase())
//     } else {
//         let string = 'qwertyadsfghzxcvbnipoklm';
//         let number = `${Math.random()}`[5] // 7
//         result.push(string[number])
//     }

//   }

//   console.log(result.join(''))
//   return result.join('')
// }

// checkTask()

// function checkTask(str) {
//   let count = 0;
//   let minutes = 0;
//   for (i of str) {
//     switch (i) {
//       case "с":
//         count++;
//         break;
//       case "ю":
//         count--;
//         break;
//       case "з":
//         count += 2;
//         break;
//       case "в":
//         count += 2;
//         break;
//     }
//     minutes++;
//   }
//   return count == 0 && minutes == 10;
// }
// console.log(checkTask("сюсюсюсюсю"));
