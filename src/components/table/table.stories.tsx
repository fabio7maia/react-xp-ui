import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Table } from '.';
import { tableItems } from './table.data-stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Table',
	component: Table,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
	items: tableItems,
	columns: [
		{
			id: 'name',
			head: () => 'Name',
			body: (item) => <>{item.name}</>,
		},
		{
			id: 'email',
			head: () => 'Email',
			body: (item) => <>{item.email}</>,
		},
		{
			id: 'addressStreet',
			head: () => 'Adress - street',
			body: (item) => <>{item.address.street}</>,
		},
	],
	rowId: (item) => item.id,
};

export const Compact = Template.bind({});

Compact.args = {
	items: tableItems,
	columns: [
		{
			id: 'name',
			head: () => 'Name',
			body: (item) => <>{item.name}</>,
		},
		{
			id: 'email',
			head: () => 'Email',
			body: (item) => <>{item.email}</>,
		},
		{
			id: 'addressStreet',
			head: () => 'Adress - street',
			body: (item) => <>{item.address.street}</>,
		},
	],
	rowId: (item) => item.id,
	className: 'table-compact',
};

export const WithFoot = Template.bind({});

WithFoot.args = {
	items: tableItems,
	columns: [
		{
			id: 'name',
			head: () => 'Name',
			body: (item) => <>{item.name}</>,
			foot: () => 'Name',
		},
		{
			id: 'email',
			head: () => 'Email',
			body: (item) => <>{item.email}</>,
			foot: () => 'Email',
		},
		{
			id: 'addressStreet',
			head: () => 'Adress - street',
			body: (item) => <>{item.address.street}</>,
		},
	],
	rowId: (item) => item.id,
};

export const WithCustomTags = Template.bind({});

WithCustomTags.args = {
	items: tableItems,
	columns: [
		{
			id: 'name',
			head: () => 'Name',
			body: {
				render: (item) => <>{item.name}</>,
				tag: 'th',
			},
			foot: () => 'Name',
		},
		{
			id: 'email',
			head: {
				render: () => 'Email',
			},
			body: (item) => <>{item.email}</>,
			foot: () => 'Email',
		},
		{
			id: 'addressStreet',
			head: () => 'Adress - street',
			body: (item) => <>{item.address.street}</>,
		},
	],
	rowId: (item) => item.id,
};
