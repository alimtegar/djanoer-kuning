import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Import Components
import { SquareLoader } from '../Loaders';

const FeaturesItem = ({ feature }) => {
    const apiUrl = process.env.API_URL;

    // Use State
    const [featureImage, setFeatureImage] = useState();

    // Use Effect
    useEffect(() => {
        fetch(apiUrl + 'files/' + feature.image)
            .then((res) => res.json())
            .then((image) => {
                console.log(image);

                setFeatureImage(image);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="col-lg-4 px-lg-0">
            <div className="features-item position-relative p-5">
                <h2 className="h5 font-weight-bold mb-0">
                    {feature.title}
                </h2>
                {featureImage ? (<img src={featureImage.data.data.full_url} alt={feature.title} height={100} className="my-4" />) : (<div className="my-4">
                    <SquareLoader side={101.5} />
                </div>)}

                <p className="small text-muted mb-0">{feature.description}</p>
            </div>
        </div>
    );
};

FeaturesItem.propTypes = {
    feature: PropTypes.object.isRequired,
};

export default FeaturesItem;