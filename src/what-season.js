const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  const fnWithError = () => {
    throw new Error('Invalid date!');
  };
  if (isNaN(Date.parse(date))) {
    fnWithError();
  }
  if (typeof date !== 'object') {
    fnWithError();
  }
  if (date instanceof Date !== true) {
    fnWithError();
  }
  if (typeof date.getTimezoneOffset !== 'function') {
    fnWithError();
  }
  const month = date.getMonth();
  const seasons = [
    'winter',
    'winter',
    'spring',
    'spring',
    'spring',
    'summer',
    'summer',
    'summer',
    'autumn',
    'autumn',
    'autumn',
    'winter',
  ];
  result = seasons[month];
  console.log(date.getMonth());
  return result;
}

module.exports = {
  getSeason,
};
