/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
function telephoneCheck(...args) {
  let numberpattern = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\\-]?[\0-9]{3}[\s\\-]?[0-9]{4}$/;
  return numberpattern.test(args);
}

export { telephoneCheck };
