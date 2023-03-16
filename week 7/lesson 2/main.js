//TODO У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// let users = [
//   { name: "John", age: 41 },
//   { name: "Robert", age: 42 },
//   { name: "Bran", age: 37 },
//   { name: "Varis", age: 26 },
//   { name: "Bronn", age: 24 },
// ];

//   let names = users.map((x) => x.name);
//   console.log(names);

//TODO Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст. Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// function nana(user) {
//   let amount = user.reduce((total, perosn) => {
//     return total + perosn.age / user.length;
//   }, 0);
//   return amount;
// }
// console.log(nana(users));

//TODO Дан массив с числами. Проверьте то, что все элементы в массиве положительные every
// let arr = [5, 6, 7, 8, 9];
// let arrPos = arr.every((x) => x > 0);
// console.log(arrPos);

//TODO  Дан массив с числами. напишите фунцию, которая вернет новый массив только с  отрицательными числами
// let arr = [113, -32, 542, 654, -711, 888, 987, -110];

// function number(arr) {
//   let result = arr.filter((num) => num < 0);
//   console.log(result.length);
// }

// number(arr);

// TODO вернуть сумму полож-х чисел (filter, reduce)

// const input = [1, -4, 12, 0, -3, 29, -150, 1];
// let sumPos = input.filter((x) => x > 0).reduce((a, b) => a + b);
// console.log(sumPos);

// TODO Используйте метод .map() для массива героев, чтобы вернуть новый массив. Новый массив должен переименовать ключ «name» в «hero». Ключ «name» не должен появляться в новом массиве. В новый массив должен быть добавлен новый ключ с именем (id). Ключ 'id' должен основываться на индексе.

// const heros = [
//   { name: "Spider-Man" },
//   { name: "Thor" },
//   { name: "Black Panther" },
//   { name: "Captain Marvel" },
//   { name: "Silver Surfer" },
// ];

// //! OUTPUT

//   [
//     { id: 0, hero: 'Spider-Man' },
//     { id: 1, hero: 'Thor' },
//     { id: 2, hero: 'Black Panther' },
//     { id: 3, hero: 'Captain Marvel' },
//     { id: 4, hero: 'Silver Surfer' },
//   ];

// let = newHeros = heros.map((e, i, arr) => {
//   return { id: i, hero: e.name };
// });
// console.log(newHeros);

// TODO 1 Начиная с массива, содержащего числа от 1 до 10, используйте filter, map чтобы получить следующее. Используйте console.log для отображения результатов. Массив нечетных чисел. Массив чисел, делящихся на 2 или 5. Массив чисел, делящихся на 3, а затем возведенных в квадрат этих чисел.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let neChet = arr.filter((x) => x % 2 !== 0);
// console.log(neChet);

// let twoFive = arr.filter((x) => x % 2 == 0 || x % 5 == 0);
// console.log(twoFive);

// let three = arr.filter((x) => x % 3 == 0).map((item) => item ** 2);
// console.log(three);

// TODO 2 Создайте функцию , которая принимает в аргументы массив состоящий из чисел. Функция должна вывести количество положительных чисел в этом массиве.
// const arr = [1, -10, 99, 5, 66, -7, -954, 31, 413];
// let pos = arr.filter((x) => x > 0);
// console.log(pos.length);

// TODO 3 Вам дан массив волшебников из Хогвартса, вам необходимо получить массив состоящий только из имен участников Гриффиндора
// let wizards = [
//   { name: "Harry Potter", house: "Gryfindor" },
//   { name: "Cedric Diggory", house: "Hufflepuff" },
//   { name: "Tonks", house: "Hufflepuff" },
//   {
//     name: "Ronald Weasley",
//     house: "Gryfindor",
//   },
//   {
//     name: "Hermione Granger",
//     house: "Gryfindor",
//   },
// ];
// let Gryfindors = wizards
//   .filter((x) => x.house == "Gryfindor")
//   .map((x) => x.name);
// console.log(Gryfindors);

// let a = wizards.reduce((total, item) => {
//   if (item.house == "Gryfindor") {
//     total.push(item.name);
//   }
//   return total;
// }, []);
// console.log(a);

// TODO 5 Напишите функцию, которая принимает строку(фамилия, имя, Отчество) и возвращает инициалы, решить задачу используя сложные метод map

// let str = "Java Script !";
// function a(str) {
//   let res = str
//     .split(" ")
//     .map((item) => item[0])
//     .join("");
//   return res;
// }
// console.log(a(str));

//todo 6 необходимо написать функцию, которая принимает массив, и выводит объект вида {элемент:количество, элемент: количество и т.д}let petsArr = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// let petsArr = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

