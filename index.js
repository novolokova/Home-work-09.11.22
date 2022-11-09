
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




