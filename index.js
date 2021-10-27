/**
 * Strip skin tone modifiers from `value`.
 *
 * @param {string} value
 *   Value to clean of skin tone modifiers.
 * @returns {string}
 *   Cleaned value.
 */
export function stripSkinTone(value) {
  return value.replace(/🏻|🏼|🏽|🏾|🏿/g, '')
}
