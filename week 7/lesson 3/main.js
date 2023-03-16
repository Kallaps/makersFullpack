//!====================================== Десруктуризация ===========================================
//? =====================  массив

// const arr = [100, 200, 300, 400, 500];
// let [a, b, d, c, e] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let arr2 = ["Tyler", "Josh", "Travis"];
// let [person1, person2, person3] = arr2;

// console.log(person2);
//? дуструктуризация - не уничтожает массив и вообще никак не мутирует массив

//? задача деструктуризации - только скопировать значения в переменные, просто короткий вариант записи

//? порядок имеет знаечение

//!======================================== rest operator =================================================
// let food = ["eggs", "butter", "milk", "bred", "kaimak"];
// let [item1, item2, ...rest] = food;
// console.log(item1);
// console.log(item2);
// console.log(...rest);
// console.log(...rest[2]);  // kaimak

//?======================= подмена значений

// let a = 1;
// let b = 2;

// let temp = a; //1
// a = b; //2
// b = temp; //1
// console.log(a);
// console.log(b);

// *---------------

// let a = 11;
// let b = 2;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//?=========================== значение по умолчанию

// const colors = ["black"];
// const [firstColor, secondColor = "blue"] = colors;
// console.log(firstColor);

//! ================================ деструктуризаци обьектов =======================================

// let artist = {
//   name: "Travis",
//   lastName: "Scott",
//   position: "rapper",
// };

// let { name, lastName, position } = artist;
// console.log(name);
// console.log(lastName);
// console.log(position);

//? =====================перезапись ключей в переменные

// let {
//   name: hisName,
//   lastName: hisLastName,
//   position: hisPosition,
//   wife = "Kalye",
// } = artist;

// console.log(hisName);
// console.log(wife);
// console.log(hisPosition);
// console.log(hisLastName);

//! ======================================== Деструктуризация строки ==================================
// let [str1, str2, , , , str3] = "plus ultra";

// let arr3 = [1, 2, 3, 4];
// let [el1, el2, , el3] = arr3;

// console.log(str1, str2, str3); // p l u

// console.log(el3);

//!===========================================  spread ================================================

// let somearr = ["hello", "bye", "good"];

// let somearr2 = [10, ...somearr, 20];
// console.log(somearr2);

//? =========== поверхносная копия

// let somearr3 = [...somearr];

// console.log(somearr3);

// somearr3.push(1000);
// console.log(somearr3);

// ?================ конкатенация

// let a = [20, 30];
// let b = [100, 200];

// let somearr4 = [...b, ...a];
// console.log(somearr4);

//? ==================== строка

// let letters = "abcde";
// let somearr5 = [...letters]; //split
// console.log(somearr5);

//? =======================обьекты

// let obj1 = {
//   name: "Tyler",
//   age: 30,
// };

// let obj2 = {
//   name1: "Salamat",
//   age1: 31,
// };

// let obj3 = {
//   ...obj1,
//   ...obj2,
// };
// console.log(obj3);

//? ========================= Добавление свойств в обьект

// obj2.lastName = "Kadyrof";       //обычно
// console.log(obj2);
// -----------------------
// let obj4 = { ...obj2, status: true };        //  вот так
// console.log(obj4);

//!========================================= ... rest =========================================

// function someFunc(a, ...b) {
//   console.log(a);
//   console.log(b);
// }
// someFunc(1, 2);
// someFunc(3, 4, 5, 6, 7);
// someFunc(9, 10, [23, 43], 7, true);

//! ========================================  JSON.parse() && JSON.stringify()  ========================================

// const car1 = { color: "red", wheels: { amount: 4 } };

// let car2 = { ...car1 };

// car2.wheels.amount = 5;
// console.log(car1);

//-------------------------------

// const car1 = { color: "red", wheels: { amount: 4 } };
// let car2 = JSON.parse(JSON.stringify(car1));
// // let car2 = JSON.stringify(car1);

// car2.wheels.amount = 500;

// console.log(car2);

// console.log(car1);

//?=======================

// let user1 = {
//   name: "Dastan",
//   sayHello: function () {
//     console.log(this.name);
//   },
// };
// // user1.sayHello();
// let user2 = { ...user1 };
// user2.sayHello();
// console.log(user2);

//!============================================ Вложенная деструктуризация ===================================

// let person1 = {
//   name: "Jack",
//   age: 19,
//   favoriteFood: ["Lagman", "Manty"],
//   pet: {
//     name: "Sharik",
//     age: 2,
//   },
//   study: {
//     university: "KSTU",
//     subjects: ["Math", "Literature"],
//     location: {
//       str: "Manas str 66",
//       city: "Bishkek",
//     },
//   },
// };

// let {
//   favoriteFood: [food1, food2],
//   pet: { name: petName },
//   study: {
//     university,
//     subjects: [, Literature],
//     location: { city, index = "543222" },
//   },
// } = person1;
// console.log(
//   `${food1} and ${food2}, ${petName},${university},${Literature},${city},${index}`
// );

//todo get: lagman and manty, sharik, KSTU, Literature, Bishkek, mail index

let wizard = {
  name: "Harry",
  lastname: "Potter",
  born: {
    date: "31 July 1980",
    country: "England",
  },
  friends: [
    {
      name: "Hermione",
      age: 12,
    },
    {
      name: "Ron",
      age: 11,
    },
  ],
  study: {
    school: "Hogwarts",
    subjects: ["Charms", "History of Magic", "Flying"],
  },
};

//todo get: Harry, Potter, 31 July 1980, England, Hermione, 12, Ron, 11, Hogwarts, Charms, History of Magic, Flying, Gryffindor
// let {
//   name,
//   lastname,
//   born: { date, country },
//   friends: [{ name: fName1, age: fAge1 }, { name: fName2, age: fAge2 }],
//   study: {
//     school,
//     subjects: [el1, el2, el3],
//   },
// } = wizard;

// console.log(
//   `${name},${lastname},${date},${country},${fName1},${fAge1},${fName2},${fAge2},${school},${el1},${el2},${el3}`
// );

// function checkTask(num) {
//   let check = num.map((num) => num ** 2);
//   return check;
// }
// console.log(checkTask([2, 3, 6]));

// let person = { name: "", age: "" };
// let { name = "Luck", age = "22" } = person;
// console.log(name, age);

// !  task 4 методы массива
// const checkTask = (arr) => {
//   let maxNum = 0;
//   for (num of arr) {
//     if (num > maxNum) {
//       maxNum = num;
//     }
//   }
//   return maxNum;
// };
// checkTask([4, 15, -4, 27, 12, 8]);

// ! task 10
// const checkTask = (arr) => {
//   let res = 0;
//   arr.reduce((acc, curr) => {
//     if (acc == 0) {
//       res = 0;
//     } else if (curr == 0) {
//       res = acc;
//     } else {
//       return acc + curr;
//     }
//   });
//   console.log(res);
// };
// checkTask([1, 2, 3, 0, 4, 5, 6]);

// const checkTask = (arr) => {
//   arr.forEach((string) => {
//     if (string.includes("<h1>")) {
//     }
//   });
// };

// !========= task 2
// let fullName = "Albert Einstein";
// function checkTask(fullName) {
//   let arr = fullName.split(" ");
//   let [firstName, lastName] = arr;
//   arr.join(" ");
//   console.log(firstName, lastName);
// }

// checkTask(fullName);

let fullName = "Albert Einstein";
function checkTask(fullName) {
  let obj = { firstName: "Albert", lastName: "Einstein" };
  return obj;
}

console.log(checkTask(obj));
