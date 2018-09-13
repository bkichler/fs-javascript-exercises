var readlineSync = require('readline-sync');

var foobar = function(digits) {
  i = 1
  while (i <= digits) {
    if (i % 3 === 0 && i % 5 > 0) {
      console.log("foo");
    }
    else if (i % 5 === 0 & i % 3 > 0) {
      console.log("bar");
    }
    else if (i % 5 === 0 && i % 3 === 0) {
      console.log("foobar");
    }
    else 
      console.log(i);
    i = i + 1
  }

}

var input = readlineSync.question("How many digits of foobar do you want to see? ");

var sequence = foobar(input);

console.log(sequence);