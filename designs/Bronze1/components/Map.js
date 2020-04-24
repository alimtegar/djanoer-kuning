import PropTypes from 'prop-types';
import cx from 'classnames';
import Fade from 'react-reveal/Fade';

// Import Styles
import styles from '../Bronze1.module.css';

const Map = ({ embedMap }) => {
    return (
        <section className={cx(styles['map'], "text-center pb-6")}>
            <div className="container">
                <div className="mb-4">
                    <h1 className={cx(styles['font-secondary'], "h1 text-gold mb-0")}>Peta Lokasi</h1>
                </div>
                <div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7 px-5">
                            <Fade bottom>
                                <div className="position-relative">
                                    {/* Flower Ornaments */}
                                    <img src="/assets/images/flower-corner-1.png" alt="" className="position-absolute z-1 top-0 right-0 x-25-y-min-25" height="100" />
                                    <img src="/assets/images/flower-corner-2.png" alt="" className="position-absolute z-1 bottom-0 left-0 x-min-25-y-25" height="100" />

                                    <div className="p-2 border-gray border-2" dangerouslySetInnerHTML={{ __html: embedMap }} />
                                </div>
                            </Fade>
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