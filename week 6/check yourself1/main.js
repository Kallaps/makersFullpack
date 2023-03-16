// const people = [
//   { name: "Mother", age: 42, budget: 60000 },
//   { name: "Father", age: 47, budget: 50000 },
//   { name: "Brother", age: 25, budget: 20000 },
//   { name: "Sister", age: 19, budget: 5000 },
// ];

// !обычно;
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// //* forEach
// people.forEach((person) => console.log(person));

// let people = [
//   "Аманбек",
//   "Актанбек",
//   "Исабек",
//   "Нурбек",
//   "Азизбек",
//   "Таалайбек",
//   "Мырзайымбек",
//   "Куанычбек",
// ];

// let res = people.find("");

// !обычно;

const macPro = products.find((item) => {
  if (item.title === "Mac Pro") {
      return true;
  }
})                     // Если не найдет то выводит undefined
console.log(macPro); // Будет выведен объект с товаром
