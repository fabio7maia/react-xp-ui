import React from 'react';

import { useClassName } from '../../hooks';
import { InputProps, InputPropsDefaultValues } from '../../types';
import { FormControl } from '../formControl';

interface InputSelectProps extends InputProps {
	items: string[];
}

export const InputSelect: React.FC<InputSelectProps> = ({
	className,
	formControl,
	required = InputPropsDefaultValues.required,
	items = [],
}) => {
	const classNames = useClassName({ def: 'select select-bordered w-full', important: className });

	return React.createElement(
		formControl ? FormControl : React.Fragment,
		formControl as any,
		<select className={classNames}>
			{!required && (
				<option disabled selected>
					Pick one
				</option>
			)}
			{items.map((item) => (
				<option>{item}</option>
			))}
		</select>
	);
};
