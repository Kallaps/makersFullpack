// todo================================================= WHILE =================================================

// while (условие) {
//    тело цикла
// }

// let password;
// while (password !== "querty") {
//   console.log("пароль не верен");
//   password = prompt("enter password");
// }

// todo================================================ DO ... WHILE =============================================

//  do{
//     тело цикла
//  }while(условие)

// let km = 0;
// do {
//   console.log("едем");
//   km++;
// } while (km < 3);

// 1. С помощью цикла while нужно вывести на экран всех студентов, начиная с Марии и заканчивая Бекназаром.
// let students = [
//   "Aijan",
//   "Beksultan",
//   "Maria",
//   "Aidana",
//   "Argen",
//   "Askar",
//   "Beknazar",
//   "Begaiym",
//   "Aalym",
// ];

// let i = 2;
// while (i <= 6) {
//   console.log(students[i]);
//   i++;
// }

// todo=============================================== ВЛОЖЕННЫЕ ЦИКЛЫ ==============================================

// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// console.log(arr[1][1]);   //? вывод из массива при помощи консоли

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) { //? вывод из массива при помощи цикла
//     console.log(arr[i][j]);
//   }
// }

// let str = "";
// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 3; j++) str += i;
// }
// console.log(str);

// // TODO разсортировать массив из объектов на 2 массива: admin и user.
// let mixedUsers = [
//   { name: "John", role: "user", age: 20 },
//   {
//     name: "Khal",
//     role: "admin",
//     age: 24,
//   },
//   {
//     name: "Rob",
//     role: "user",
//     age: 86,
//   },
//   {
//     name: "Bronn",
//     role: "user",
//     age: 45,
//   },
//   {
//     name: "Daenerys",
//     role: "user",
//     age: 25,
//   },
//   {
//     name: "Jayme",
//     role: "admin",
//     age: 70,
//   },
//   {
//     name: "Jorah",
//     role: "user",
//     age: 34,
//   },
//   {
//     name: "Viseris",
//     role: "user",
//     age: 54,
//   },

//   {
//     name: "Catelyn",
//     role: "admin",
//     age: 60,
//   },
// ];

// let admin = [];
// let user = [];

// for (let i = 0; i < mixedUsers.length; i++) {
//   if (mixedUsers[i].role === "admin") {
//     admin.push(mixedUsers[i]);
//   } else {
//     user.push(mixedUsers[i]);
//   }
// }

// console.log("Admin:", admin);
// console.log("User:", user);

// задача 2// Есть массив с числами let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0]. Составьте программу, которая определяет кол-во отрицательных, кол-во положительных и кол-во нулей в массиве.

// let a = 0;
// let b = 0;
// let c = 0;
// let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     a++;
//   } else if (arr[i] == 0) {
//     b++;
//   } else if (arr[i] > 0) {
//     c++;
//   }
// }
// console.log("negative", a);
// console.log("zero", b);
// console.log("positive", c);

// Использую цикл for выведите все элементы в консоли. Также, проверьте, содержит ли массив число 77. Если да, то выведите "да", иначе, выведите "нет".// !Примечание: при нахождении числа 77 завершите цикл (прервать).

// let numsArray = [17, 27, 37, 47, 57, 67, 77, 87, 97];
// let contains77 = false;

// for (let i = 0; i < numsArray.length; i++) {
//   console.log(numsArray[i]);
//   if (numsArray[i] === 77) {
//     contains77 = true;
//     console.log("Yes, the array contains 77");
//     break;
//   }
// }
// if (!contains77) {
//   console.log("No, the array doesn't contain 77");
// }
// ================== task 10 ==================================
// const word = "Word";

// //? вывод из массива при помощи цикла
// for (let i = 0; i <= word.length; i++) {
//   for (let j = 1; j <= word.length; j++) {
//     if (i !== j && i < j) {
//       let res = word.slice(i, j);
//       console.log(res);
//     }
//   }
// }
// ----------------------- task 11--------------------------------------

// let num = 2;
// for (let i = 0; i < num.length; i++) {
//   console.log(num);
// }

// ------------------------------------------------------------------------
// let arr = ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == "Mirdin" || arr[i] == "Aliia") {
//     console.log(arr[i]);
//   }
// }
// ------------------------------------------------------------
// let numArr = [];
// for (let i = 1; i <= 10; i++) {
//   numArr += i;
// }
// console.log(numArr);
// ---------------------------------------------------------------
// let count = 99;
// while (count >= 50) {
//   console.log(count);
//   count--;
// }
// ----------------------------------------------------------------------
// const countries = ["USA", "RUSSIA", "KYRGYZSTAN", "KOREA", "AZERBAIJAN"];
// const result = countries.sort((a, b) => b.length - a.length);
// console.log(result);
// console.log(sortedArrayDesc);
// ------------------------------------------------------

// let arr = ["pen", "pineapple", "apple", "pen"];
// const result = arr.sort((a, b) => b.length - a.length);
// console.log(arr[0]);
// ---------------------------------------------------
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let chet = [];
// let nechet = [];

// for (let i = 0; i < num.length; i++) {
//   if (i % 2 == 0) {
//     chet.push(num[i]);
//   } else {
//     nechet.push(num[i]);
//   }
// }
// console.log(chet);
// console.log(nechet);

// --------------------------------------------------------
// let a = 0;
// let b = 0;
// let c = 0;
// let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     a++;
//   } else if (arr[i] == 0) {
//     b++;
//   } else if (arr[i] > 0) {
//     c++;
//   }
// }
// console.log("negative", a);
// console.log("zero", b);
// console.log("positive", c);

// ========================= task 8=====================================
// for (let count = 1; count <= 100; count++) {
//   if (count % 5 == 0 && count % 3 == 0) {
//     console.log(`fizzbuzz${count}`);
//   } else if (count % 3 == 0) {
//     console.log(`fizz${count}`);
//   } else if (count % 5 == 0) {
//     console.log(`buzz${count}`);
//   }
// }

// ============================= task 9 ===================================
// const users = { John: 28, Mark: 30, David: 25, Richard: 42 };
// let users2 = 0;
// for (let name in users) {
//   users2 += users[name];
// }
// console.log(users2);
// ---------------------------------------------------------------------
// let ind = 0;
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"],
// ];
// for (let ind of aboutUs) {
//   console.log(aboutUs(iterator));
// }
