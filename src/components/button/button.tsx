import React from 'react';

interface ButtonProps {
	appearance?: 'primary' | 'secondary';
	size?: 'sm' | 'md' | 'lg';
	/**
	 * Button contents
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ appearance = 'primary', size = 'md', children }) => {
	return (
		<button
			type="button"
			className={`btn ${appearance === 'primary' && 'btn-primary'} ${
				appearance === 'secondary' && 'btn-secondary'
			} ${size === 'sm' && 'btn-sm'} ${size === 'md' && 'btn-md'} ${size === 'lg' && 'btn-lg'}`}
		>
			{children}
		</button>
	);
};
