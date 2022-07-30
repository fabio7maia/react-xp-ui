export interface FormControlProps {
	label?: string | string[];
	help?: string | string[];
	children: React.ReactNode;
	className?: string;
}

export interface InputProps<TValue> {
	required?: boolean;
	formControl?: Omit<FormControlProps, 'children'>;
	className?: string;
	placeholder?: string;
	value?: TValue;
	onChange?: (value?: TValue, selectedItem?: Record<string, any>) => void;
}

export const InputPropsDefaultValues: InputProps<any> = {
	required: false,
};

export type StringNumber = string | number;
export type BasicType = string | number | boolean;
