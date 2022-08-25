const editorConfig = require('./config');

const prettierInitialConfig = {
  trailingComma: "none",
  singleQuote: true,
  semi: true
};

const prettierParsedConfig = {
  tabWidth: editorConfig.tab_width,
  useTabs: editorConfig.indent_style === 'tab'
};

module.exports = {...prettierInitialConfig, ...prettierParsedConfig};