const convertToCelsius = function(fahr) {
  let result = (fahr-32) / (9/5);
  return parseFloat(result.toFixed(2));
};

const convertToFahrenheit = function(cels) {
  let result = cels * 9/5 + 32;
  return parseFloat(result.toFixed(2));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
