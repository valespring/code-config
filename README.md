![Place Framework Header](https://raw.githubusercontent.com/valespring/place-framework/master/docs/logo-header.gif?sanitize=true)


<p align="center">
<a href="https://www.npmjs.com/package/place-framework" target="_blank">
    <img src="https://img.shields.io/npm/v/@place-framework/code-config?style=flat-square">
</a>
</p>



PLACE Code Config
====

![Place Framework Ecosystem Diagram](https://raw.githubusercontent.com/valespring/place-framework/master/docs/ecosystem-diagram.jpg?sanitize=true)

## Introduction

This configuration is my personal preferences, linters, and rules when it comes to writing frontend code. It is entirely optional to use in conjunction with your project, and is the baseline default option for the [Place Webpack Preset](https://www.npmjs.com/package/@place-framework/place-webpack-preset).

## Implementation

The following configuration files for each formatting system are as follows:

- `babel.config.js` 
	- Key: `BABEL_CONFIG`
- `eslint.config.js`
	- Key: `ESLINT_CONFIG`
- `prettier.config.js`
	- Key: `PRETTIER_CONFIG`
- `stylelint.config.js`
	- Key: `STYLELINT_CONFIG`

Simple Example:

```
// prettier.config.js

const PRETTIER_CONFIG = require('@place-framework/code-config').PRETTIER_CONFIG;

module.exports = PRETTIER_CONFIG;
```

Complex Example:

```
// eslint.config.js

const ESLINT_CONFIG = require('@place-framework/code-config').ESLINT_CONFIG;

module.exports = [
	{
		files: ['**/*.js'],
		plugins: {
			...ESLINT_CONFIG.plugins.stylistic
		},
		rules: {
			...ESLINT_CONFIG.configs.base.rules,
			...ESLINT_CONFIG.configs.stylistic.rules
		}
	}, ESLINT_CONFIG.configs.prettier
];
```
