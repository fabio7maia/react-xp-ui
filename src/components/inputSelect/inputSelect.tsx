import React from 'react';

import { useClassName } from '../../hooks';
import { useInputChange } from '../../hooks/useInputChange';
import { InputProps, InputPropsDefaultValues, StringNumber } from '../../types';
import { FormControl } from '../formControl';

export interface InputSelectProps<TItem> extends InputProps<StringNumber> {
	items: TItem[];
	propNameId: string;
	propNameText: string;
	propNameValue: string;
}

export const InputSelect = <TItem extends Record<string, any>>(props: InputSelectProps<TItem>) => {
	const {
		className,
		formControl,
		required = InputPropsDefaultValues.required,
		items = [],
		propNameId = 'id',
		propNameText = 'text',
		propNameValue = 'value',
		value,
	} = props;
	const classNames = useClassName({ def: 'select select-bordered w-full', important: className });
	const handleOnChange = useInputChange(props, { inputType: 'select' });

	return React.createElement(
		formControl ? FormControl : React.Fragment,
		formControl as any,
		<select className={classNames} value={value || '__unselected__'} onChange={handleOnChange}>
			{!required && (
				<option disabled value="__unselected__">
					{formControl?.label || 'Pick one'}
				</option>
			)}
			{items.map((item) => {
				const id = item[propNameId];
				const text = item[propNameText];
				const optionValue = item[propNameValue];

				return (
					<option key={id} value={optionValue}>
						{text}
					</option>
				);
			})}
		</select>
	);
};
