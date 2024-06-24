// import { Image } from './image';
// import React from 'react';
// import RViewerJS from 'viewerjs-react';
// import 'viewerjs-react/dist/index.css';
// export const Gallery = (props) => {
// 	return (
// 		<div id="portfolio" className="text-center">
// 			<div className="container">
// 				<div className="section-title">
// 					<h2>Меню</h2>
// 					<p>
// 						Выберите сет, который вам понравится, и мы закажем его под вас. Если есть аллергия на выбранные продукты, просьба
// 						сообщить и мы согласуем блюда
// 					</p>
// 				</div>
// 				<div className="row">
// 					<div className="portfolio-items">
// 						<RViewerJS>
// 							{props.data
// 								? props.data.map((d, i) => (
// 										// <div key={`${d.title}-${i}`} className="col-sm-2 col-md-4 col-lg-4">
// 										<div key={`${d.title}-${i}`} className="portfolio-item">
// 											<img src={d.largeImage} className="portfolio-item"></img>
// 											{/* <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} /> */}
// 										</div>
// 								  ))
// 								: 'Loading...'}
// 						</RViewerJS>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
import React from 'react';
import RViewerJS from 'viewerjs-react';
import 'viewerjs-react/dist/index.css';
import '../custom-gallery.css';
export const Gallery = (props) => {
	return (
		<div id="portfolio" className="text-center">
			<div className="container">
				<div className="section-title">
					<h2>Меню</h2>
					<p className="menuDescr">
						Ознакомьтесь с меню и выберите сет из блюд, который вам понравился - мы закажем его для Вас. Если есть аллергия на
						выбранные продукты, просьба указать ниже в форме и мы согласуем ингредиенты
					</p>
				</div>
				<div className="rowsr">
					<div className="portfolio-items">
						<RViewerJS
							options={{
								toolbar: {
									zoomIn: true,
									zoomOut: true,
									oneToOne: false,
									reset: false,
									prev: true, // Показываем кнопку "Назад"
									play: false,
									next: true, // Показываем кнопку "Вперед"
									rotateLeft: false,
									rotateRight: false,
									flipHorizontal: false,
									flipVertical: false,
									close: false, // Скрываем кнопку "Закрыть"
								},
							}}
						>
							{props.data
								? props.data.map((d, i) => (
										<div key={`${d.title}-${i}`}>
											<img src={d.largeImage} className="portfolio-item" alt={d.title} />
										</div>
								  ))
								: 'Loading...'}
						</RViewerJS>
					</div>
				</div>
			</div>
		</div>
	);
};
