const withTypescript = require("@zeit/next-typescript");
const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withTypescript(withSass(withCss({})));
