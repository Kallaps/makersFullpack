// !========================================  Local storage  ============================================

// localStorage.setItem("goods", JSON.stringify([]));

// let arr = JSON.parse(localStorage.getItem("goods"));
// console.log(arr);

// localStorage.removeItem("goods");

// localStorage.clear();

// console.log(typeof localStorage);

// localStorage.setItem("breakfast", "eggs");
// localStorage.setItem("lunch", "sandwich");

// console.log(localStorage.getItem("breakfast"));
// console.log(localStorage.getItem("dinner"));

// localStorage.clear();

//! ============================================= todo list
// ? достаем элемент из HTML -> навесили событие на кнопку  при клике
let btn = document.querySelector(".btn");
let inp = document.querySelector(".task-input");
let list = document.querySelector(".task-list");
console.log(btn, inp, list);

// ? -----> навесили событие на кнопку  при клике
btn.addEventListener("click", () => {
  if (!inp.value.trim()) {
    // ? ----->  проверка на заполненость инпута
    alert("зааполните поле");
    return; //?  ----> чтоб код ниже не работал
  }
  //?  ----> помещаем значение из инпута в обьект под ключом task
  let obj = { task: inp.value };
  //?  ----> вызов функции и добавление в localStorage
  setItemToStorage(obj);
  createElement();
  inp.value = ""; //? ---> очищаем инпут
});
function setItemToStorage(task) {
  //? ---->  Проверка на то что в LocalStorage eсть что-нибудь под ключом tasks-data
  if (!localStorage.getItem("tasks-data")) {
    // ?----> если нет , то добавляем по данным ключом пустой массив
    localStorage.setItem("tasks-data", "[]");
  }

  //? ---> Стягиваем данные из localStorage данные  и приводим их к JS формату
  let data = JSON.parse(localStorage.getItem("tasks-data"));
  data.push(task); //? ---> добавляем новый обьект в массив

  //?  ---> обновленный массив преобразовываем в JSON формат и отправляем в localStorage
  localStorage.setItem("tasks-data", JSON.stringify(data));
}
if (!localStorage.getItem("tasks-data")) {
  // ?----> если нет , то добавляем по данным ключом пустой массив
  localStorage.setItem("tasks-data", "[]");
}
createElement();

//* отображение данных
function createElement() {
  // *стягиваем данные из локального хранилища и преобразовываем в JS формат
  let newData = JSON.parse(localStorage.getItem("tasks-data"));
  console.log(newData);
  list.innerHTML = ""; //* очищаем содержимое ибо будет дублирование (баг)

  newData.forEach((item, index) => {
    //* перебираем массив данных и для каждого эл-та создаем тег li с 2-мя кнопками
    let li = document.createElement("li");
    let btnDelete = document.createElement("button");
    let btnEdit = document.createElement("button");
    li.innerText = item.task;
    btnDelete.innerText = "Detete";
    btnEdit.innerText = "Edit";

    btnDelete.style.backgroundColor = "#b35656";
    btnDelete.style.border = "#b35656";
    btnDelete.style.borderRadius = "3px";

    btnDelete.style.marginLeft = "20px";

    btnEdit.style.backgroundColor = "darkgray";
    btnEdit.style.border = "darkgray";
    btnEdit.style.borderRadius = "3px";
    btnEdit.style.margin = "3px";

    li.append(btnDelete);
    li.append(btnEdit);

    // * добавили слушатели событий на кнопки delete , edit
    btnDelete.addEventListener("click", () => {
      deleteElem(index);
    });
    btnEdit.addEventListener("click", () => {
      editElement(index);
    });
    list.append(li); //* добавляем в наш список(ul) новый тег (li)
  });
}
// localStorage.clear();
// * функция для удаления тасков
function deleteElem(index) {
  // * получаем данные из хранилища(массива данных)
  let data = JSON.parse(localStorage.getItem("tasks-data"));
  data.splice(index, 1); //* удаляем один элем по индексу
  localStorage.setItem("tasks-data", JSON.stringify(data)); //*отпраляем обновленный массив в хранилище
  createElement(); //*отображаем измененный массив из хранилища
}
//edit
// * получаем эл-ты модального окна
let mainModal = document.querySelector(".main-modal");
let inpEdit = document.querySelector(".inp-edit");
let btnCloser = document.querySelector(".btn-closer");
let btnSave = document.querySelector(".btn-save");

// console.log(mainModal, inpEdit, btnCloser);

// * функция редактирования
function editElement(index) {
  // *отображаем модальное окно
  mainModal.style.display = "block";
  // * получаем данные из хранилища
  let data = JSON.parse(localStorage.getItem("tasks-data"));

  // *заполняем инпут
  inpEdit.value = data[index].task;

  // * задаем id для последующего сохранения
  inpEdit.setAttribute("id", index);
}
// * слушатель закрытия для модального окна
btnCloser.addEventListener("click", () => {
  mainModal.style.display = "none";
});

// * слушатель событий для сохранения отредактированного эл-та
btnSave.addEventListener("click", () => {
  // * получаем данные из модального хранилища
  let data = JSON.parse(localStorage.getItem("tasks-data"));

  // * получаем индекс редактируемого эл-та
  let index = inpEdit.id;

  // * проверка на заполненность
  if (!inpEdit.value.trim()) {
    alert("заполните поле!");
    return;
  }

  // * формируем новый уже отредактированный обьект
  let editedTask = {
    task: inpEdit.value,
  };

  // * заменяем старый обьект на новый (который отредактировали)
  data.splice(index, 1, editedTask);

  // * отправляем обновленный массив в хранилище
  localStorage.setItem("tasks-data", JSON.stringify(data));

  // * закрываем модальное окно и в самом конце ---->
  mainModal.style.display = "none";
  // * ---> отображаем обновленные данные
  createElement();
});
