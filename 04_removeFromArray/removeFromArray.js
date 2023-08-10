const removeFromArray = function(arr, ...removeUs) {
  let answer = [];
  arrIndex: for (element of arr)  {
    for (let i = 0; i < removeUs.length; i++) {
      if (element === removeUs[i]) continue arrIndex;
    }
    answer.push(element);
  }
  return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
