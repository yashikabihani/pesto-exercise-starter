
function removeFalsyValues(array) {
  const falsyArray = [false, null, 0, NaN, undefined, ''];
  // eslint-disable-next-line prefer-const
  let truthyArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    if (!(falsyArray.includes(array[i]))) truthyArray.push(array[i]);
  }
  return truthyArray;
}

export {
  removeFalsyValues,
};
