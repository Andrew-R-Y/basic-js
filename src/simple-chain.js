const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  link: [],
  
  getLength() {
    return this.link.length;
  },

  addLink(arg) {
    if ((!!arg) && (typeof arg !== 'object')) {
      this.link.push(`( ${arg} )`);
    } else if (typeof arg === 'string') {
      this.link.push(`( ${arg} )`);
    } else if (arg === 0) {
      this.link.push(`( 0 )`);
    } else if (arg === null) {
      this.link.push(`( null )`);
    } else if ((typeof arg === 'number') && isNaN(arg)) {
      this.link.push(`( NaN )`);
    } else if (typeof arg === 'object') {
      this.link.push(`( ${arg} )`);
    } else if (arg === true) {
      this.link.push(`( true )`)
    } else if (arg === false) {
      this.link.push(`( false )`)
    } else if (arguments.length = 0) {
      this.link.push(`(  )`)
    }
    return this;
  },

  removeLink(position) {
    if ((!!position) && (!isNaN(position)) && (typeof position === 'number') && (position > 0) && ((position % 1) === 0) && (this.link.length > 0) && (position - 1 < this.link.length)) {
      this.link.splice(position - 1, 1);
      return this;
    } else {
      this.link = [];
      throw new Error('You can\'t remove incorrect link!');
    }
  },

  reverseChain() {
    this.link.reverse();
    return this;
  },

  finishChain() {
    result = this.link.join('~~');
    this.link = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
