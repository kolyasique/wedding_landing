// import { closestCorners, DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
// import { arraySwap, rectSwappingStrategy, SortableContext, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';
// import { useState } from 'react';
// import { range } from '../helpers/range';
// import Masonry from './Masonry';

// import '../Masonry.css';
// export function Rules({ data }) {
// 	const initialItems = range(15).map((id, index) => ({
// 		id: id + 1,
// 		// title: data[index].title,
// 		height: 100 + Math.random() * 400,
// 	}));
// 	const [items, setItems] = useState(initialItems);

// 	const sensors = useSensors(
// 		useSensor(MouseSensor),
// 		useSensor(TouchSensor),
// 		useSensor(KeyboardSensor, {
// 			coordinateGetter: sortableKeyboardCoordinates,
// 		}),
// 	);

// 	return (
// 		<div id="rules">
// 			<p>PISOS</p>
// 			<DndContext
// 				sensors={sensors}
// 				collisionDetection={closestCorners}
// 				onDragEnd={(event) => {
// 					const { active, over } = event;
// 					if (over && active.id !== over.id) {
// 						setItems((items) => {
// 							const oldIndex = items.findIndex((item) => item.id === active.id);
// 							const newIndex = items.findIndex((item) => item.id === over.id);
// 							return arraySwap(items, oldIndex, newIndex);
// 						});
// 					}
// 				}}
// 			>
// 				<div className="rules">
// 					<SortableContext items={items} strategy={rectSwappingStrategy}>
// 						<Masonry
// 							items={items}
// 							itemKey={(item) => item.title}
// 							columnWidth={150}
// 							gap={8}
// 							renderItem={(item) => <Cell item={item} />}
// 						/>
// 					</SortableContext>
// 				</div>
// 			</DndContext>
// 		</div>
// 	);
// }

// function Cell({ item }) {
// 	const sortable = useSortable({
// 		id: item.id,
// 		animateLayoutChanges: (args) => {
// 			// return false
// 			// return args.isSorting
// 			return !args.wasDragging;
// 		},
// 	});

// 	const getPlaceholderHeight = () => {
// 		if (sortable.isOver && sortable.active) {
// 			return sortable.active.rect.current.initial?.height;
// 		}

// 		if (sortable.isDragging && sortable.over) {
// 			return sortable.over.rect.height;
// 		}

// 		return item.height;
// 	};

// 	return (
// 		<div style={{ height: getPlaceholderHeight(), transition: '0.2s height' }}>
// 			<div
// 				ref={sortable.setNodeRef}
// 				style={{
// 					height: item.height,
// 					lineHeight: item.height + 'px',
// 					transform: CSS.Translate.toString(sortable.transform),
// 					transition: sortable.transition,
// 					// opacity:
// 					//   sortable.isOver && sortable.over?.id !== sortable.active?.id
// 					//     ? 0.5
// 					//     : 1,
// 				}}
// 				{...sortable.attributes}
// 				{...sortable.listeners}
// 				className="item"
// 			>
// 				{item.id}
// 			</div>
// 		</div>
// 	);
// }

//!
import { closestCorners, DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arraySwap, rectSwappingStrategy, SortableContext, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState, useEffect } from 'react';
import { range } from '../helpers/range';
import Masonry from './Masonry';

import '../Masonry.css';

