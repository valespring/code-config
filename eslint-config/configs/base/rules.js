module.exports = {
	'arrow-body-style': 'off',
	'no-console': 'error',
	'no-empty': 'error',
	'no-extra-semi': 'error',
	'no-invalid-regexp': 'error',
	'no-irregular-whitespace': [
		'error', {
			'skipComments': true, 'skipRegExps': true, 'skipStrings': true, 'skipTemplates': true
		}
	],
	'no-multi-spaces': 'error',
	'no-unused-vars': [
		'error', {
			'vars': 'local',
			'args': 'none'
		}
	],
	'no-trailing-spaces': 'error',
	'prefer-arrow-callback': [
		'error', {
			'allowNamedFunctions': true
		}
	]
};