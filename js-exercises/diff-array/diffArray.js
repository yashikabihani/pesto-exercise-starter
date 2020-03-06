function diffArray(arr1, arr2) {
  // eslint-disable-next-line prefer-const
  let diffElementsArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr1.length; i++) {
    if (!(arr2.includes(arr1[i]))) diffElementsArray.push(arr1[i]);
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr2.length; i++) {
    if (!(arr1.includes(arr2[i]))) diffElementsArray.push(arr2[i]);
  }
  return diffElementsArray;
}

export {
  diffArray,
};
