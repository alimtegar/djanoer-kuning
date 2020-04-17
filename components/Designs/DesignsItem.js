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
        <div className="col-lg-4 py-5 py-lg-0">
            <div className="text-center">
                <h1 className="h5 font-weight-bold mb-1">
                    {design.title}
                </h1>
                <p className="small text-muted mb-0">ID: {design.unique_name}</p>
                <div className="d-flex justify-content-center">
                    {designImage ? (<img src={designImage.data.data.thumbnails[5].url} alt="" width={400} className="x-4" />) : null}
                </div>
                {design.example_url ? (
                    <a href={design.example_url} target="_blank" role="button" className="btn btn-outline-gold">
                        Lihat Desain <i className="fa fa-external-link-alt fa-sm ml-1 y-min-1" />
                    </a>
                ) : null}
            </div>
        </div>
    );
};

Design.propTypes = {
    design: PropTypes.object.isRequired,
};

export default Design;