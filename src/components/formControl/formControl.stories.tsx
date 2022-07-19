import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormControl } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/FormControl',
	component: FormControl,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof FormControl>;

const Input = () => <input type="text" placeholder="Type here" className="input input-bordered w-full" />;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormControl> = (args) => <FormControl {...args} />;

export const Default = Template.bind({});

Default.args = {
	label: 'Default',
	children: <Input />,
};

export const WithHelp = Template.bind({});

WithHelp.args = {
	label: 'With Help',
	children: <Input />,
	help: 'Some help here',
};

export const With2LabelsAndHelps = Template.bind({});

With2LabelsAndHelps.args = {
	label: ['With 2 Labels And Helps', 'another label'],
	children: <Input />,
	help: ['Some help here', 'another help'],
};