// function getElementCount(arr) {
//   return arr.reduce((count, element) => {
//     count[element] = count[element] ? count[element] + 1 : 1;
//     return count;
//   }, {});
// }
// console.log(getElementCount(petsArr));
// !======== task 1 сложные методы массивов ========

// let arr = [2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17];
// function checkTask(arr) {
//   let check = arr.filter((x) => {
//     return x > 0;
//   });
//   console.log(check);
// }
// checkTask(arr);
// ?=========================== practice *5
// let arr = [1, 33, 23, -55, 86, -21];
// function checkTask(arr) {
//   let check = arr.filter((x) => {
//     return x > 0;
//   });
//   console.log(check);
// }
// checkTask(arr);

// ! =========== task 2

// let arr = [10, 25, 25, 15, 5, 10];
// function checkTask(arr) {
//   let sum = 0;
//   arr.forEach((x) => {
//     sum += x;
//   });
//   console.log(sum);
// }
// checkTask(arr);

// ?=========================== practice *5
// let arr = [10, 25, 25, 15, 5, 10];
// function checkTask(arr) {
//   let sum = 0;
//   arr.forEach((x) => {
//     sum += x;
//   });
//   console.log(sum);
// }
// checkTask(arr);

// ! =========== task 3
// let arr = [175, 50, 25]
// function checkTask(arr){
//     let check = arr.reduce((a,b) => a - b)
//     console.log(check)
// }
// checkTask(arr)

// ! =========== task 4
// let arr = [4, 15, -4, 27, 12, 8];
// function checkTask(arr){
//   let check = Math.max(arr)
//     return check
// }
// checkTask(arr)

// ! =========== task 5
// let arr = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
// const checkTask = (arr) => {
//   const frequency = {};
//   arr.forEach((num) => {
//     frequency[num] = frequency[num] ? frequency[num] + 1 : 1;
//   });
//   let maxNum = arr[0];
//   let maxCount = 0;
//   for (const num in frequency) {
//     if (frequency[num] > maxCount) {
//       maxCount = frequency[num];
//       maxNum = num;
//     }
//   }
//   console.log(maxNum);
// };

// ! =========== task 6


// let arr = [1, 2, 3];
// function checkTask(arr) {
//   let total = [];
// arr.forEach((x) => total.push(x**2)
// );
//   return total;
// }
// console.log(checkTask(arr));

// ! =========== task 7
// let arr = [4, 5, 8, 9]
// function checkTask(arr){
//  let res = arr.every(x => x > 0)
// console.log(res)
// }

// ! =========== task 8
// let arr = ['июнь', 'октябрь', 'май', 'ноябрь', 'март']
// function checkTask(arr){
//     let check = arr.filter((x) => x.length > 5)
//     console.log(check)
// }
// checkTask(arr)

// ! =========== task 10

function checkTAsk(arr) {
  if (arr.includes("<h1>")) {
    console.log("Это заголовок <h1>");
  } else if (arr.includes("<p>")) {
    console.log("А это параграф <p>");
  } else if (arr.includes("<div>")) {
    console.log("А это тег <div>");
  }
}
checkTAsk("ррврв <p>");

// ! =========== task 15

// function checkTask(arr){
//     let check = arr.filter((x) =>{
//         if(x % 2 !==0){
//             return x
//         }
//     })
//     return check
// }
// console.log(checkTask([11, 4, 8, 9, 5, 15, 6] ))

// ! =========== task 16

// let arr = ['Hello', 'World', 'C++', 'JavaScript', 'IT', 'Java']
// function checkTask(arr){
//     let check = arr.filter((x) => x.length >= 5)
//     console.log(check)
// }
// checkTask(arr)

// ! =========== task 12

// let arr = [1, 2, [4, 5, 6], [7, 8]];
// function checkTask(arr) {
//   let check = arr.reduce((x) => {
//     if (typeof x == "object") {
//       let res = x.reduce((total, item) => total + item);
//       return res;
//     }
//   });
// }
// console.log(checkTask(arr));

// ! =========== task 22

// let arr = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
// function checkTask(arr) {
//   let check = arr.filter((x) => x.lenght >= 5);
//   return check;
// }
// console.log(checkTask(arr));

function checkTask(arr) {
  let arr1 = arr.filter((x) => x.length >= 5);
  return arr1;
}

// ! =========== task 27

// let arr = [7, -1, -9, 0, 4, 5, -6]
// function checkTask(arr){
//     let sum = 0
//     let check = arr.forEach((x) => {
//         if (x < 0){
//         sum ++ ;
//         }
//     })
//     console.log(sum)
// }
// checkTask(arr)
