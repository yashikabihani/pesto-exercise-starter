/* eslint-disable prefer-const */
/* eslint-disable vars-on-top */

function duplicateLetters(...args) {
  let max = 1;
  // eslint-disable-next-line no-unused-vars
  let maxChar = '';
  // eslint-disable-next-line no-param-reassign
  args += '';
  args.split('').forEach((char) => {
    if (args.split(char).length > max) {
      max = args.split(char).length;
      maxChar = char;
    }
  });
  // eslint-disable-next-line eqeqeq
  if (max == 2) return false;
  return (max - 1);
}

export {
  duplicateLetters,
};
