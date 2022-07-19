import React from 'react';

interface TypographyProps {
	as?: string;
	appearance?: 'header' | 'body';
	className?: string;
	children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ as = 'span', children, className }) => {
	return React.createElement(as, { className: className }, children);
};
