import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from '.';
import { Typography } from '../typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Box',
	component: Box,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: <Typography as="h1">Box content</Typography>,
	className: 'border-2 border-sky-500',
};
