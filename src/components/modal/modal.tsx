import React from 'react';

import { Button, ButtonProps } from '../button';

interface ModalProps {
	title?: string;
	children: React.ReactNode;
	buttons: ButtonProps[];
}

export const Modal: React.FC<ModalProps> = ({ children, title, buttons }) => {
	return (
		<div className="modal modal-open">
			<div className="modal-box">
				<h3 className="font-bold text-lg">{title}</h3>
				{children}
				{buttons.length && (
					<div className="modal-action">
						{buttons.map((btnProps) => (
							<Button {...btnProps} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};
