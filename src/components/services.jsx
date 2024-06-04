import React from 'react';
import '../App.css';
export const Services = (props) => {
	return (
		<div id="services" className="text-center">
			<div className="container">
				<div className="section-title">
					<h2>Ресторан Percorso</h2>
					<p>Зал "Антинори"</p>
				</div>
				<div className="row">
					{props.data
						? props.data.map((d, i) => (
								<div key={`${d.name}-${i}`} className="col-md-4">
									{' '}
									{/* <i className={d.img}>
										<img src={d.img}></img>
									</i> */}
									<div className="service_img">
										<img src={d.img}></img>
									</div>
									<div className="service-desc">
										<h3>{d.name}</h3>
										<p>{d.text}</p>
									</div>
								</div>
						  ))
						: 'loading'}
				</div>
			</div>
		</div>
	);
};
