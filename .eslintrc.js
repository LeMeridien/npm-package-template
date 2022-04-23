module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		// 'airbnb',
		// 'airbnb/hooks',
		// 'airbnb-typescript',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.eslint.json'
		// project: './tsconfig.json'
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'comma-dangle': ['error', 'never'],
		'linebreak-style': ['error', 'unix'],
		'import/extensions': 0,
		'import/prefer-default-export': 0,
		'@typescript-eslint/no-unsafe-call': 0,
		'no-tabs': ['error', { allowIndentationTabs: true }]
	}
};
