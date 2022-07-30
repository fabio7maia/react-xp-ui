import React from 'react';

import { useClassName } from '../../hooks';
import { useInputChange } from '../../hooks/useInputChange';
import { InputProps, InputPropsDefaultValues } from '../../types';

type InputCheckboxProps = InputProps<boolean>;

export const InputCheckbox: React.FC<InputCheckboxProps> = (props) => {
	const { className, formControl, required = InputPropsDefaultValues.required, value } = props;
	const classNames = useClassName({ def: 'checkbox', important: className });
	const handleOnChange = useInputChange(props, { inputType: 'checkbox', outputType: 'boolean' });

	return (
		<div className="form-control">
			<label className="label cursor-pointer">
				<span className="label-text">{formControl?.label}</span>
				<input type="checkbox" className={classNames} value="true" checked={value} onChange={handleOnChange} />
			</label>
		</div>
	);
};
