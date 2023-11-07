const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbersToSum) {
  let returnSum = 0;
	numbersToSum.forEach((number) => {
    returnSum += parseInt(number, 10);
  });
  return returnSum;
};

const multiply = function(numbersToMultiply) {
  let returnMultiplication = numbersToMultiply[0];
  for(let i = 1; i < numbersToMultiply.length; i++){
    returnMultiplication = returnMultiplication * numbersToMultiply[i];
  }
  return returnMultiplication;
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(num) {
  var fact = 1;
  for(let i = 2; i <= num; i++){
    fact = fact * i;
  }
  return fact;
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
