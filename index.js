require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	"parser": "@typescript-eslint/parser",
	"extends": ["prettier"],
	"plugins": ["prettier"],
	"rules": {
		"prettier/prettier": "warn",
		"array-bracket-spacing": ["error", "never", { "objectsInArrays": false }],
		"array-element-newline": [
			"error", "consistent"
		],
		"array-bracket-newline": [
			"error",	
			{ 
				"multiline": true
			}
		],
		"arrow-body-style": "off",
		"semi": ["error", "always"],
		"quotes": [2, "single", { "avoidEscape": true }],
		"indent": ["error", "tab", 
			{ 
				"SwitchCase": 1,
				"ArrayExpression": "first",
				"MemberExpression": 1,
				"ObjectExpression": 1,
				"ImportDeclaration": 1,
				"CallExpression": {"arguments": "first"},
				"VariableDeclarator": "first"
			}
		],
		"no-tabs": ["error", { "allowIndentationTabs": true }],
		"no-console": 0,
		"operator-linebreak": 0,
		"comma-dangle": ["error", "never"],
		"prefer-arrow-callback": "off",
		"no-multi-spaces": "error",
		"object-curly-spacing": ["error", "always", { "objectsInObjects": true }],
		"object-curly-newline": ["error", { "ImportDeclaration": "always", "ExportDeclaration": "never" }],
		"object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
		"no-unused-vars": [
			"error",
			{
				"vars": "local",
				"args": "none"
			}
		]
	}
}