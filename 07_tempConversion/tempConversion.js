const convertToCelsius = function(temp) {

  let tempInCelsius = (temp - 32) * 5/9;
  tempInCelsius = Math.round(tempInCelsius * 10) / 10
  return tempInCelsius;

};

const convertToFahrenheit = function(temp) {

  let tempInFahrenheit = (temp * 9/5) + 32;
  tempInFahrenheit = Math.round(tempInFahrenheit * 10) / 10;
  return tempInFahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
