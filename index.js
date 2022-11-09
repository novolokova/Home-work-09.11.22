// 1) написати функцію, яка повертає слово 'odd' або 'even',
// в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.

// let userInput = prompt("Enter your number: ");

// /**
//  *
//  * @param {string} value
//  * @returns {string}
//  */
// function checkUserInputNumber_1(value) {
//   if (value === "" || isNaN(value) || value === null || value === " ") {

//     return "Odd";
//   }
//   return "Event";
// }

// let check_1 = checkUserInputNumber_1(userInput);
// console.log(check_1);

// /**
//  *
//  * @param {string} value
//  * @returns {string}
//  */
// function checkUserInputNumber_2(value) {
//       if (Number(value)){
//     return "Event";
//   }
//   return "Odd";
// }

// let check_2 = checkUserInputNumber_2(userInput);
// console.log(check_2);

// 2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу,
// то повертає той, який має більше значення
// (якщо значення рівні - повертаємо null), інакше(фкщо різного типу) теж повертає null.
// Значення для перевірки функції вводить користувач.

let userInput1 = prompt("Enter first value: ");
let userInput2 = prompt("Enter second value: ");

if (checkUserInput(userInput1) && checkUserInput(userInput2)) {
  const check = checkBiggerNumber(userInput1, userInput2);
  console.log(check);
} else {
  console.log(null);
}
/**
 * 
 * @param {string} value 
 * @returns {boolean}
 */
function checkUserInput(value) {
  if (value === "" || isNaN(value) || value === null || value === " ") {
    return false;
  }
  return true;
}
/**
 * 
 * @param {string} value1 
 * @param {string} value2 
 * @returns {null}
 */
function checkTypeOf(value1, value2) {
  if (typeof (value1) === typeof (value2)) {
    checkBiggerNumber(value1, value2);
  }
  return null;
}
/**
 * 
 * @param {number} value1 
 * @param {number} value2 
 * @returns {}
 */
function checkBiggerNumber(value1, value2) {
  if (Number(value1) > Number(value2)) {
    return value1;
  }
  if (Number(value1) < Number(value2)) {
    return value2;
  }
  return null;
}
