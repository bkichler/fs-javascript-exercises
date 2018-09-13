var readlineSync = require('readline-sync');

var ordinal = function(digit) {
  var ordinalDigit = Number(digit);
  var rightmostDigit = ordinalDigit % 10;
  var ordinalString = String(ordinalDigit);

  if (rightmostDigit === 1 && ordinalDigit != 11) {
    ordinalString += "st";
  } 
  else if (rightmostDigit === 2 && ordinalDigit != 12) {
    ordinalString += "nd";
  } 
  else if (rightmostDigit === 3 && ordinalDigit != 13) {
    ordinalString += "rd";
  } 
  else {
    ordinalString += "th";
  }
  return ordinalString;
}

var input = readlineSync.question("Enter a digit: ");

var value = ordinal(input);

console.log(value);


