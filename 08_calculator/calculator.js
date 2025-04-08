const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let len = array.length;
  let result = 0;

  for(let i = 0; i < len; i++) {
    result = result + array[i];
  }

  return result;
};

const multiply = function(array) {
  let len = array.length;
  let result = 1;

  for(let i = 0; i < len; i++) {
    result = result * array[i];
  }

  return result;
};

const power = function(a, b) {
	let result = 1;
  for(let i = 0; i < b; i++) {
    result = result * a;
  }
  return result;
};

const factorial = function(a) {
	let result = 1;
  for(let i = a; i > 1; i--) {
    result = result * i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
