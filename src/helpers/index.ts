//TODO: Do somethinmg
/**
 * Replace special characters in a string with their HTML entity equivalents.
 * @param {string} str - the string to be parsed
 * @returns The string with the replaced characters.
 */
export const parseString = (str: string) => {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};
