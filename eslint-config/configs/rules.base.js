module.exports = {
	'array-bracket-spacing': [
		'error',
		'never',
		{
			'objectsInArrays': false
		}
	],
	'array-element-newline': ['error', 'consistent'],
	'array-bracket-newline': [
		'error', {
			'multiline': true
		}
	],
	'arrow-body-style': 'off',
	'comma-dangle': ['error', 'never'],
	'no-console': 0,
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
	'operator-linebreak': 0,
	'prefer-arrow-callback': [
		'error', {
			'allowNamedFunctions': true
		}
	]
};