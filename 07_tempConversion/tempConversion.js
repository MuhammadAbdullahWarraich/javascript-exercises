const convertToCelsius = function(fahrenheitTemp) {
  let answer = ((fahrenheitTemp - 32) * 5 / 9) * 10;
  answer = Math.round(answer)/10;
  return answer;
};

const convertToFahrenheit = function(celsiusTemp) {
  let answer = ((celsiusTemp * 9 / 5) + 32) * 10;
  answer = Math.round(answer)/10;
  return answer;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
