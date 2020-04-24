import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

// Import Helpers
import { isObjectEmpty } from '../../helpers';

// Import Components
import { RectangleLoader } from '../Loaders';

const DesignsItem = ({ design }) => {
    const apiUrl = process.env.API_URL;

    // Use State
    const [designImage, setDesignImage] = useState({});

    // Use Effect
    useEffect(() => {
        fetch(apiUrl + 'files/' + design.image)
            .then((res) => res.json())
            .then((image) => {
                setDesignImage(image);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="col-lg-4 py-5 py-lg-0">
            <Fade bottom>
                <div className="text-center">
                    <h1 className="h5 font-weight-bold mb-1">
                        {design.title}
                    </h1>
                    <p className="small text-muted mb-0">ID: {design.unique_name}</p>
                    <div className="d-flex justify-content-center">
                        {!isObjectEmpty(designImage) ? (<img src={designImage.data.data.thumbnails[5].url} alt="" width={400} className="x-4" />) : (
                            <div style={{ padding: 32 }}>
                                <RectangleLoader height={336} width={166} />
                            </div>
                        )}
                    </div>

                    <a href={design.order_url} target="_blank" rel="noopener" rel="noreferrer" role="button" className="btn btn-outline-gold mx-1 shadow-sm">
                        Pesan Paket
                    </a>
                    <a href={design.example_url} target="_blank" rel="noopener" rel="noreferrer" role="button" className="btn btn-outline-gold circle mx-1 shadow-sm">
                        <i className="far fa-eye fa-lg" />
                    </a>
                </div>
            </Fade>
        </div>
    );
};

DesignsItem.propTypes = {
    design: PropTypes.object.isRequired,
};

export default DesignsItem;