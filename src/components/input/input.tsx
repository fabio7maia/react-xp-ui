import React from 'react';

import { useClassName } from '../../hooks';
import { useInputChange } from '../../hooks/useInputChange';
import { InputProps, InputPropsDefaultValues, StringNumber } from '../../types';
import { FormControl } from '../formControl';

interface InputInnerProps extends InputProps<StringNumber> {
	type: React.HTMLInputTypeAttribute;
}

export const Input: React.FC<InputInnerProps> = (props) => {
	const {
		className,
		formControl,
		required = InputPropsDefaultValues.required,
		type = 'text',
		placeholder,
		value,
	} = props;
	const classNames = useClassName({ def: 'input input-bordered w-full', important: className });
	const handleOnChange = useInputChange(props, { outputType: type === 'number' ? 'number' : 'original' });

	return React.createElement(
		formControl ? FormControl : React.Fragment,
		formControl as any,
		<input type={type} placeholder={placeholder} className={classNames} value={value} onChange={handleOnChange} />
	);
};
