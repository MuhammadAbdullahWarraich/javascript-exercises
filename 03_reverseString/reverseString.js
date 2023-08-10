const reverseString = function(string) {
  let answer = '';
  const length = string.length;
  for (let i = length - 1; i >= 0; i--)  {
    answer += string[i]; 
  }
  return answer;
};

// Do not edit below this line
module.exports = reverseString;
