// 1) написати функцію, яка повертає слово 'odd' або 'even',
// в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.

/**
 *
 * @param {number} userInput
 * @returns {string}
 */
const checkUserInputNumber = function(userInput){
  if (userInput % 2 === 0){
    return "Event";
  }
  return "Odd";
}

// 2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу,
// то повертає той, який має більше значення
// (якщо значення рівні - повертаємо null), інакше(фкщо різного типу) теж повертає null.
// Значення для перевірки функції вводить користувач.

/**
 * 
 * @param {any} userInput1 
 * @param {any} userInput2 
 * @returns {null | any}
 */
const checkUserInput = function (userInput1, userInput2) {
  if (typeof(userInput1) === typeof(userInput2)) {
    return getMaxCompare(userInput1, userInput2);
  }
  return null;
};

/**
 * 
 * @param {any} userInput1 
 * @param {any} userInput2 
 * @returns {any}
 */
function getMaxCompare(userInput1, userInput2) {
  if (userInput1 > userInput2) {
    return userInput1;
  }
  if (userInput1 < userInput2) {
    return userInput2;
  }
  return null;
}
console.log(checkUserInput('wer', 'ert'));
console.dir(checkUserInput);

