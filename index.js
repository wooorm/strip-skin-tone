/**
 * Strip skin tone modifiers from `value`.
 *
 * @param {string} value Input
 * @returns {string} Output
 */
export function stripSkinTone(value) {
  return value.replace(/🏻|🏼|🏽|🏾|🏿/g, '')
}
