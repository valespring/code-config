const ESLINT_CONFIG = require('./eslint-config');

module.exports = [
	{
		files: ['**/*.js'],
		plugins: ESLINT_CONFIG.plugins.stylistic,
		rules: {
			...ESLINT_CONFIG.configs.base.rules, ...ESLINT_CONFIG.configs.stylistic.rules
		}
	}
];