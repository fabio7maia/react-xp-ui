import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Modal',
	component: Modal,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
	title: 'Modal title',
	children: (
		<>
			<div>Modal content</div>
		</>
	),
	buttons: [
		{
			children: 'Ok',
		},
	],
};

export const TwoButtons = Template.bind({});

TwoButtons.args = {
	title: 'Modal title',
	children: (
		<>
			<div>Modal content</div>
		</>
	),
	buttons: [
		{
			children: 'Cancel',
			appearance: 'secondary',
		},
		{
			children: 'Ok',
		},
	],
};
