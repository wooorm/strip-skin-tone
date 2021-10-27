# strip-skin-tone

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Strip [skin tone modifiers][diversity] (as in Fitzpatrick scale) from emoji
(🎅🏿 to 🎅).

## Contents

*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`stripSkinTone(value)`](#stripskintonevalue)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install strip-skin-tone
```

In Deno with [Skypack][]:

```js
import {stripSkinTone} from 'https://cdn.skypack.dev/strip-skin-tone@2?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {stripSkinTone} from 'https://cdn.skypack.dev/strip-skin-tone@2?min'
</script>
```

## Use

```js
import {stripSkinTone} from 'strip-skin-tone'

stripSkinTone('🎅🏿') // => '🎅'
stripSkinTone('👌🏻') // => '👌'
```

## API

This package exports the following identifiers: `stripSkinTone`.
There is no default export.

### `stripSkinTone(value)`

Strip skin tone modifiers from `value`.

###### Parameters

*   `value` (`string`) — value to clean of skin tone modifiers

###### Returns

`string` — cleaned value.

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`sindresorhus/skin-tone`](https://github.com/sindresorhus/skin-tone)
    — change the skin tone of emoji

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

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

[skypack]: https://www.skypack.dev

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[diversity]: https://unicode.org/reports/tr51/#Diversity_Implementations
