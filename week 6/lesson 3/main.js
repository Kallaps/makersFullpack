// !================================ стрелочные функции ================================

// function someFun(param) {
//   console.log(param);
// }

// const arfunc = (param) => console.log(param); // лучше использовать для одной функции
// arfunc("hello");

// const getSum = (x, y) => x + y;
// console.log(getSum(8, 2));

// const getSum = (x, y) => {
//   console.log("здесь функция начала работу");
//   return x + y;
// };
// console.log(getSum(2,3));

// const isNumber = (x) => (typeof x === "number" ? "yes" : "no");
// console.log(isNumber(10));

// funDeclar();                //выявит в консоль так как есть хоистинг
// arrFunction();                      //а его нет
// const arrFunction = () => {
//   console.log("arrow func");
// };
// function funDeclar() {
//   console.log("function decl");
// }

// * у стрелочных функий отсутствует обьект arguments

// function func(a, b, c) {
//   console.log(arguments);
// }

// func(1, 2, 3);

// const someFunc = (a, b, c) => {
//   console.log(arguments);
// };
// someFunc();

// let s = (km) => {
//   return km * 1000;
// };
// console.log(s(5));

// let s2 = (km) => km * 1000;

// console.log(s2(5));

//TODO 2. У вас есть массив:  const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92]; С помощью стрелочной функции отфильтруйте и создайте новый массив с числами больше 70

// const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];

// const calc = (numbers) => {
//     let num = [];
//     for (i of numbers) {
//       if (i > 70) {
//         num.push(i);
//       }
//     }
//     return num;
//   };

//   console.log(calc(numbers));

// !================================= методы обьектов ====================================

// let airplane = {
//   type: "boeing",
//   isActive: true,
//   inService: 864,
//   fly(city) {
//     console.log(`Летит в ${city} `);
//   },
//   addNew() {
//     this.inService;
//   },
// };
// // airplane.fly("Madrid");
// airplane.addNew();

// !====================================== this =============================================
// console.log(this);
// function myFunc() {
//   console.log(this);
// }
// // myFunc();
// // ? использование this внутри обьекта
// let dog = {
//   name: "Chester",
//   breed: "beagle",
//   intro: function () {
//     console.log(this.name);
//   },
// };
// dog.intro();

// let obj1 = {
//   hello: function () {
//     console.log("hello bitch");
//     return this;
//   },
//   obj2: {
//     breed: "dog",
//     speak: function () {
//       console.log("woof!");
//       return this;
//     },
//   },
// };
// console.log(obj1);      //obj1
// console.log(obj1.hello());    //hello bitch ; obj1
// console.log(obj1.obj2);

// console.log(obj1.obj2.speak()); //woof! obj2

// ? особенности стрелочных функций
// let obj = {
//   hello: function () {
//     return this;
//   },
// };

// //  arrow function
// let objArr = {
//   hello: () => this,
// };
// console.log(obj.hello());

// let airplane = {
//   type: "boeing",
//   isActive: true,
//   inService: 864,
//   fly(city) {
//     console.log(`Летит в ${city} `);
//   },
//   addNew() {
//     this.inService /= 24;
//   },
// };
// airplane.addNew();
// console.log(airplane.inService);

// let user = {
//   firsName: "Salamat",
//   sayhi() {
//     let arrow = () => console.log(this.firsName);
//     arrow();
//   },
// };
// user.sayhi();

//TODO 1. Дан объект passenger. Напишите метод для этого объекта,который возвращает информацию о пассажире. Также, напишите второй метод, который меняет значение свойства baggage на то значение, которое получает в качестве параметра.
// let passenger = {
//   firstName: "Sam",
//   lastName: "Winchester",
//   passportNum: "US12345678",
//   baggage: 20,
//   getInfo() {
//     return this;
//   },
//   newBaggage(num1) {
//     baggage = this.baggage += num1;
//   },
// };

// // Пример
// console.log(passenger.getInfo());
// passenger.newBaggage(22);
// console.log(passenger.baggage);

// Passenger Sam Winchester. Passport number is US12345678. Maximum luggage weight is 20kg
// passenger.setBaggage(30);
// passenger.getInfo(); // Passenger Sam Winchester. Passport number is US12345678. Maximum luggage weight is 30kg

// let user = {
//   firsName: "Salamat",
//   sayhi() {
//     let hi = () => console.log("Hello World");
//     hi();
//   },
// };
// user.sayhi();

// let user = {
//   firsName: "Salamat",
//   age: 27,
// };
// console.log(user.age);

// let user = {
//   firsName: "Salamat",
//   sayhi() {
//     let arrow = () => console.log(this.firsName);
//     arrow();
//   },
// };
// user.sayhi();

4;
// let user = {
//   firsName: "Salamat",
//   age: 27,
//   tellAge() {
//     let arrow = () => console.log(this.age);
//     arrow();
//   },
// };
// user.tellAge();
// ---------------------------------------------------
//  3
// let user = {
//   firsName: "Salamat",
//   speak: "Hello World",
//   sayhi() {
//     let hi = () => console.log(this.speak);
//     hi();
//   },
// };
// user.sayhi();

// let people = [
//   [[452, "Guten Tag"], true],
//   "der Apfel",
//   [" 123','345 "],
//   "Taschenreichner",
// ];
// let a = people.findIndex((item) => {
//   return item == "Taschenreichner";
// });
// console.log(a);



