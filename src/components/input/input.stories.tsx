import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Input',
	component: Input,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const WithFormControl = Template.bind({});

WithFormControl.args = {
	formControl: {
		label: 'Default input',
	},
};

export const Number = Template.bind({});

Number.args = {
	formControl: {
		label: 'Default input',
	},
	type: 'number',
};
