import PropTypes from 'prop-types';
import cx from 'classnames';

// Import Styles
import styles from '../Design1.module.css';

const Map = ({ embedMap }) => {
    return (
        <section className={cx(styles['map'], "text-center pb-6")}>
            <div className="container">
                <div className="mb-4">
                    <h1 className="h2 font-secondary text-gold mb-0">Peta Lokasi</h1>
                </div>
                <div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="pt-2 px-2 border" dangerouslySetInnerHTML={{ __html: embedMap }} />
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <button className="btn btn-outline-gold">
                        Google Map <i className="fa fa-external-link-alt fa-sm ml-1 y-min-1" />
                    </button>
                </div>
            </div>
        </section>
    );
};

Map.propTypes = {
    embedMap: PropTypes.string.isRequired,
};

export default Map;