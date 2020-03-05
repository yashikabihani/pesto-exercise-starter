function sumAll([a, b]) {
  let sum = 0;
  let lb = 0;
  let ub = 0;
  if (a <= b) {
    // eslint-disable-next-line no-const-assign
    lb = a;
    // eslint-disable-next-line no-const-assign
    ub = b;
  } else {
    // eslint-disable-next-line no-const-assign
    lb = b;
    // eslint-disable-next-line no-const-assign
    ub = a;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = lb; i <= ub; i++) {
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};