export function Rules({ data }) {
	useEffect(() => {
		if (!data) return;
		const initialItems = range(data.length).map((id, index) => ({
			id: id + 1,
			title: data[index]?.title || '',
			description: data[index]?.description || '',
			height: 190 + Math.random() * 50,
		}));
		setItems(initialItems);
	}, [data]);

	const [items, setItems] = useState([]);

	const sensors = useSensors(
		useSensor(MouseSensor),
		useSensor(TouchSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);

	return (
		<div id="rules">
			<div className="containerCustom">
				<div className="customRuleH">
					{/* className="col-md-10 col-md-offset-1 section-title" */}
					<h2 className="customRuleH2">Как подготовиться?</h2>
				</div>
				<DndContext
					sensors={sensors}
					collisionDetection={closestCorners}
					onDragEnd={(event) => {
						const { active, over } = event;
						if (over && active.id !== over.id) {
							setItems((items) => {
								const oldIndex = items.findIndex((item) => item.id === active.id);
								const newIndex = items.findIndex((item) => item.id === over.id);
								return arraySwap(items, oldIndex, newIndex);
							});
						}
					}}
				>
					<div className="rules">
						<SortableContext items={items} strategy={rectSwappingStrategy}>
							<Masonry
								items={items}
								itemKey={(item) => item.id}
								columnWidth={150}
								gap={8}
								renderItem={(item) => <Cell item={item} />}
							/>
						</SortableContext>
					</div>
				</DndContext>
			</div>
		</div>
	);
}

function Cell({ item }) {
	const sortable = useSortable({
		id: item.id,
		animateLayoutChanges: (args) => !args.wasDragging,
	});

	const getPlaceholderHeight = () => {
		if (sortable.isOver && sortable.active) {
			return sortable.active.rect.current.initial?.height;
		}

		if (sortable.isDragging && sortable.over) {
			return sortable.over.rect.height;
		}

		return item.height;
	};

	return (
		<div style={{ height: getPlaceholderHeight(), transition: '0.2s height' }}>
			<div
				ref={sortable.setNodeRef}
				style={{
					height: item.height,
					// lineHeight: item.height + 'px',
					transform: CSS.Translate.toString(sortable.transform),
					transition: sortable.transition,
				}}
				{...sortable.attributes}
				{...sortable.listeners}
				className="item"
			>
				<div className="itemText">
					<p className="itemTextH">{item.title}</p>
					<p className="itemTextP">{item.description}</p>
				</div>
			</div>
		</div>
	);
}

//!
// import { closestCorners, DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
// import { arraySwap, rectSwappingStrategy, SortableContext, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';
// import { useState, useEffect, useRef } from 'react';
// import { range } from '../helpers/range';
// import Masonry from './Masonry';

// import '../Masonry.css';

// export function Rules({ data }) {
// 	// Проверка на наличие данных и инициализация initialItems
// 	const initialItems = data
// 		? range(data.length).map((id, index) => ({
// 				id: id + 1,
// 				title: data[index]?.title || '',
// 				description: data[index]?.description || '',
// 				height: 100 + Math.random() * 100,
// 		  }))
// 		: [];

// 	const [items, setItems] = useState(initialItems);

// 	const sensors = useSensors(
// 		useSensor(MouseSensor),
// 		useSensor(TouchSensor),
// 		useSensor(KeyboardSensor, {
// 			coordinateGetter: sortableKeyboardCoordinates,
// 		}),
// 	);

// 	return (
// 		<div id="rules">
// 			<p>PISOS</p>
// 			<DndContext
// 				sensors={sensors}
// 				collisionDetection={closestCorners}
// 				onDragEnd={(event) => {
// 					const { active, over } = event;
// 					if (over && active.id !== over.id) {
// 						setItems((items) => {
// 							const oldIndex = items.findIndex((item) => item.id === active.id);
// 							const newIndex = items.findIndex((item) => item.id === over.id);
// 							return arraySwap(items, oldIndex, newIndex);
// 						});
// 					}
// 				}}
// 			>
// 				<div className="rules">
// 					<SortableContext items={items} strategy={rectSwappingStrategy}>
// 						<Masonry
// 							items={items}
// 							itemKey={(item) => item.id}
// 							columnWidth={150}
// 							gap={8}
// 							renderItem={(item) => <Cell item={item} />}
// 						/>
// 					</SortableContext>
// 				</div>
// 			</DndContext>
// 		</div>
// 	);
// }

// function Cell({ item }) {
// 	const [itemHeight, setItemHeight] = useState(item.height);
// 	const itemTextPRef = useRef(null);

// 	const sortable = useSortable({
// 		id: item.id,
// 		animateLayoutChanges: (args) => !args.wasDragging,
// 	});

// 	useEffect(() => {
// 		if (itemTextPRef.current) {
// 			const height = itemTextPRef.current.getBoundingClientRect().height;
// 			setItemHeight(height);
// 		}
// 	}, [itemTextPRef.current, item.title, item.description]);

// 	const getPlaceholderHeight = () => {
// 		if (sortable.isOver && sortable.active) {
// 			return sortable.active.rect.current.initial?.height;
// 		}

// 		if (sortable.isDragging && sortable.over) {
// 			return sortable.over.rect.height;
// 		}

// 		return itemHeight;
// 	};

// 	return (
// 		<div style={{ height: getPlaceholderHeight(), transition: '0.2s height' }}>
// 			<div
// 				ref={sortable.setNodeRef}
// 				style={{
// 					height: itemHeight,
// 					lineHeight: itemHeight + 'px',
// 					transform: CSS.Translate.toString(sortable.transform),
// 					transition: sortable.transition,
// 				}}
// 				{...sortable.attributes}
// 				{...sortable.listeners}
// 				className="item"
// 			>
// 				<div ref={itemTextPRef} className="itemTextP">
// 					<div>{item.title}</div>
// 					<div>{item.description}</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
