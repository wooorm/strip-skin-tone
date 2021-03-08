# strip-skin-tone

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Remove skin-tone (a.k.a. Fitzpatrick scale, or emoji modifiers)
from [emoji][diversity] (🎅🏿 > 🎅).

> Note: this strips skin-tones, use [`skin-tone`][skin-tone] to also set tones.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install strip-skin-tone
```

## Use

This package exports the following identifiers: `stripSkinTone`.
There is no default export.

```js
import {stripSkinTone} from 'strip-skin-tone'

strip('🎅🏿') // => '🎅'
strip('👌🏻') // => '👌'
```

## API

### `stripSkinTone(value)`

Strip skin tone modifiers from `value` (`string`).
Returns `string`.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/strip-skin-tone/workflows/main/badge.svg

[build]: https://github.com/wooorm/strip-skin-tone/actions

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
