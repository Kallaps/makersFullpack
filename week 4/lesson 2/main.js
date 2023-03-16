// //*TODO =========================Массивы====================
// let mentors = ["Bayish", "Janat", "Salamat", "Anton"];
// // console.log(mentors);
// // console.log(typeof mentors);

// //*TODO ===========================Индексация==================
//*Индекс - это порядковый номер в массиве , который начинается с нуля
 console.log(mentors[0]);
 console.log(mentors[3]);

// let randomArray = ["hello", 25, true, { model: "Ford" }, null];

// console.log(randomArray[2]);
//  let objectFromArray = randomArray[3];
let str = 'coding'
console.log(str[1])
console.log(str[str.length -2])
console.log(str[str.length  -1])


// // console.log(objectFromArray);

// //* length - длинна массива - показывает количество элементов в массиве
// // console.log(randomArray.length);

// //* втащить последний элемент из массива
// console.log(randomArray[randomArray.length - 1]);

// //*TODO===========================Арифметические операции====================

// *сложение
// console.log(1 + 1);    //2

//  *вычитание
// console.log(3 - 3);    //0

//  *умножение
// console.log(3 * 103);    //309

// //* деление
// console.log(25 / 5);    //5

// const num1 = 33;
// const num2 = 77;

// console.log(num1 + num2);

// const sum = num1 + num2;
// console.log(sum);

// const result = sum - 11;
// console.log(result);

//* возведение в степень
// const expression = 2 ** 3;
// console.log(expression);

// //* Остаток от деления
// const a = 10 % 7;
// console.log(a);

// const b = 5 % 5;
// console.log(b);

//*TODO=================================Контенация========================

//* Склеивание
// const x = "some string" + 5;
// console.log(x);

// const b = "100" * 5;
// console.log(b);

// const greet = "Hello ";
// const subject = "World";
// const message = greet + subject;

// console.log(message);

// *TODO =============интерпритация============================

// let name = "Zhanat";
// let age = 22;
// console.log(`My name is ${name}. I am ${age} y.o`);

//*TODO========================================Interaction===========================

//* alert - небольшое окно сообщений - модалка
// alert("nihao padoshva!");

// *promt - отображает модалку НО с ИНПУТАМИ ---для получения данных от пользователя
// const age2 = prompt("enter your age");
// alert(`your age is ${age2} y.o`); //?обьязательны кавычки под "ё"

// const name2 = prompt("enter your name");
// alert(`your name`);

// *confirm - отображает модалку с текстом вопроса и двумя кнопками

// let checkAge = confirm(`Есть ли вас 17 лет?`);
// console.log(checkAge);

// TODO================================  Операторы сравнения  ============================
// //* всегда возвращается в boolean

// const number1 = 10;
// const number2 = 20;

// console.log(number1 > number2); //false

// console.log(20 >= 15); //true

// console.log(50 >= 50); //равны true

// console.log(number2 >= number2); //true

// console.log(5 <= 4);

// console.log(`54` <= 100);

// //*   Не строгие сравнения
// console.log(`10` == 10); //true
// console.log(`h10` == 10); //false

// //*   Cтрогие сравнения- учитывание типов данных при сравнении
// console.log(`10` === 10); //false
// console.log(`10` === `10`); //true

// // * не строгое неравенство
// console.log(`24` != 24); //false

// //* строгое неравенство
// console.log(`24` !== 24); //true

// TODO================================  Boolean  ============================
console.log(Boolean(`some string`)); //true
console.log(Boolean(``)); //false
console.log(Boolean(`  `)); //true
console.log(Boolean(11)); //true
console.log(Boolean(-11)); //true
console.log(Boolean({})); //true
console.log(Boolean([])); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
// ==================================================================
//* Ложные знвчения при Boolean
// 0
// null
// undefiend
// ``
// false

//===========================================================================

// let expression = "2 + 2 + 2"       //    EVAL
// console.log(eval(expression))

// let myBool = true 
// console.log(Number(myBool))       //из boolean в номерную строку

// let myNum = 123
// let newStr = myNum.toString()      // номерную строку первели в string 
// console.log(typeof newStr)


// let greet = 'Hello World'
// let greet2 = greet.slice(0, 5);       //slice
// console.log(greet2)

// let str = 'coding'
// console.log(str[1])
// console.log(str[str.length -2])      //индекс массивов
// console.log(str[str.length  -1])