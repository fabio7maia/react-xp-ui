import 'normalize.css';
import '../src/assets/main.css';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const globalTypes = {
	themes: {
		defaultValue: ['light', 'dark'],
	},
};
