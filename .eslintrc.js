module.exports = {
	parser: '@typescript-eslint/parser',
	// Specifies the ESLint parser
	extends: [
		'plugin:@typescript-eslint/recommended',
		'react-app',
		'plugin:prettier/recommended',
		'plugin:sonarjs/recommended',
		'plugin:storybook/recommended',
	],
	plugins: ['@typescript-eslint', 'react', 'simple-import-sort', 'sonarjs'],
	parserOptions: {
		ecmaVersion: 6,
		// Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
	},
	rules: {
		indent: 'off',
		'no-undef': 'off',
		'@typescript-eslint/indent': 'off',
		'no-unused-vars': 'off',
		'default-case': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'no-console': 'warn',
		'no-debugger': 'warn',
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					// `react` first, `next` second, then packages starting with a character
					['^react$', '^next', '^[a-z]'],
					// Packages starting with `@`
					['^@'],
					// Packages starting with `~`
					['^~'],
					// Imports starting with `../`
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Imports starting with `./`
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					// Style imports
					['^.+\\.s?css$'],
					// Side effect imports
					['^\\u0000'],
				],
			},
		],
	},
	settings: {
		react: {
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
};
