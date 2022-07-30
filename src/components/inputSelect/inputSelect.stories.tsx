import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputSelect, InputSelectProps } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/InputSelect',
	component: InputSelect,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<InputSelectProps<{ text: string }>>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputSelect> = (args) => <InputSelect {...args} />;

const items = [{ text: 'First' }, { text: 'Second' }, { text: 'Third' }];
const propNameId = 'text',
	propNameText = 'text',
	propNameValue = 'text';
const onChange = (value, selectedItem) => {
	alert(`InputSelect > ${JSON.stringify({ value, selectedItem })}`);
};

export const Default = Template.bind({});

Default.args = {
	items,
	onChange,
	propNameId,
	propNameText,
	propNameValue,
};

export const WithFormControl = Template.bind({});

WithFormControl.args = {
	formControl: {
		label: 'Default select',
	},
	items,
	onChange,
	propNameId,
	propNameText,
	propNameValue,
};
