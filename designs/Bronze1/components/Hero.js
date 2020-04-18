import PropTypes from 'prop-types';
import cx from 'classnames';

// Import Styles
import styles from '../Bronze1.module.css';

const Hero = ({ backgroundImage, groomNickname, brideNickname, weddingDate }) => (
    <section
        className={cx(styles['hero'], "d-flex justify-content-center align-items-center vh-100 vh-lg-75 p-3 mask-dark")}
        style={{ backgroundImage: 'url(' + backgroundImage.data.data.full_url + ')', }}
    >
        <div className="position-relative text-white text-center p-5 p-lg-6">
            <img src="/assets/images/ring.svg" alt="" className="position-absolute top-0 left-50 x-min-50-y-min-50" height="55" style={{ marginTop: -14, }} />
            <div className="position-absolute top-0 left-0 w-100 h-100 border-top" style={{ clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 62% 0, 62% 15%, 38% 15%, 38% 0)' }} />
            <div className="position-absolute top-0 left-0 w-100 h-100 border-left border-right border-bottom" />

            <h2 className="h5 mb-1">Undangan Pernikahan</h2>
            <h1 className="font-secondary mb-2">{groomNickname} <span className="d-block d-lg-inline h4 mb-0 y-4">&amp;</span> {brideNickname}</h1>
            <h2 className="h5 mb-0">{new Date(weddingDate).toLocaleString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
        </div>
    </section>
);

Hero.propTypes = {
    backgroundImage: PropTypes.object.isRequired,
    groomNickname: PropTypes.string.isRequired,
    brideNickname: PropTypes.string.isRequired,
    weddingDate: PropTypes.string.isRequired,
};

export default Hero;