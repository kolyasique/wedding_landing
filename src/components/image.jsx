// import React from 'react';

// export const Image = ({ title, largeImage, smallImage }) => {
// 	return (
// 		<div className="portfolio-item">
// 			<div className="hover-bg">
// 				{' '}
// 				<a href={largeImage} title={title} data-lightbox-gallery="gallery1">
// 					<div className="hover-text">
// 						<h4>{title}</h4>
// 					</div>
// 					<img src={smallImage} className="img-responsive" alt={title} />{' '}
// 				</a>{' '}
// 			</div>
// 		</div>
// 	);
// };
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

export const Image = ({ title, largeImage, smallImage }) => {
	const imageRef = useRef(null);
	const navigate = useNavigate();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (imageRef.current && !imageRef.current.contains(event.target)) {
				navigate('/wedding#features'); // Navigate back to previous page on click outside image
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [navigate]);

	return (
		<div className="portfolio-item" ref={imageRef}>
			<div className="hover-bg">
				<a href={largeImage} title={title} data-lightbox-gallery="gallery1">
					<div className="hover-text">
						<h4>{title}</h4>
					</div>
					<p>PIPKA</p>
					<img src={smallImage} className="img-responsive" alt={title} />
				</a>
			</div>
		</div>
	);
};
