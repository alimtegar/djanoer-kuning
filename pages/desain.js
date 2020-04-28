import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

// Import Components
import Head from '../components/Head';
import Hero from '../components/Hero';
import Designs from '../components/Designs';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
    const apiUrl = process.env.API_URL;
    // const apiToken =  process.env.API_TOKEN;

    // Use State
    const [profile, setProfile] = useState({});
    const [designs, setDesigns] = useState([]);

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
        fetch(apiUrl + 'items/designs')
            .then((res) => res.json())
            .then((data) => {
                setDesigns(data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <Head title="Desain" subTitle={process.env.APP_NAME} />

            <main>
                {/* Designs */}
                <Hero profile={profile} />
                <Designs designs={designs} />
                <Contacts profile={profile} />
            </main>

            <Footer profile={profile} />
            <WhatsAppButton orderUrl={profile.order_url} />
        </div>
    );
};

export default Index;