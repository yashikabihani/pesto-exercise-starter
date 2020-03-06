/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
const argsString = (message, args) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < args.length; i++) {
    // eslint-disable-next-line no-console
    message = message.replace('{}', args[i]);
  }
  return message;
};

export { argsString };
