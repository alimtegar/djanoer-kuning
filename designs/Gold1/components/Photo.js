import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Import Components
import { SquareLoader } from '../../../components/Loaders';

const Photo = ({ photo, name }) => {
    const apiUrl = process.env.API_URL;
    const side = 150;

    // Use State
    const [photoImage, setPhotoImage] = useState();

    // Use Effect
    useEffect(() => {
        fetch(apiUrl + 'files/' + photo)
            .then((res) => res.json())
            .then((photo) => {
                setPhotoImage(photo);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="position-relative d-inline-flex justify-content-cente align-items-center mb-4 rounded-xxl shadow overflow-hidden" style={{ width: side, height: side, }}>
            {photoImage ? (<img src={photoImage.data.data.full_url} alt={name} className="position-absolute fit-width" />) : (<SquareLoader side={side} />)}
        </div>
    );
};

Photo.propTypes = {
    photo: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default Photo;