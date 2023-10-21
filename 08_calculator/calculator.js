const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(x) {
  if (x.length == 0){
    return 0;
  }
	return x.reduce((total, amount) => total + amount); 
};

const multiply = function(x) {
  let product = 1;
  for(let i = 0; i < x.length; i++){
    product *= x[i];
  }
  return product;
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(num) {
	if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }
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
