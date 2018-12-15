const { stdout } = require('execa');
const mozjpeg = require('mozjpeg');

module.exports = (args = {}) => (buffer) => {
  let options = [];

  if (args.length) {
    for (let [key, value] of Object.entries(args)) {
      options.push(`-${key}`, `${value}`);
    }
  }

  return stdout(mozjpeg, options, {
    encoding: null,
    input: buffer,
    maxBuffer: Infinity,
  });
};
