import React, { HTMLInputTypeAttribute } from 'react';

import { useClassName } from '@hooks';
import { InputProps, InputPropsDefaultValues } from '@types';

import { FormControl } from '../formControl';

interface InputInnerProps extends InputProps {
	type: React.HTMLInputTypeAttribute;
}

export const Input: React.FC<InputInnerProps> = ({
	className,
	formControl,
	required = InputPropsDefaultValues.required,
	type = 'text',
	placeholder,
}) => {
	const classNames = useClassName({ def: 'input input-bordered w-full', important: className });

	return React.createElement(
		formControl ? FormControl : React.Fragment,
		formControl as any,
		<input type={type} placeholder={placeholder} className={classNames} />
	);
};
