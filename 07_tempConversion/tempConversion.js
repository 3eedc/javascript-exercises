const convertToCelsius = function(C) {
  return Math.round((C - 32) * 5/9 * 10) / 10;
};

const convertToFahrenheit = function(F) {
  return Math.round((F * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
