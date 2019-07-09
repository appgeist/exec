const { exec } = require('child_process');

const COMPACT_REGEXP = /\s+/g;
const compact = str => str.replace(COMPACT_REGEXP, ' ');

module.exports = command =>
  new Promise((resolve, reject) => {
    exec(compact(command), (err, stdout, stderr) => {
      if (err) reject(err);
      else if (stderr) reject(stderr);
      else resolve(stdout);
    });
  });
