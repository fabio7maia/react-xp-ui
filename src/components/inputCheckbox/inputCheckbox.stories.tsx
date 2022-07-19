import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputCheckbox } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/InputCheckbox',
	component: InputCheckbox,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof InputCheckbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputCheckbox> = (args) => <InputCheckbox {...args} />;

export const Default = Template.bind({});

Default.args = {};
