// Separating to be modularly included
const EDITOR_CONFIG = require('../editor-config');

const prettierInitialConfig = {
	trailingComma: 'none',
	singleQuote: true,
	semi: true
};

// Custom use with .editorconfig
const prettierParsedConfig = {
	tabWidth: EDITOR_CONFIG.tab_width,
	useTabs: EDITOR_CONFIG.indent_style === 'tab'
};

module.exports = {
	...prettierInitialConfig, ...prettierParsedConfig
};
