"use strict";

var _ = {
  // Implements:
  // https://lodash.com/docs#join
  join: (array, separator = ',') => {
    var arrayLength = array.length;
    var outputString = "";
    for (var i = 0; i < arrayLength; i++) {
      if (i < arrayLength - 1) {
        outputString += array[i] + separator
      }
      else {
        outputString += array[i]
      }
    }
    return outputString;
  }
}

const value = _.join(["hello", "goodbye"], ", ")
console.log(value);