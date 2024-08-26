const EDITOR_CONFIG = require('../../../editor-config');

module.exports = {
	printWidth: EDITOR_CONFIG.max_line_length,
	tabWidth: EDITOR_CONFIG.tab_width,
	useTabs: EDITOR_CONFIG.indent_style === 'tab'
};