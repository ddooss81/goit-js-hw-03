'use strict';

function getCommonElements(array1, array2) {
  let result = [];
  for (let a = 0; a < array2.length; a++){
    if (array1.includes(array2[a])){
      result.push(array2[a]);
    }
  }
  return result;
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));