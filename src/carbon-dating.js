const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity) {return false};
  let result;
  if (Number.isNaN(sampleActivity * 1)) {
    return false;
  } 
  if ((sampleActivity * 1) <= 0 || (sampleActivity * 1) > 15) {
    return false;
  } 
  if (typeof(sampleActivity) === 'string') {
    result = Math.ceil((5730 / 0.693) * Math.log(15 / (sampleActivity * 1)));
    console.log(result);
    return result;
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
