import React, { useState, useEffect } from 'react';

import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
// export const scroll = new SmoothScroll('a[href*="#"]', {
// 	speed: 1000,
// 	speedAsDuration: true,
// });

const App = () => {
	// const [landingPageData, setLandingPageData] = useState({});
	// useEffect(() => {
	// 	setLandingPageData(JsonData);
	// }, []);

	return (
		<Routes>
			<Route path="/wedding" element={<MainPage />} />
			<Route path="*" element={<Navigate to="/wedding" replace />} />
		</Routes>
		// <div>
		// 	<Navigation />
		// 	<Header data={landingPageData.Header} />
		// 	<Features data={landingPageData.Features} />
		// 	<About data={landingPageData.About} />
		// 	<Services data={landingPageData.Services} />
		// 	<Gallery data={landingPageData.Gallery} />
		// 	{/* <Testimonials data={landingPageData.Testimonials} />
		//   <Team data={landingPageData.Team} /> */}
		// 	<Contact data={landingPageData.Contact} />
		// </div>
	);
};

export default App;
