export interface FormControlProps {
	label?: string | string[];
	help?: string | string[];
	children: React.ReactNode;
	className?: string;
}

export interface InputProps {
	required?: boolean;
	formControl?: Omit<FormControlProps, 'children'>;
	className?: string;
	placeholder?: string;
}

export const InputPropsDefaultValues: InputProps = {
	required: false,
};
