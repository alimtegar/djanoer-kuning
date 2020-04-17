import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

// Import Components
import Hero from '../components/Hero';
import Designs from '../components/Designs';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

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
            <main>
                {/* Designs */}
                <Hero profile={profile} />
                <Designs designs={designs} />
                <Contacts profile={profile} />
                <Footer profile={profile} />
            </main>
        </div>
    );
};

export default Index;