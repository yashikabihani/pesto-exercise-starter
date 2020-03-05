/* eslint-disable prefer-const */
/* eslint-disable quotes */
// eslint-disable-next-line no-unused-vars
import { isString } from "util";

function abbreviateString(str) {
  // eslint-disable-next-line prefer-const
  let lastIndexOfSpace = str.lastIndexOf(" ");
  let firstIndexOfSpace = str.indexOf(" ");
  let abbreviatedstring = (str.slice(0, firstIndexOfSpace)).concat(" ", (str.slice(lastIndexOfSpace + 1, lastIndexOfSpace + 2)).toUpperCase(), ".");
  return abbreviatedstring;
}

export { abbreviateString };
