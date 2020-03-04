function sumFibs(num) {
  let a = 1;
  let b = 1;
  let f = 1;
  let sum = 1;
  // eslint-disable-next-line no-plusplus
  while (f <= num) {
    if (f % 2 !== 0) {
      sum += f;
    }
    f = a + b;
    a = b;
    b = f;
  }
  return sum;
}

export {
  sumFibs,
};
