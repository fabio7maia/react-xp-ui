import React from 'react';

import { InputProps } from '../../types';

interface UseInputChangeOptions {
	inputType?: 'input' | 'checkbox' | 'select';
	outputType?: 'original' | 'number' | 'boolean';
}

export const useInputChange = (
	{ items = [], onChange, propNameValue = 'value' }: InputProps<any> & { items?: any[]; propNameValue?: string },
	{ inputType = 'input', outputType = 'original' }: UseInputChangeOptions = {}
) => {
	return React.useMemo(
		() => (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			if (!onChange) return;

			let value: any = inputType === 'checkbox' ? (evt.target as any).checked : evt.target.value;

			if (outputType !== 'original') {
				try {
					if (outputType === 'boolean') {
						value = Boolean(value);
					} else if (outputType === 'number') {
						value = Number(value);
					}
				} catch (err) {
					value = undefined;
				}
			}

			if (value !== undefined) {
				const selectedItem = items.find((item) => item[propNameValue]);

				return onChange?.(value, selectedItem);
			}

			onChange?.();
		},
		[onChange, inputType, outputType, items, propNameValue]
	);
};
