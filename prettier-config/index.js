const PRETTIER_EDITOR_CONFIG = require('./configs/editor');
const PRETTIER_USER_CONFIG = require('./configs/user');

module.exports = {
	...PRETTIER_EDITOR_CONFIG, ...PRETTIER_USER_CONFIG
};
