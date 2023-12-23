const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const rightValuesArr = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];
  if (!n || typeof n !== 'string') {
    return false;
  }
  if (n.length !== 17) {
    return false;
  }
  let result = true;
  const macArr = n.split('-');
  if (macArr.length !== 6) {
    return false;
  }
  macArr.forEach((item) => {
    if (item.length !== 2) {
      result = false;
    }
  });
  if (!result) {
    return result;
  }
  const macStr = macArr.join('').toLowerCase();
  for (let i = 0; i < macStr.length; i += 1) {
    if (!rightValuesArr.includes(macStr[i])) {
      result = false;
    }
  }
  return result;
}
module.exports = {
  isMAC48Address,
};
