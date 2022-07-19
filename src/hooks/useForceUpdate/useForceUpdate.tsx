import React from 'react';

export const useForceUpdate = () => {
	const [_, setCount] = React.useState(0);

	return React.useMemo(() => () => setCount((oldValue) => oldValue + 1), []);
};
