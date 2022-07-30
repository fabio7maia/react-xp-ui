import React from 'react';

import { useClassName } from '../../hooks';
import { InputProps, InputPropsDefaultValues } from '../../types';

type InputCheckboxProps = InputProps;

export const InputCheckbox: React.FC<InputCheckboxProps> = ({
	className,
	formControl,
	required = InputPropsDefaultValues.required,
}) => {
	const classNames = useClassName({ def: 'checkbox', important: className });

	return (
		<div className="form-control">
			<label className="label cursor-pointer">
				<span className="label-text">Remember me</span>
				<input type="checkbox" className={classNames} />
			</label>
		</div>
	);
};
