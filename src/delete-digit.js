const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (!n) return;
  const myArray = n.toString().split('');
  const resArray = [];
  for (let i = 0; i < myArray.length; i += 1) {
    const numberArr = [];
    myArray.forEach((item, index) => {
      if (index !== i) {
        numberArr.push(item);
      }
      if (index === myArray.length - 1) {
        const result = Number(numberArr.join(''));
        resArray.push(result);
      }
    });
  }
  resArray.sort((a, b) => b - a);
  return resArray[0];
}

module.exports = {
  deleteDigit,
};
