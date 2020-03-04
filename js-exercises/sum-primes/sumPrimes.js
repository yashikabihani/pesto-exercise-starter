function sumPrimes(num) {
  let sum = 0;
  let f = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i <= num; i++) {
    f = 0;
    // eslint-disable-next-line no-plusplus
    for (let j = 1; j < i; j++) {
      // eslint-disable-next-line eqeqeq
      if (i % j == 0) f += 1;
    }
    // eslint-disable-next-line eqeqeq
    if (f == 1) sum += i;
  }
  return sum;
}

export {
  sumPrimes,
};
