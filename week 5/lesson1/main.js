// todo======================================== ОБЬЕКТЫ  =============================================

// let mentor = {
//   company: "Makers",
//   name: "Salamat",
//   job: "js-dev",
//   age: 30,
// };

// mentor.car = "Nissan"; //? добавляет к обьекту
// mentor.age = "31";
// delete mentor.company; //? удаляет из обьекта

// console.log(mentor);

// todo=============================================== SPREAD OPERATOR ===========================================

// let mentor = {
//   company: "Makers",
//   name: "Salamat",
//   job: "js-dev",
//   age: 30,
// };

// // let mentor2 = mentor;
// // let mentor2.name = "Aizireck"

// let mentor2 = { ...mentor };
// mentor2.name = "Aizireck";

// console.log(mentor);
// console.log(mentor2);

// todo================================================= МЕТОДЫ МАССИВА================================================

// *==========================================PUSH===============================================================

// let friends = ["Peter", "Harry", "John", "Dave", [1, 2, 3, "hello"]];
// console.log(friends[4]);
// console.log(friends[4][3]); //выводит обьект внутри обьекта
// console.log(friends[4][friends[4].length - 1]); // ?тоже самое но геморнее

// // ?  // push добавляет элемент к концу массива

// console.log("до метода push", friends); // ?push добавляет элемент к концу массива
// friends.push({});
// friends.push([13, 3]);
// friends.push(true, null, ["a", "b"]); // ?push может добавлять много эл через запятую
// console.log(friends);

// const newArray = ["Ted", "Alex"];
// friends.push(newArray); //?push через переменную

// // * ============================================ POP ==============================================================

// friends.pop(); //удаляет с конца
// friends.pop();

// let deleteElem = friends.pop(); // ?удаляет pop - то есть возвращает то что было до

// console.log(friends);

//? для работы с началом массива есть shift/unshift
// * =================================================== SHIFT/ UNSHIFT =========================================================

// ?unshift - добавляет эл в начало массива

let friends = ["Peter", "Harry", "John", "Dave", [1, 2, 3, "hello"], " Tom"];
// friends.unshift(1);

// let someVar = "hello world";
// friends.unshift(someVar);
// friends.unshift(true, null, { name: "Mark" });

// console.log(friends);

// ? shift - удаляет первый элемент с начала массива , т.ж как и pop не принимает аргументов при вызове (в круглые скобки)

friends.shift(); //peter

// const shiftedElem = friends.shift();     //harry
// console.log(shiftedElem);

// *=================================================== slice / splice =============================================================
//? он копирует и возвращает новый массив , в качестве аргкментов принимает индексы = наальный и конечный (до какого эл копировать не включительно)
//? название_массива.slice(начало , конец)

// const fruits = ["apple", "banana", "peach", "watermelon", "orange"];
// const result = fruits.slice(0, 3); //вырезает с 1 по 3 (включительно)
// const result2 = fruits.slice(2, 3);//вырезает с 2 по 3 - то есть 1 эл
// const result3 = fruits.slice(2, 1); // дает пустату
// console.log(result3);

// ? splice - может заменять и удалять эл в произвольной части массива. Splice - менят исходный массив
// название_массива.splice(индекс начальный , кол-во эл-тов для удаления , эл-ы которые нужно вставить)

// fruits.splice(0, 2);
// fruits.splice(1, 3, "grape", { name: "Salamat", age: 30 }); //?удаляет эл и может вставить новый
// fruits.splice(1, 0, "hello");
// console.log(fruits);

// ------------------------task 1------------------------
// let arr = ['1,2,3']
// arr.unshift(4,5,6,)let arr = ["Apple", "Orange", "Banana", "Pineapple", "Cherry"]

// console.log(arr)

//-------------------------task 8-----------------------------
// let arr = ["Apple", "Orange", "Banana", "Pineapple", "Cherry"]
// let res = arr.sort((a, b)=>a-b)
// console.log(res[0])
// console.log(res)

// -----------------------------------------task 6-----------------------------------------------
// let arr = [1, 2, 3, 4, 5];
// let ser = arr.splice(1, 3);
// console.log(ser);

// -----------------------------------------task 7-----------------------------------------------
// let arr = [5,2,1,-10,8]
// arr.sort((a, b) => b - a)
// console.log(arr)

// ---------------------------------------task 10------------------------------------------------
// let arr = ["Джаз", "Блюз"];
// arr.push("Рок-н-ролл");
// arr.splice(arr.length / 2, 1, "Классика");
// let res = arr.shift();
// arr.unshift("Рэп", "Регги");
// console.log(res);
// console.log(arr);

// -----------------------------------------task 11--------------------------------------------------
// let arr = ["Life", "is", "hard"];
// let res = arr.splice(2, 1, "good");
// console.log(arr);
//----------------------------------------
// let arr = ["один", "два", "три", "четыре"];
// let res = arr.splice(0, 1);
// arr.push(res[0]);
// console.log(arr);
// ========================================task 12---------------------------------------------------
// let arr =  ["один","два","три","четыре"]
// let str = arr.join('+');
// console.log(str);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let res = (arr1, arr2.join);
// console.log(res);

//
// let arr = [1, 2, 3];
// arr.shift = console.log(arr);
// -------------------------------------------task 23-------------------------------------------
// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.splice(2, 5);
// console.log(arr1);x
// ==========================================task 24--------------------------------------------
// let arr = [1, 2, 3, 4, 5]
// let arr2 = arr.slice(-2)
// console.log(arr)
