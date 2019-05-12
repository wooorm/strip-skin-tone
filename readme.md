# strip-skin-tone [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Remove skin-tone (a.k.a. Fitzpatrick scale, or emoji modifiers)
from [emoji][diversity] (🎅🏿 > 🎅).

> Note: this strips skin-tones, use [`skin-tone`][skin-tone] to also set
> tones.

## Installation

[npm][]:

```bash
npm install strip-skin-tone
```

## Usage

```js
var strip = require('strip-skin-tone')

strip('🎅🏿') // => '🎅'
strip('👌🏻') // => '👌'
```

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/strip-skin-tone.svg

[travis]: https://travis-ci.org/wooorm/strip-skin-tone

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/strip-skin-tone.svg

[codecov]: https://codecov.io/github/wooorm/strip-skin-tone

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://wooorm.com

[diversity]: http://unicode.org/reports/tr51/#Diversity_Implementations

[skin-tone]: https://github.com/sindresorhus/skin-tone
