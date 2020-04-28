import PropTypes from 'prop-types';
import cx from 'classnames';

// Import Styles
import styles from '../Gold1.module.css';

// Import Components
import { BottomDivider } from '../../../components/Dividers';

const Hero = ({ backgroundImage, groomNickname, brideNickname, weddingDate }) => (
    <section
        className={cx(styles['hero'], "position-relative d-flex justify-content-center align-items-center vh-83 vh-lg-75 mb-6 p-5 mask-dark-thin")}
        style={{ backgroundImage: 'url(' + backgroundImage.data.data.full_url + ')', }}
    >
        <div className="position-relative text-white text-center p-5 p-lg-6 mask-dark rounded-xl">
            {/* Flower Ornaments */}
            <img src="/assets/images/flower-corner-3.png" alt="Ornamen Floral" className="position-absolute z-1 top-0 left-0 x-min-25-y-min-25" height="100" />
            <img src="/assets/images/flower-corner-4.png" alt="Ornamen Floral" className="position-absolute z-1 bottom-0 right-0 x-25-y-25" height="100" />

            <div className="position-absolute top-0 left-50 x-min-50-y-min-50 circle circle-md bg-gradient-black shadow">
                <img src="/assets/images/wedding-3.svg" alt="Ikon Cincin" height="35" className="y-min-1" />
            </div>
            {/* <div className="position-absolute top-0 left-0 w-100 h-100 mask-dark border-top z-min-1" style={{ clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 63% 0, 63% 15%, 37% 15%, 37% 0)' }} /> */}
            {/* <div className="position-absolute top-0 left-0 w-100 h-100 border-left border-right border-bottom" /> */}

            <h2 className="h5 mb-1">Undangan Pernikahan</h2>
            <h1 className={cx(styles['font-secondary'], "mt-3 mb-1")}>{groomNickname} <span className="d-block d-lg-inline mb-0">&amp;</span> {brideNickname}</h1>
            <h2 className="h5 mb-0">{new Date(weddingDate).toLocaleString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
        </div>

        <BottomDivider height={25} />
    </section>
);

Hero.propTypes = {
    backgroundImage: PropTypes.object.isRequired,
    groomNickname: PropTypes.string.isRequired,
    brideNickname: PropTypes.string.isRequired,
    weddingDate: PropTypes.string.isRequired,
};

export default Hero;