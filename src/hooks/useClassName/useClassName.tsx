interface UseClassNameInput {
	/** Set default class names */
	def: string;
	/** set important class names to override default */
	important?: string;
}
export const useClassName = ({ def, important }: UseClassNameInput) => {
	const defaultClasseNamesArray = def.split(' ');
	const importantClasseNamesArray = important?.split(' ');

	const defaultClasseNames = defaultClasseNamesArray.reduce((accumulator, value) => {
		return { ...accumulator, [value]: '' };
	}, {});

	const importantClasseNames = importantClasseNamesArray?.reduce((accumulator, value) => {
		return { ...accumulator, [value]: '' };
	}, {});

	return Object.keys({ ...defaultClasseNames, ...importantClasseNames }).join(' ');
};
