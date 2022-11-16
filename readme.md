# strip-skin-tone

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Strip skin tone modifiers from emoji (🎅🏿 to 🎅).

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
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

## What is this?

This package removes [skin tone modifiers][diversity] (Fitzpatrick scale)
from a string.

## When should I use this?

You can use this package to remove skin tones.
You can alternatively use [`sindresorhus/skin-tone`][skin-tone] when you want
to set skin tones.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install strip-skin-tone
```

In Deno with [`esm.sh`][esmsh]:

```js
import {stripSkinTone} from 'https://esm.sh/strip-skin-tone@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {stripSkinTone} from 'https://esm.sh/strip-skin-tone@2?bundle'
</script>
```

## Use

```js
import {stripSkinTone} from 'strip-skin-tone'

stripSkinTone('🎅🏿') // => '🎅'
stripSkinTone('👌🏻') // => '👌'
```

## API

This package exports the identifier `stripSkinTone`.
There is no default export.

### `stripSkinTone(value)`

Strip skin tone modifiers (as in Fitzpatrick scale) from `value` (`string`).

###### Parameters

*   `value` (`string`) — value to clean of skin tone modifiers

###### Returns

Cleaned value (`string`).

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
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

[esmsh]: https://esm.sh

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[diversity]: https://unicode.org/reports/tr51/#Diversity_Implementations

[skin-tone]: https://github.com/sindresorhus/skin-tone
