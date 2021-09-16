//TODO: Do somethinmg
//FIXME: asdasdasd
//WARNING: asdasd
//[x]: asdasd
export const parseString = (str: string) => {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};
