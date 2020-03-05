/* eslint-disable no-shadow */
function addBigIntegers(intString) {
  let startIndex = 0;
  // eslint-disable-next-line prefer-const
  let array = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < intString.length; i++) {
    if (intString[i] === '\n') {
      array.push(intString.slice(startIndex, i));
      startIndex = i;
    }
  }
  const arrSum = array => array.reduce((a, b) => a + b, 0);
  return arrSum(array);
}

export { addBigIntegers };
