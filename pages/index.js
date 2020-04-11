import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

// Import Components
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import CustomDomainPricing from '../components/CustomDomainPricing';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

const Index = (props) => {
	const apiUrl = process.env.API_URL;
	// const apiToken =  process.env.API_TOKEN;

	// Use State
	const [profile, setProfile] = useState({});
	const [features, setFeatures] = useState([]);
	const [pricing, setPricing] = useState([]);
	const [customDomainPricing, setCustomDomainPricing] = useState([]);

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
				setFeatures(data.data);
			})
			.catch((err) => console.log(err));

		// Fetch Pricing
		fetch(apiUrl + 'items/pricing')
			.then((res) => res.json())
			.then((data) => {
				setPricing(data.data);
			})
			.catch((err) => console.log(err));

		// Fetch Custom Domain Pricing
		fetch(apiUrl + 'items/custom_domain_pricing')
			.then((res) => res.json())
			.then((data) => {
				setCustomDomainPricing(data.data[0]);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<Hero profile={profile} />
			<WhyUs profile={profile} />
			<Features features={features} />
			<Pricing pricing={pricing} />
			<CustomDomainPricing customDomainPricing={customDomainPricing} />
			<Contacts profile={profile} />
			<Footer />
		</div>
	);
};

export default Index;