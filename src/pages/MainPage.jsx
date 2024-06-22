import React, { useEffect, useState } from 'react';
import { Navigation } from '../components/navigation';
import { Header } from '../components/header';
import { Features } from '../components/features';
import { About } from '../components/about';
import { Services } from '../components/services';
import { Gallery } from '../components/gallery';
import { Contact } from '../components/contact';
import JsonData from '../data/data.json';
import SmoothScroll from 'smooth-scroll';
import '../App.css';
import { Rules } from '../components/rules';

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
	offset: 140,
});

export default function MainPage() {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);

	return (
		<div>
			<Navigation />
			<Header data={landingPageData.Header} />
			<Features data={landingPageData.Features} />
			<Rules data={landingPageData.Rules} />
			<About data={landingPageData.About} />

			<Services data={landingPageData.Services} />
			<Gallery data={landingPageData.Gallery} />
			{/* <Testimonials data={landingPageData.Testimonials} />
    <Team data={landingPageData.Team} /> */}
			<Contact data={landingPageData.Contact} />
		</div>
	);
}
