/**
 * Strip [skin tone modifiers][diversity] (as in Fitzpatrick scale) from emoji
 * (🎅🏿 to 🎅).
 *
 * @param {string} value
 *   Value to clean of skin tone modifiers.
 * @returns {string}
 *   Cleaned value.
 */
export function stripSkinTone(value) {
  return value.replace(/🏻|🏼|🏽|🏾|🏿/g, '')
}
