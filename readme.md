# strip-skin-tone

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Remove skin-tone (a.k.a. Fitzpatrick scale, or emoji modifiers)
from [emoji][diversity] (🎅🏿 > 🎅).

> Note: this strips skin-tones, use [`skin-tone`][skin-tone] to also set tones.

## Install

[npm][]:

```sh
npm install strip-skin-tone
```

## Use

```js
var strip = require('strip-skin-tone')

strip('🎅🏿') // => '🎅'
strip('👌🏻') // => '👌'
```

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/strip-skin-tone.svg

[build]: https://travis-ci.org/wooorm/strip-skin-tone

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/strip-skin-tone.svg

[coverage]: https://codecov.io/github/wooorm/strip-skin-tone

[downloads-badge]: https://img.shields.io/npm/dm/strip-skin-tone.svg

[downloads]: https://www.npmjs.com/package/strip-skin-tone

[size-badge]: https://img.shields.io/bundlephobia/minzip/strip-skin-tone.svg

[size]: https://bundlephobia.com/result?p=strip-skin-tone

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[diversity]: https://unicode.org/reports/tr51/#Diversity_Implementations

[skin-tone]: https://github.com/sindresorhus/skin-tone
