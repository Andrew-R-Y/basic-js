const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minus = [];
  const values = [];
  const results = [];
  arr.forEach((item, index) => {
    if (item === -1) {
      minus.push(index);
    } else values.push(item);
  });
  values.sort((a, b) => {
    return a - b;
  });
  let j = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (minus.includes(i)) {
      results.push(-1);
    } else {
      results.push(values[j]);
      j += 1;
    }
  }
  return results;
}

module.exports = {
  sortByHeight,
};
