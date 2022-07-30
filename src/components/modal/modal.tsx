import React from 'react';

import { Button, ButtonProps } from '../button';

interface ModalProps {
	title?: string;
	children: React.ReactNode;
	buttons: ButtonProps[];
	onClickOutside?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, title, buttons, onClickOutside }) => {
	const id = '__modal_overlay__';
	const handleOnClickOutside = React.useCallback(
		(evt: React.MouseEvent) => {
			if ((evt.target as any).id === id) {
				onClickOutside?.();
			}
		},
		[onClickOutside]
	);

	return (
		<div
			className="modal modal-open cursor-pointer modal-bottom sm:modal-middle"
			onClick={handleOnClickOutside}
			id={id}
		>
			<div className="modal-box">
				<h3 className="font-bold text-lg mb-4">{title}</h3>
				{children}
				{buttons.length && (
					<div className="modal-action">
						{buttons.map((btnProps, index) => (
							<Button key={index} {...btnProps} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};
