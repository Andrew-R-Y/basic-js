const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.direct = isDirect;
  }

  encrypt(stringIncome, keyIncome) {
    const baseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (!stringIncome || !keyIncome) {
      throw new Error('Incorrect arguments!');
    }
    let string = stringIncome.toLowerCase();
    let key = keyIncome.toLowerCase();
    const keyArr = [];
    for (let i = 0; i < key.length; i += 1) {
      keyArr.push(baseAlphabet.search(key[i]));
    }
    let result = '';
    let offset = 0;
    for (let i = 0; i < string.length; i += 1) {
      let nextLetter = '';
      const regExp = /[a-z]/;
      if (!regExp.test(string[i]) || baseAlphabet.search(string[i]) < 0) {
        result += string[i];
        offset += 1;
      } else {
        nextLetter = baseAlphabet.charAt(
          (baseAlphabet.search(string[i]) + keyArr[(i - offset) % key.length]) %
            26
        );
        result += nextLetter;
      }
    }
    if (!this.direct) {
      const resArr = result.split('');
      resArr.reverse();
      result = resArr.join('');
    }
    return result.toUpperCase();
  }

  decrypt(stringUp, keyIncome) {
    const baseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (!stringUp || !keyIncome) {
      throw new Error('Incorrect arguments!');
    }
    let string = stringUp.toLowerCase();
    let key = keyIncome.toLowerCase();
    if (!this.direct) {
      const incomeArr = string.split('');
      incomeArr.reverse();
      string = incomeArr.join('');
    }
    const keyArr = [];
    for (let i = 0; i < key.length; i += 1) {
      keyArr.push(baseAlphabet.search(key[i]));
    }
    let result = '';
    let offset = 0;
    for (let i = 0; i < string.length; i += 1) {
      let nextLetter = '';
      const regExp = /[a-z]/;
      if (!regExp.test(string[i]) || baseAlphabet.search(string[i]) < 0) {
        result += string[i];
        offset += 1;
      } else {
        nextLetter = baseAlphabet.charAt(
          (26 +
            baseAlphabet.search(string[i]) -
            keyArr[(i - offset) % key.length]) %
            26
        );
        result += nextLetter;
      }
    }
    if (!this.direct) {
      const resArr = result.split('');
      resArr.reverse();
      result = resArr.join('');
    }
    return result.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
