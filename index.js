
// 1) написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.

let userInput = prompt("Enter your number: ");

/**
 * 
 * @param {string} value 
 * @returns {string}
 */
function checkUserInputNumber(value) {
  if (value === "" || isNaN(value) || value === null) {
    return 'Odd';
  }
  return 'Event';
}
let chec = checkUserInputNumber(userInput);
console.log(chec);




