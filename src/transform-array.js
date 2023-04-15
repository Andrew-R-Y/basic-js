const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) !== true) {throw new Error ("'arr' parameter must be an instance of the Array!")}
  const resultedArray = [];
  console.log('начальное состояние массива:', resultedArray)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++
    }
    else if (arr[i] === '--discard-prev') {
      if ((resultedArray.length > 0) && (arr[i-2] !== '--discard-next') && (arr[i-2] !== '--double-next')) {
        console.log('убираю предыдущий элемент:', arr[i-1])
        resultedArray.pop();
        console.log('массив после добавления:', resultedArray);
      } else if ((resultedArray.length > 0) && (arr[i-2] === '--double-next')) {
        console.log('убираю предыдущий элемент (один из удвоенных)', arr[i-1])
        resultedArray.pop();
        console.log('массив после двойного исключения элемента:', resultedArray);
      }
    }
    else if (arr[i] === '--double-next') {
      if (arr[i+1]) {
        console.log('добавляю удвоенный элемент:', arr[i+1])
        resultedArray.push(arr[i+1]);
        resultedArray.push(arr[i+1]);
        i++;
        console.log('массив после добавления:', resultedArray);
      }
    }
    else if (arr[i] === '--double-prev') {
      if (i > 0) {
        if (arr[i-2] !== '--discard-next') {
          console.log('добавляю элемент:', arr[i-1])
          resultedArray.push(arr[i - 1]);
          console.log('массив после добавления:', resultedArray);
        } else {
          console.log('планируемый к добавлению элемент был исключен')
        }
      }
    } else {
      console.log('добавляю элемент:', arr[i])
      resultedArray.push(arr[i]);
      console.log('массив после добавления:', resultedArray);
    }
  }
  console.log('Результирующий массив:', resultedArray)
  return resultedArray;
}

module.exports = {
  transform
};
