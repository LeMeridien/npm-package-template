module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		// 'eslint:recommended',
		'plugin:import/typescript'
		// 'plugin:react/recommended',
		// 'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'comma-dangle': ['error', 'never'],
		'linebreak-style': ['error', 'unix'],
		'import/extensions': 0,
		'no-tabs': ['error', { allowIndentationTabs: true }]
	}
};
