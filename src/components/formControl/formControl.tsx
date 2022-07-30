import React from 'react';

import { FormControlProps } from '../../types';

export const FormControl: React.FC<FormControlProps> = ({ label, help, children, className }) => {
	const labelAlt = Array.isArray(label) ? label[1] : undefined;
	label = Array.isArray(label) ? label[0] : label;

	const helpAlt = Array.isArray(help) ? help[1] : undefined;
	help = Array.isArray(help) ? help[0] : help;

	return (
		<div className={`form-control w-full ${className}`}>
			{(label || labelAlt) && (
				<label className="label">
					{label && <span className="label-text">{label}</span>}
					{labelAlt && <span className="label-text-alt">{labelAlt}</span>}
				</label>
			)}
			{children}
			{(help || helpAlt) && (
				<label className="label">
					{help && <span className="label-text">{help}</span>}
					{helpAlt && <span className="label-text-alt">{helpAlt}</span>}
				</label>
			)}
		</div>
	);
};
