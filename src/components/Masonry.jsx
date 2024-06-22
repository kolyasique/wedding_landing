// import { Fragment, Key, ReactNode } from 'react';
// import { useSize } from '../helpers/useSize';
// import { range } from '../helpers/range';

// import '../Masonry.css';
// export default function Masonry({ items, itemKey, columnWidth, gap, renderItem }) {
// 	const [sizeRef, size] = useSize();
// 	const columnCount = Math.floor(size.width / columnWidth);

// 	return (
// 		<div ref={sizeRef} className="flex" style={{ gap }}>
// 			{range(columnCount).map((columnIndex) => (
// 				<div key={columnIndex} className="rule" style={{ gap }}>
// 					{range(columnIndex, items.length, columnCount).map((itemIndex) => (
// 						<div className="ruleItem" key={itemKey(items[itemIndex])}>
// 							{renderItem(items[itemIndex])}
// 						</div>
// 					))}
// 				</div>
// 			))}
// 		</div>
// 	);
// }
import { range } from '../helpers/range';
import { useSize } from '../helpers/useSize';
import '../Masonry.css';

export default function Masonry({ items, itemKey, columnWidth, gap, renderItem }) {
	const [sizeRef, size] = useSize();
	const columnCount = size.width ? Math.floor(size.width / columnWidth) : 0;

	if (!items || items.length === 0) return null;

	return (
		<div ref={sizeRef} className="flex" style={{ gap }}>
			{range(columnCount).map((columnIndex) => (
				<div key={columnIndex} className="rule" style={{ gap }}>
					{range(columnIndex, items.length, columnCount).map((itemIndex) => (
						<div className="ruleItem" key={itemKey(items[itemIndex])}>
							{renderItem(items[itemIndex])}
						</div>
					))}
				</div>
			))}
		</div>
	);
}
