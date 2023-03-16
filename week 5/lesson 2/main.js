// todo ========================================== JOIN / SPLIT / REVERSE =====================================================

// *====================================================== join ==============================================================
// const fruits = ["apple", "orange", "banana", "pineapple"];
// const newJoinedString = fruits.join(" + ");
// console.log(newJoinedString);

// *====================================================== split ==============================================================
// ? split - разбивает массив по указательному разделителю
// название_строикsplit(разделитель)

// const str = "makers first bootcamp in KG";
// const words = str.split("");
// console.log(str.length);
// console.log(str[0]);

// *====================================================== reverse ==============================================================
// const stringNumbers = ["first", "second", "third", "fourth"];
// const reverseNumbers = stringNumbers.reverse();
// console.log(reverseNumbers);

// const str2 = "Hello my name is Dastan";
// console.log(str2.split(" ").reverse().join(" "));

// *========================================================== sort ==============================================================
// const fruits = ["apple", "orange", "banana", "pineapple"];
// fruits.sort();

// const someArr = [1, 11, 11, 1000, 3, 4, 20];
// someArr.sort();
// console.log(someArr);

// const sortedArrayDesc = someArr.sort((a, b) => a - b); //? по возрастанию
// const sortedArrayAsk = someArr.sort((a, b) => b - a); //? по убыванию

// const countries = ["USA", "RUSSIA", "KYRGYZSTAN", "KOREA", "AZERBAIJAN"];
// const result = countries.sort((a, b) => b.length - a.length);
// console.log(result);
// console.log(sortedArrayDesc);

//* Дан массив, напишите программу, которая будет спрашивать хотите ли вы удалить или добавить элемент в массив, если добавить, то запрашивает куда добавить (начало или конец) и какой элемент добавить, если удалить, то запрашивает откуда (с начала или конца)
// const arr = [(1, 2, 3, true, null)];

// const operation = prompt("хотите ли вы удалить или добавить ?");
// if (operation === "добавить") {
//   const position = prompt("куда добавить (начало или конец)");
//   if (position === "начало") {
//   } else if (position === "конец") arr.unshift;
// } else if ("удалить") {
//   brr.prompt("откуда (с начала или конца)");
// }
// console.log(brr);

//*дан массив с элементами, выведите самое большое число из массива, используя методы массива(sort), также ваш код должен быть универсальным

// let numArray = [1, 55, 777, 98, -300, 123, 17, 25, 6, 11];
// let numArray2 = numArray.sort((a, b) => b - a);
// console.log(numArray2[0]);

//*дана строка, проверить, является ли данная строка палиндромом. палиндром - это слово которое одинаково читается в обе стороны, например потоп, заказ, мадам
// если строка является палиндромом вывести в консоли true, если нет, то false
// ----------------------------------------------------
// const str1 = ["а", "б", "в"];
// str1.push(4, 3, 5, 5);
// console.log(str1);
// ----------------------------------------------------
// const fruits = ["Apple", "Orange", "Pinapple", "Cherry"];
// fruits.shift();
// let removed = fruits.splice(2, 0, "Apple");
// console.log(fruits);
// -----------------------------------------------------
// const num = [8, -7, -21, 44, 3];
// num.sort((a, b) => b - a);
// let num2 = num.shift();
// console.log(num2);
// ------------------------------------------------------
// const str = ["dlrow", "olleH"].toString();
// const str2 = str
//   .split(" ")
//   .reverse()
//   .join(" ")
//   .split("")
//   .reverse()
//   .join("")
//   .split(",");

// console.log(str2);
// -------------------------------------------------------
