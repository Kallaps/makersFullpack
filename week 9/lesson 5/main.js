const API = "http://localhost:8000/todos";
// !GET -получение данных

fetch(API)
  .then((res) => res.json())
  .then((data) => console.log(data));

//! POST - отправка данных
let obj = {
  task: "SALAMAT",
};
// * первым аргументом мы указываем запрос , куда отправляем запрос , в вторым аргументом задаем описание запроса (указываем метод, заголовки и и само содержимое (body))
// fetch(API, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
//   body: JSON.stringify(obj),
// });

// ! PATCH - изменение данных
// * метод patch - редактирует данные точечно (по передаваемым ключам)

// let editedObj = { task: "edited" };
// fetch(`${API}/${3}`, {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
//   body: JSON.stringify(editedObj),
// });

// ! DELETE - удаление данных
// fetch(`${API}/${5}`, {
//   method: "DELETE",
// });

// !  PUT - заменяет полностю старый на новый обьект
let editedObj = { task: "SalamatBAIKE" };
fetch(`${API}/${7}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(editedObj),
});
