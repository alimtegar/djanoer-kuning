import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Import Styles
import styles from '../../Design2.module.css';

// Import Components
import { SquareLoader } from '../../../../components/Loaders';

const GalleryItem = ({ image }) => {
    const apiUrl = process.env.API_URL;

    // Use State
    const [galleryItemImage, setGalleryItemImage] = useState();

    // Use Effect
    useEffect(() => {
        fetch(apiUrl + 'files/' + image.directus_file_id)
            .then((res) => res.json())
            .then((image) => {
                setGalleryItemImage(image);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={cx(styles['gallery-item'], "d-flex justify-content-center align-items-center overflow-hidden")}>
            {/* <img src="https://picsum.photos/1200/600?random=1" className="fit-height" /> */}
            {galleryItemImage ? (<img src={galleryItemImage.data.data.full_url} alt="" className="fit-height fit-lg-width" />) : (<div className="my-4">
                <SquareLoader side={620} />
            </div>)}
        </div>);
};

GalleryItem.propTypes = {
    image: PropTypes.object.isRequired,
};

export default GalleryItem;