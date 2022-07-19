import { useClassName } from '@hooks';

interface BoxProps {
	className?: string;
	children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({ children, className }) => {
	const classNames = useClassName({ def: '', important: className });

	return <div className={classNames}>{children}</div>;
};
