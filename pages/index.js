import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

// Import Components
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

const Index = (props) => {
	const apiUrl = process.env.API_URL;
	// const apiToken =  process.env.API_TOKEN;

	// Use State
	const [profile, setProfile] = useState({});
	const [features, setFeatures] = useState([]);

	// Use Effect
	useEffect(() => {
		// Fetch Profile
		fetch(apiUrl + 'items/profile')
			.then((res) => res.json())
			.then((data) => {
				setProfile(data.data[0]);
			})
			.catch((err) => console.log(err));

		// Fetch Features
		fetch(apiUrl + 'items/features')
			.then((res) => res.json())
			.then((data) => {
				let _data = [...data.data];

				setFeatures(_data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<Hero profile={profile} />
			<WhyUs profile={profile} />
			<Features features={features} />
			<Pricing />
			<Contacts />
			<Footer />
		</div>
	);
};

export default Index;