// let somearr = [
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ];
// function checkTask(arr) {
//   let res = arr.reduce((obj, item) => {
//     obj[item[0]] = item[1];
//     return obj;
//   });
//   return res;
// }
// console.log(checkTask(somearr));

// let str =
//   "Сложный путь у программиста, Только горе - не беда, Если выбрал путь тернистый - То тогда тебе - сюда!";
// function checkTask(input) {
//   let arr = input.split(" ");
//   let newArr = arr.map((item) => {
//     if (item.length >= 4) {
//       return item[0] + (item.length - 2) + item[item.length - 1];
//     } else {
//       return item;
//     }
//   });
//   return newArr.join(" ");
// }
// console.log(checkTask(str));

// let somearr = [8, 1, 2, 2, 3];
// function checkTask(arr) {
//   let res = arr.map((num) => {
//     let count = 0;

//     arr.forEach((num2) => {
//       if (num > num2) {
//         count++;
//       }
//     });
//     return count;
//   });
//   return res;
// }
// console.log(checkTask(somearr));

// let somearr = [2, 5, 1, 3, 4, 7];
// function checkTask(arr) {
//   let middle = arr.length / 2;
//   let secondPart = arr.splice(middle);

//   let newArr = arr.reduce((arr2, item, ind) => {
//     return arr2.concat(item, secondPart[ind]);
//   }, []);
//   return newArr;
// }
// console.log(checkTask(somearr));

let arr = [17, 18, 5, 4, 6, 1];
function checkTask(numArr) {
  let res = numArr.map((num, i, arr) => {
    return i < arr.length - 1 ? Math.max(...arr.slice(i + 1)) : -1;
  });
  return res;
}
console.log(checkTask(arr));
