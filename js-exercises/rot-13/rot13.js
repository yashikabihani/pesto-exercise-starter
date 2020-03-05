/* eslint-disable camelcase */
function rot13(...args) {
  let rot13_String = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < args.length; i++) {
    let asciiCharCode = args[i].charCodeAt(i);
    if (asciiCharCode >= 77) {
      asciiCharCode -= 13;
      // eslint-disable-next-line no-param-reassign
      rot13_String = rot13_String.concat(String.fromCharCode(asciiCharCode));
    } else if (asciiCharCode < 77) {
      asciiCharCode += 13;
      // eslint-disable-next-line no-param-reassign
      rot13_String = rot13_String.concat(String.fromCharCode(asciiCharCode));
    } else {
      rot13_String = rot13_String.concat(args[i]);
    }
  }
  return rot13_String;
}

export {
  rot13,
};
