'use strict';
var getType = require('what-type');
var round = require('round-off');

var isPrime = function (num) {
  if (num === 1) {
    return false;
  }
  var check = true;
  var limit = round(Math.sqrt(num));
  for (var i = 2; i <= limit; i++) {
    if (num % i === 0) {
      check = false;
      break;
    }
  }
  return check;
};

module.exports = function (num) {
  if (getType(num) === 'number') {
    throw new Error('The number must be a integer');
  } else if (num <= 0) {
    throw new Error('The number must be a positive integer');
  }
  return isPrime(num);
};
