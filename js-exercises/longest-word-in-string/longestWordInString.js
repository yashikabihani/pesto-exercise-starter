/* eslint-disable no-plusplus */
function longestWordInString(...args) {
  // eslint-disable-next-line prefer-const
  let arrayOfWords = args.match(/\w[a-z]{0,}/gi);
  let longestLength = arrayOfWords[0];

  for (let x = 1; x < arrayOfWords.length; x++) {
    if (longestLength.length < arrayOfWords[x].length) {
      longestLength = arrayOfWords[x].length;
    }
  }
  return longestLength;
}

export { longestWordInString };
