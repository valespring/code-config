module.exports = {
	'@stylistic/array-element-newline': ['error', {
		'ArrayExpression': 'consistent',
		'ArrayPattern': {
			'minItems': 3
		}
	}],
	'@stylistic/array-bracket-newline': ['error', 'consistent'],
	'@stylistic/array-bracket-spacing': ['error', 'never'],
	'@stylistic/arrow-spacing': 'error',
	'@stylistic/comma-dangle':['error', 'never'],
	'@stylistic/comma-spacing': [
		'error', {
			'before': false,
			'after': true
		}
	],
	'@stylistic/indent': ['error', 'tab'],
	'@stylistic/no-multiple-empty-lines': [
		'error', {
			max:1
		}
	],
	'@stylistic/no-mixed-spaces-and-tabs': 'error',
	'@stylistic/no-tabs': [
		'error', {
			allowIndentationTabs: true
		}
	],
	'@stylistic/no-trailing-spaces': 'error',
	'@stylistic/object-curly-newline': ['error', {
		'ObjectExpression': { 'consistent': true },
		'ObjectPattern': 'never'
	}],
	'@stylistic/object-curly-spacing': [
		'error',
		'always',
		{
			'arraysInObjects': true,
			'objectsInObjects': false
		}
	],
	'@stylistic/object-property-newline': [
		'error', {
			'allowAllPropertiesOnSameLine': true
		}
	],
	'@stylistic/operator-linebreak': ['error', 'none'],
	'@stylistic/padding-line-between-statements': [
		'error', {
			blankLine: 'any',
			prev: [
				'const',
				'let',
				'var'
			],
			next: [
				'const',
				'let',
				'var'
			]
		}
	],
	'@stylistic/quotes': [
		2,
		'single',
		{
			'avoidEscape': true
		}
	],
	'@stylistic/semi': [
		'error',
		'always',
		{
			'omitLastInOneLineClassBody': true
		}
	],
	'@stylistic/space-before-blocks': 'error',
	'@stylistic/space-infix-ops': 'error',
	'@stylistic/space-in-parens': ['error', 'never']
};