import React from 'react';

export interface ButtonProps {
	appearance?: 'primary' | 'secondary' | 'accent';
	size?: 'sm' | 'md' | 'lg';
	/**
	 * Button contents
	 */
	onClick?: () => void;
	children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ appearance = 'primary', size = 'md', onClick, children }) => {
	return (
		<button
			type="button"
			className={`btn ${appearance === 'primary' && 'btn-primary'} ${
				appearance === 'secondary' && 'btn-secondary'
			} ${size === 'sm' && 'btn-sm'} ${size === 'md' && 'btn-md'} ${size === 'lg' && 'btn-lg'}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
