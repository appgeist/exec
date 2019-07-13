# @appgeist/exec

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]

Utility function to execute a shell command and return a Promise.

## Usage

```js
const exec = require("@appgeist/exec");

const result = await exec(`
  identify
    -format "%[fx:w/h]"
    catz-picture.jpg
`);
```

## License

The [ISC License](LICENSE).

[npm-image]: https://img.shields.io/npm/v/@appgeist/exec.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@appgeist/exec
[license-image]: https://img.shields.io/npm/l/@appgeist/exec.svg?style=flat-square
[license-url]: LICENSE
