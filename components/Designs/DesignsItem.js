import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

const Design = ({ design }) => {
    const apiUrl = process.env.API_URL;

    // Use State
    const [designImage, setDesignImage] = useState();

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
        <div className="col-lg-4">
            <div className="text-center">
                <h1 className="h5 font-weight-bold mb-1">
                    {design.title}
                </h1>
                {/* <p className="small text-muted">Kode - {design.unique_name}</p> */}
                {designImage ? (<img src={designImage.data.data.thumbnails[3].url} alt="" />) : null}
                <button className="btn btn-outline-gold">
                    Lihat Desain
                </button>
            </div>
        </div>
    );
};

Design.propTypes = {
    design: PropTypes.object.isRequired,
};

export default Design;