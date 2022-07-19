import React from 'react';

import { useClassName, useForceUpdate } from '@hooks';

type TableRowItem = Record<string, any>;

interface TableColumOptions<TRender> {
	tag?: 'td' | 'th';
	render: TRender;
}

interface TableColumn {
	id: string;
	head?: (() => React.ReactNode) | TableColumOptions<() => React.ReactNode>;
	body: ((item: TableRowItem) => React.ReactNode) | TableColumOptions<(item: TableRowItem) => React.ReactNode>;
	foot?: (() => React.ReactNode) | TableColumOptions<() => React.ReactNode>;
}

interface TableProps {
	rowId: (item: TableRowItem) => string | number;
	className?: string;
	items: TableRowItem[];
	columns: TableColumn[];
}

export const Table: React.FC<TableProps> = ({ items = [], className, columns = [], rowId }) => {
	const classNames = useClassName({ def: 'table table-zebra w-full', important: className });
	const initialized = React.useRef(false);
	const hasHead = React.useRef(false);
	const hasFoot = React.useRef(false);
	const forceUpdate = useForceUpdate();

	const checkHeadAndFoot = React.useCallback(({ columns }: Pick<TableProps, 'columns'>) => {
		for (const col of columns) {
			if (hasFoot.current && hasHead.current) {
				break;
			}

			if (col.foot) {
				hasFoot.current = true;
			}

			if (col.head) {
				hasHead.current = true;
			}
		}

		forceUpdate();
	}, []);

	React.useEffect(() => {
		checkHeadAndFoot({ columns });
	}, [columns]);

	if (!initialized.current) {
		initialized.current = true;

		checkHeadAndFoot({ columns });
	}

	return (
		<div className="overflow-x-auto">
			<table className={classNames}>
				{hasHead.current && (
					<thead>
						<tr>
							{columns.map(({ id, head }) => {
								if (!head) {
									return React.createElement('th', { key: `tHead-${id}` });
								}

								const newHead: TableColumOptions<() => React.ReactNode> =
									typeof head === 'function' ? { tag: 'th', render: head } : (head as any);

								const { render, tag = 'th' } = newHead;

								return React.createElement(tag, { key: `tHead-${id}` }, render());
							})}
						</tr>
					</thead>
				)}
				<tbody>
					{items.map((item) => (
						<tr key={`tBody-${rowId(item)}`} className="hover">
							{columns.map(({ id, body }) => {
								const newBody: TableColumOptions<(item: TableRowItem) => React.ReactNode> =
									typeof body === 'function' ? { tag: 'td', render: body } : (body as any);

								const { render, tag = 'td' } = newBody;

								return React.createElement(tag, { key: `tBody-${rowId}-${id}` }, render(item));
							})}
						</tr>
					))}
				</tbody>
				{hasFoot.current && (
					<tfoot>
						<tr>
							{columns.map(({ id, foot }) => {
								if (!foot) {
									return React.createElement('th', { key: `tFoot-${id}` });
								}

								const newFoot: TableColumOptions<() => React.ReactNode> =
									typeof foot === 'function' ? { tag: 'th', render: foot } : (foot as any);

								const { render, tag = 'th' } = newFoot;

								return React.createElement(tag, { key: `tFoot-${id}` }, render());
							})}
						</tr>
					</tfoot>
				)}
			</table>
		</div>
	);
};
