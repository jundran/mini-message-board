module.exports = {
	'env': {
		'node': true
	},
	'extends': [
		'eslint:recommended'
	],
	'languageOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		"prefer-const": "error",
		'indent': ['error','tab',{ 'SwitchCase': 1 }],
		'linebreak-style': ['error','unix'],
		'quotes': ['error','single'],
		'semi': ['error','never'],
		'keyword-spacing': ['error',{ 'before': true, 'after': true }],
		'func-call-spacing': ['error','never'],
		'space-before-function-paren': ['error','always'],
		'eol-last': ['error','always'],
		'comma-dangle': ['error','never'],
		'no-trailing-spaces': 'error',
		'no-unused-vars': 'warn',
	}
}
