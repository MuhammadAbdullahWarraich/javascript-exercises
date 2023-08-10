// const removeFromArray = function(arr, ...removeUs) {
//   let answer = [];
//   arrIndex: for (element of arr)  {
//     for (let i = 0; i < removeUs.length; i++) {
//       if (element === removeUs[i]) continue arrIndex;
//     }
//     answer.push(element);
//   }
//   return answer;
// };

const removeFromArray = function(arr, elementsToBeRemoved) {
  let answer = [];
  arrIndex: for (element of arr)  {
    for (let i = 1; i < arguments.length; i++) {
      if (element === arguments[i]) continue arrIndex;
    }
    answer.push(element);
  }
  return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
