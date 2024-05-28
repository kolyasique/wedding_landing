import React, { useEffect } from 'react';

export const About = (props) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.id = 'weatherwidget-io-js';
		script.src = 'https://weatherwidget.io/js/widget.min.js';
		script.async = true;

		document.getElementsByTagName('head')[0].appendChild(script);

		return () => {
			if (script.parentNode) {
				script.parentNode.removeChild(script);
			}
		};
	}, []);
	return (
		<div id="about">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-6">
						{' '}
						<img src="img/wedding/elegance2.jpeg" className="img-responsive" alt="" />{' '}
					</div>
					<div className="col-xs-12 col-md-6">
						<div className="about-text">
							<h2>Прогулка на яхте Elegance</h2>
							<p>{props.data ? props.data.paragraph : 'Загрузка...'}</p>
							<h3>Важные моменты</h3>
							<div className="list-style">
								<div className="col-lg-6 col-sm-6 col-xs-12">
									<ul>{props.data ? props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>) : 'loading'}</ul>
								</div>
								<div className="col-lg-6 col-sm-6 col-xs-12">
									<ul>{props.data ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>) : 'loading'}</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="forecast_cover">
					<a
						className="weatherwidget-io"
						href="https://forecast7.com/ru/60d0830d12/saint-petersburg/"
						data-label_1="Санкт-Петербург"
						data-label_2="Погода"
						data-theme="pure"
						disabled
					>
						Санкт-Петербург Погода
					</a>
				</div>
			</div>
		</div>
	);
};
