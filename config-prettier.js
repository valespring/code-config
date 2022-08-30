// Separating to be modularly included
const editorConfig = require('./config');

const prettierInitialConfig = {
  trailingComma: "none",
  semi: true
};

// Custom use with .editorconfig
const prettierParsedConfig = {
  tabWidth: editorConfig.tab_width,
  useTabs: editorConfig.indent_style === 'tab'
};

const prettierDefaultConfig = {...prettierInitialConfig, ...prettierParsedConfig};

exports.default = prettierDefaultConfig;
exports.scss = Object.assign({}, prettierDefaultConfig, {extensions: ['.scss']});