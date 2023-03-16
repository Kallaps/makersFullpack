// !=================================== callback function =================================
//? callback - это функция , которая передается другой функции в качестве аргумета при вызове
// function callback() {
//   console.log("callbackfunction начал работу");
//   console.log("hello world");
//   console.log("callback закончил работу");
// }

// function main(callbackfunction) {
//   console.log("основная функция начала работу");
//   callbackfunction();
//   console.log("основная функция закончила работу");
// }
// main(callback);

const people = [
  { name: "Harry", age: 13, salary: 250, status: "alive" },
  { name: "Ron", age: 16, salary: 530, status: "alive" },
  { name: "Mattilda", age: 18, salary: 2500, status: "dead" },
  { name: "Hagrid", age: 43, salary: 1050, status: "alive" },
  { name: "Larry", age: 33, salary: 2400, status: "50/50" },
  { name: "Garry", age: 11, salary: 270, status: "alive" },
];

// !=========================================== forEach ===================================
//? forEach - выполняет указанную функцию один раз для каждого элемента в массиве НЕ возвращает новый массив

// Array.forEach((element, index, array)=>{
//     тело функции
// })
// people.forEach(function (person, index, array) {
//   console.log(person);
//   console.log(index);
//   console.log(array);
// });

//?сокращаем

// people.forEach((person, index) => console.log(person, index));

//!=============================================== map =====================================
//? метод map() - возвращает новый массив с результатом вызова указаной функции для каждого элемента

// const newPeople = people.map((person) => {
//   return person;
//   return "hello";
//   return `${person.name} ${person.age}`;
//   return { name: person.name, age: person.age };
//   return person.age * 4;
//   if (person.age >= 25) {
//     return { ...person, status: "died" };
//   }
//   return person;
// });
// console.log(newPeople);

//!=============================================== filter =====================================
//? он возвращает новый массив со всеми элементами , прошедшими проверку в передаваемой функции

// const adults = people.filter((person) => {
//   return person.age > 15;
//   return person.status === "alive";
//   return person.status.includes("al");
// });
// console.log(adults);

//!=============================================== includes =====================================
// ? includes - определяет , содержит ли массив опр эл

// const arr = ["Salamat", "Dastan", "Aizireck", "Baiysh"];
// let itsThere = arr.includes("Baiysh");
// console.log(itsThere);

//!=============================================== reduce  =====================================
// let amount = 0;
// for (i of people) {
//   amount += i.salary;                    // обычно
// }
// console.log(amount);

// ? reduce() - применяте функцию к каждому эл-ту массива (слева - направо) , возвращая одно результативное значение

// const amount = people.reduce((total, person) => {
//   return total + person.salary;
// }, 0);
// console.log(amount);

// let numbers = [1, 2, 3, 4, 5];
// const amount = numbers.reduce((prevVal, currVal) => {
//   return prevVal + currVal;
// }, 100);
// console.log(amount);

//!=============================================== find  =========================================
// ? метод возвращает значение первого найденного в массиве элемента , которе удовлетворяет условию , переданному в callback функции , в противном случае возвращает undefined

// const Harry = people.find((person) => person.name === "Harry");
// console.log(Harry);

//!=============================================== findIndex =========================================
// ? метод возвращает значение первого индекса найденного в массиве элемента , которе удовлетворяет условию , переданному в callback функции , в противном случае возвращает -1

// const hagridInd = people.findIndex((person) => person.name === "Hagrid");
// console.log(hagridInd);

//!=============================================== every =========================================
// ? every -  проверяет , удовлетворяет ли все эл-ты массива условию проверяющей функции

// const alive = people.every((person) => person.status == "alive");
// console.log(alive);

//!=============================================== some ============================================
// ? every -  проверяет , удовлетворяет ли хотя бы один эл-т массива условию проверяющей функции

// const hmurik = people.some((person) => person.status == "dead");
// console.log(hmurik);

// !============================================== indexOf =========================================
// ? данный метод - возвращает первый индекс соответствующий его условиям , если не найдет выведет -1

// const arr = ["Salamat", "Dastan", "Aizireck", "Baiysh", "Dastan"];
// const indof = arr.indexOf("Dastan");

// console.log(indof);

// let arrNums = [12, 21, 27, 31, 45, 50];
// arrNums.forEach((element) => {
//   if (element > 20 && element < 30) {
//     return arrNums;
//   }
// });
// console.log(arrNums);

// let arrNums = [12, 21, 27, 31, 45, 50];
// let res = arrNums.forEach((element) => {
//   if (element > 20 && element < 30)
//   {console.log(element)}
// })

// function someFunc(min){
//   if(min >0 && min <16 ){
//     console.log("первая четверть")
//   }else if ( min > 16 && min < 31){
//     console.log("вторая четверть")
//   }else if ( min > 30 && min < 46){
//     console.log("третья четверть")
//   }else if ( min > 45 && min < 60){
//     console.log("четверть четверть")
//   }else{
//     console.log("wrong")
//   }
// }
// (someFunc(10))

// let nums = [12, 10, 99, 9, 3, 2, 120, 200];
// let filt = nums.filter((num) => {
//   return num >= 10;
// });
// console.log(nums);
