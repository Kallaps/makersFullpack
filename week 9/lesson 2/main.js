// !================================  Асинхронность ========================================

// *---------------------------- SetInterval  /  setTimeOut -------------------------------

// ? setTimeOut - позволяет вызвать функцию лдин раз через определенный интервал

// const timer = setTimeout(function () {
//   console.log("Anton agai 33 goda");
// }, 5000);

// const timer = setTimeout(
//   function (text) {
// function
//     console.log(text); // время
//   }, // аргумент
//   2000,
//   "hello"
// );

// clearInterval(timer);           //сброс

// ?  setInterval - позволяет вызывать функцию регулярно повторяя вызов через определенный интервал времени

// const btn = document.querySelector("button");
// let timer;
// let i = 0;
// btn.addEventListener("click", () => {
//   timer = setInterval(logger, 1000);
// });

// function logger() {
//   if (i == 3) {
//     clearInterval(timer);
//   }
//   console.log("worked" + i);
//   i++;
// }

// console.log(timer);
// clearInterval(timer);                  //не сработает

// todo создайте в индекс.штмл 2 дива и назовите их .wrapper , .box

// function myAnimation() {
//   const elem = document.querySelector(".box");
//   let pos = 0;

//   const id = setInterval(frame, 10);

//   function frame() {
//     if (pos == 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       console.log(pos);
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }
// const btn = document.querySelector("button");
// btn.addEventListener("click", myAnimation);

// !===============================================  promisess  ==============================================

// *  promise - это обьект , который приходит в ответ на запрос он хранит в себе состояние :
// ? всего их три:

// ? ожидание (pending): не исполнено и не отклонено

// ? исполнено(fulfiled): успешно завершено

// ? отклонено(rejected): операция завершена с ошибкой

// const myFirstPromise = new Promise((resolve, reject) => {
// * выполняется асинхронная операция которая в итоге вызовет:
//   resolve(someValue); //успешное выполнение
// *или
//   reject("erorr | failure reason"); //*неудачное выполнение
// });

// const p = new Promise((resolve, reject) => {
//   let a = 2 + 2;
//   if (a == 3) {
//     resolve("success");
//   } else {
//     reject("error");
//   }
// });

// p.then((message) => {
// ?метод который обрабатывает промис
//   console.log("this is in then " + message);
// })
//   .catch((message) => {
//     console.log("this is in then " + message);
//   })
//   .finally(() => {
//     console.log("i am finally working in both casess ");
//   });
