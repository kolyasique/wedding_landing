import React from 'react';

import '../App.css';
export const Features = (props) => {
	return (
		<div id="features" className="text-center">
			<div className="container">
				<div className="col-md-10 col-md-offset-1 section-title">
					<h2>План свадьбы</h2>
				</div>
				<div className="rowPlan">
					{props.data
						? props.data.map((d, i) => (
								// <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3 malyshka">
								// 	{' '}
								// 	{/* <i className={d.icon}></i> */}
								// 	<h3 className="planTitle">{d.title}</h3>
								// 	<p>{d.text}</p>
								// </div>
								<div key={i} className="malyshka">
									<div className="time">{d.time}</div>
									<div className="sboku">
										<div>
											<h3 className="planTitle">{d.title}</h3>
										</div>
										<div className="planText">{d.text}</div>
									</div>
								</div>
						  ))
						: 'Загрузка...'}
				</div>
			</div>
		</div>
	);
};
