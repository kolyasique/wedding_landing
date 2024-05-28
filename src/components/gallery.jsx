import { Image } from './image';
import React from 'react';

export const Gallery = (props) => {
	return (
		<div id="portfolio" className="text-center">
			<div className="container">
				<div className="section-title">
					<h2>Меню</h2>
					<p>
						Выберите сет, который вам понравится, и мы закажем его под вас. Если есть аллергия на выбранные продукты, просьба
						сообщить и мы согласуем блюда
					</p>
				</div>
				<div className="row">
					<div className="portfolio-items">
						{props.data
							? props.data.map((d, i) => (
									// <div key={`${d.title}-${i}`} className="col-sm-2 col-md-4 col-lg-4">
									<div key={`${d.title}-${i}`} className="portfolio-item">
										<Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
									</div>
							  ))
							: 'Loading...'}
					</div>
				</div>
			</div>
		</div>
	);
};
