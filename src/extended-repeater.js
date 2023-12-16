const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = String(str);
  if (!options) {
    return result;
  }

  let additionRepeated;
  if (options.additionRepeatTimes) {
    let additionSeparator = '|';
    if (options.additionSeparator) {
      additionSeparator = options.additionSeparator;
    }
    const additionRepeatTimes = options.additionRepeatTimes;
    addition = String(options.addition);
    addition = addition + additionSeparator;
    additionRepeated = addition.repeat(additionRepeatTimes);
    additionRepeated = additionRepeated.slice(0, -additionSeparator.length);
  } else if (options.additionSeparator) {
    additionRepeated = String(options.addition);
  }

  if (!options.additionRepeatTimes && options.addition) {
    additionRepeated = String(options.addition);
  }

  if (additionRepeated) {
    result = result + additionRepeated;
  }

  let resultRepeated;

  if (options.repeatTimes) {
    let separator = '+';
    if (options.separator) {
      separator = options.separator;
    }
    const repeatTimes = options.repeatTimes;
    result += separator;
    resultRepeated = result.repeat(repeatTimes);
    result = resultRepeated.slice(0, -separator.length);
  }

  return result;
}

module.exports = {
  repeater,
};
