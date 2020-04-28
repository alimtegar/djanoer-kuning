import PropTypes from 'prop-types';
import cx from 'classnames';
import Fade from 'react-reveal/Fade';

// Import Styles
import styles from '../Silver1.module.css';

const Map = ({ embedMap }) => {
    return (
        <section className={cx(styles['map'], "text-center pb-6")}>
            <div className="container">
                <div className="mb-4">
                    <h1 className={cx(styles['font-secondary'], "h1 text-gold mb-0")}>Peta Lokasi</h1>
                </div>
                <div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <Fade bottom>
                                <div className="p-2 border-2 border-dark rounded-xl" dangerouslySetInnerHTML={{ __html: embedMap }} />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Map.propTypes = {
    embedMap: PropTypes.string.isRequired,
};

export default Map;