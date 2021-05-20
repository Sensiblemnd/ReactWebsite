/* eslint-disable @typescript-eslint/no-var-requires */
const { copySync, readFileSync, writeFileSync } = require("fs-extra");
const { resolve, dirname, join } = require("path");
const { parse: parseCSS, stringify: stringifyCSS } = require("css");
/* eslint-enable @typescript-eslint/no-var-requires */

const baseCSSFilename = "button.css";
const stylesDir = resolve(__dirname, "../dist/stories");
const pfDir = dirname(require.resolve(`../src/stories/${baseCSSFilename}`));

const css = readFileSync(join(pfDir, baseCSSFilename), "utf8");
const ast = parseCSS(css);

copySync(join(pfDir, "assets"), join(stylesDir, "assets"));
writeFileSync(join(stylesDir, "base.css"), stringifyCSS(ast));
