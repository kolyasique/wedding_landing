// import React from 'react';

// import '../App.css';
// export const Navigation = (props) => {
// 	return (
// 		<nav id="menu" className="navbar navbar-default navbar-fixed-top">
// 			<div className="container">
// 				<div className="navbar-header">
// 					<button
// 						type="button"
// 						className="navbar-toggle collapsed"
// 						data-toggle="collapse"
// 						data-target="#bs-example-navbar-collapse-1"
// 					>
// 						{' '}
// 						<span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span>{' '}
// 						<span className="icon-bar"></span> <span className="icon-bar"></span>{' '}
// 					</button>
// 					<a className="navbar-brand page-scroll" id="brand_id" href="#page-top">
// 						Николай & Татьяна
// 					</a>{' '}
// 				</div>

// 				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
// 					<ul className="nav navbar-nav navbar-right">
// 						<li>
// 							<a href="#features" className="page-scroll">
// 								Мероприятия
// 							</a>
// 						</li>
// 						<li>
// 							<a href="#rules" className="page-scroll">
// 								Как подготовиться?
// 							</a>
// 						</li>
// 						<li>
// 							<a href="#about" className="page-scroll">
// 								Прогулка на яхте
// 							</a>
// 						</li>
// 						<li>
// 							<a href="#services" className="page-scroll">
// 								Ресторан
// 							</a>
// 						</li>
// 						<li>
// 							<a href="#portfolio" className="page-scroll">
// 								Меню
// 							</a>
// 						</li>
// 						{/* <li>
// 							<a href="#testimonials" className="page-scroll">
// 								Выбор меню
// 							</a>
// 						</li>
// 						<li>
// 							<a href="#team" className="page-scroll">
// 								Team
// 							</a>
// 						</li> */}
// 						<li>
// 							<a href="#contact" className="page-scroll">
// 								Выбор меню
// 							</a>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

export const Navigation = (props) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuClicked, setMenuClicked] = useState(false);
	const navRef = useRef(null);

	const handleDocumentClick = (event) => {
		if (navRef.current && !navRef.current.contains(event.target)) {
			setMenuOpen(false);
		}
	};

	useEffect(() => {
		if (menuOpen) {
			document.addEventListener('click', handleDocumentClick);
		} else {
			document.removeEventListener('click', handleDocumentClick);
		}
		return () => {
			document.removeEventListener('click', handleDocumentClick);
		};
	}, [menuOpen]);

	const handleMenuItemClick = () => {
		setMenuClicked(true);
		setTimeout(() => {
			setMenuOpen(false);
			setMenuClicked(false);
		}, 1000);
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav id="menu" className="navbar navbar-default navbar-fixed-top" ref={navRef}>
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" onClick={toggleMenu}>
						{' '}
						<span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span>{' '}
						<span className="icon-bar"></span> <span className="icon-bar"></span>{' '}
					</button>
					<a className="navbar-brand page-scroll" id="brand_id" href="#page-top">
						Николай & Татьяна
					</a>{' '}
				</div>

				<div className={`collapse navbar-collapse ${menuOpen ? 'in' : 'collapse'}`} id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right">
						<li>
							<a href="#features" className="page-scroll" onClick={handleMenuItemClick}>
								Мероприятия
							</a>
						</li>
						<li>
							<a href="#rules" className="page-scroll" onClick={handleMenuItemClick}>
								Как подготовиться?
							</a>
						</li>
						<li>
							<a href="#about" className="page-scroll" onClick={handleMenuItemClick}>
								Прогулка на яхте
							</a>
						</li>
						<li>
							<a href="#services" className="page-scroll" onClick={handleMenuItemClick}>
								Ресторан
							</a>
						</li>
						<li>
							<a href="#portfolio" className="page-scroll" onClick={handleMenuItemClick}>
								Меню
							</a>
						</li>
						<li>
							<a href="#contact" className="page-scroll" onClick={handleMenuItemClick}>
								Выбор меню
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
