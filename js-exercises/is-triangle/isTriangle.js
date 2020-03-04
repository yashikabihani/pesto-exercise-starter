function isTriangle(a, b, c) {
  if (a + b < c) return false;
  // eslint-disable-next-line no-else-return
  else if (a + c < b) return false;
  else if (b + c < a) return false;
  else return true;
}

export {
  isTriangle,
};
