const API = "http://localhost:8000/todos";

// !========================== async/await ================================

// ? ключевое слово await заставляет JavaScript ждать до тех пор пока promise по правую часть не выполниться. После чего она веренет его результа, и выполнение кода продолжиться

// async function func() {
//   let res = await fetch(API);
//   let data = await res.json();
//   console.log(data);
// }
// func();

// ! ========================= try...catch ==============================

// let a = 2;
// let b = 3;

// ? конструкция try...catch пытается выполнить блок кода внутри try , в случае ошибки , отрабатывает блок catch , блок finally(не обьязателен) срабатывает в любом случае
// try {
//   console.log(a + b);
// } catch (error) {
//   console.log("Error", error);
// } finally {
//   console.log("конструктор закончил работу");
// }
// !================================= todo list ==============================

// ? получаем эл-ты из htm  и сохраняем в переменных

const inpAdd = document.querySelector(".add-todo");
const addBtn = document.querySelector(".add-btn");
const list = document.querySelector(".list-group");

// ? создаем обьект , который хранить данные для нового todo
// create
let newTodo = {};

// ? вешаем слушатель событий на input для получения данных из него
inpAdd.addEventListener("input", (e) => {
  // ?  перезаписываем обьект newTodo и под ключом todo  помащаем содержимое из input
  newTodo = { todo: e.target.value };
});

// ? функция добавления
async function addTodo() {
  //? оборачиваем в try catch для отлавливания ошибки
  try {
    //? отправляем fetch запрос в который поместили обьект
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      //? тело запроса , конкретно то , что отправляется
      body: JSON.stringify(newTodo),
    });
  } catch (error) {
    console.log(error);
  }

  //? очищаем input , строкой ниже вызываем функцию для отображения актуальных данных после добавления
  inpAdd.value = "";
  getTodos();
}

// ? навешиваем слушатель событий на кнопку добавления
addBtn.addEventListener("click", addTodo);

// ? функция для стягивания данных с json-server
// read
async function getTodos() {
  try {
    //? получаем данные с бэка
    let res = await fetch(API);
    //? обрабатываем ответ от сервера
    let todos = await res.json();
    //todo вызываем функцию отображения
    render(todos);
    console.log(todos);
  } catch (error) {
    console.log(error);
  }
}
// отображение
function render(todos) {
  // ? очищаем все что было в list для того чтобы не было дубликаты
  list.innerHTML = "";

  // ?  перебираем данные полученые с сервера и на каждый обьект отрисовываем элемент li
  todos.forEach((item) => {
    list.innerHTML += `
        <li class="list-group-item">
        <p>${item.todo} </p>
        <div>
        <button onclick="deleteTodo(${item.id})" class='btn btn-danger'>Delete</button>
        <button onclick="editTodo(${item.id})" class='btn btn-warning' data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
        </div>
        </li>
        
        `;
  });
}

//? отображение при первой загрузки страницы
getTodos();

// delete

async function deleteTodo(id) {
  try {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    getTodos();
  } catch (error) {
    console.log(error);
  }
}

// edit  todo
let inpEdit = document.querySelector(".inp-edit");
let saveBtn = document.querySelector(".save-btn");
let editModal = document.querySelector("#exampleModal");

let editedObj = {};

inpEdit.addEventListener("input", (e) => {
  editedObj = { todo: e.target.value };
});

async function editTodo(id) {
  try {
    let res = await fetch(`${API}/${id}`);
    let objToEdit = await res.json();

    inpEdit.value = objToEdit.todo;
    saveBtn.setAttribute("id", `${id}`);
  } catch (error) {
    console.log(error);
  }
}

saveBtn.addEventListener("click", async (e) => {
  let id = e.target.id;

  try {
    await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(editedObj),
    });
  } catch (error) {
    console.log(error);
  }
  getTodos();
  let modal = bootstrap.Modal.getInstance(editModal);
  modal.hide();
});
