// 1) написати функцію, яка повертає слово 'odd' або 'even', 
// в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.

let userInput = prompt("Enter your number: ");

/**
 * 
 * @param {string} value
 * @returns {string}
 */
function checkUserInputNumber_1(value) {
  if (value === "" || isNaN(value) || value === null || value === " ") {
   
    return "Odd";
  }
  return "Event";
}

let chek_1 = checkUserInputNumber_1(userInput);
console.log(chek_1);

/**
 * 
 * @param {string} value 
 * @returns {string}
 */
function checkUserInputNumber_2(value) {
      if (Number(value)){
    return "Event";
  }
  return "Odd";
}

let chek_2 = checkUserInputNumber_2(userInput);
console.log(chek_2);




