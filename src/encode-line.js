const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let indexReset = false;
  let result = '';
  let index = 1;
  let current = str[0];
  for (let i = 0; i < str.length; i++) {
    indexReset = false;
    if (str[i + 1] !== current || i === str.length - 1) {
      if (index !== 1) {
        result += index += current;
      } else {
        result += current;
      }
      index = 1;
      indexReset = true;
    }
    current = str[i + 1];
    if (!indexReset) {
      index += 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
