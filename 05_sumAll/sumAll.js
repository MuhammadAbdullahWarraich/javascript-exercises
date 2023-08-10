const sumAll = function(num1, num2) {
  let answer = 0;
  if ((num1 < 0) || (num2 < 0) || ((typeof num1 !== "number") || (typeof num2 !== "number"))) return 'ERROR';

  const lowerRange = (num1 < num2)?num1:num2;
  const upperRange = (num1 < num2)?num2:num1;

  for (let i = lowerRange; i <= upperRange; i++)  {
    answer += i;
  }
  return answer;
};

// Do not edit below this line
module.exports = sumAll;
