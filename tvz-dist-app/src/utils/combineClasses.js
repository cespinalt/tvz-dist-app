const combineClasses = function() {
  return Array.prototype.slice.call(arguments, 0).reduce((a, b) => {
    if (typeof b !== 'string') {
      throw new Error(`Expected ${b} to be a string, but got ${typeof b}`);
    }

    a += ` ${b}`;
    return a;
  }, '');
};


export default combineClasses;
