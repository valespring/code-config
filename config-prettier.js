// Separating to be modularly included
const path = require('path');
const editorConfig = require('./config');

const prettierInitialConfig = {
  trailingComma: "none",
  singleQuote: true,
  semi: true
};

// Custom use with .editorconfig
const prettierParsedConfig = {
  tabWidth: editorConfig.tab_width,
  useTabs: editorConfig.indent_style === 'tab'
};

const prettierDefaultConfig = {...prettierInitialConfig, ...prettierParsedConfig};

exports.default = prettierDefaultConfig;
exports.scss = Object.assign({}, prettierDefaultConfig, {extensions: ['.scss'], configFile: path.resolve(__dirname, 'prettier.config')});