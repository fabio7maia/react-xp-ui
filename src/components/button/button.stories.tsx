import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	appearance: 'primary',
	children: 'Primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	appearance: 'secondary',
	children: 'Secondary button',
};

export const Large = Template.bind({});
Large.args = {
	size: 'lg',
	children: 'Large button',
};

export const Small = Template.bind({});
Small.args = {
	size: 'sm',
	children: 'Small button',
};
