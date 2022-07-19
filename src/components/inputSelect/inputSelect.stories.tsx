import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputSelect } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/InputSelect',
	component: InputSelect,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof InputSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputSelect> = (args) => <InputSelect {...args} />;

export const Default = Template.bind({});

Default.args = {
	items: ['First', 'Second', 'Third'],
};

export const WithFormControl = Template.bind({});

WithFormControl.args = {
	formControl: {
		label: 'Default select',
	},
	items: ['First', 'Second', 'Third'],
};
