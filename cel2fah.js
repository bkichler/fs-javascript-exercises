var readlineSync = require('readline-sync');

var degrees = readlineSync.question('Enter degrees in Celsius: ')
var degreesNum = Number(degrees);
var fahrenheit = 1.8 * degreesNum + 32
console.log('The Fahrenheit temp is ' + fahrenheit + '!');