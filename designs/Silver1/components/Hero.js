import PropTypes from 'prop-types';
import cx from 'classnames';

// Import Styles
import styles from '../Silver1.module.css';

// Import Components
import { BottomDivider } from '../../../components/Dividers';

const Hero = ({ backgroundImage, groomNickname, brideNickname, weddingDate }) => (
    <section
        className={cx(styles['hero'], "position-relative d-flex justify-content-center align-items-center vh-66 vh-lg-75 mb-6 p-3 mask-dark-thin")}
        style={{ backgroundImage: 'url(' + backgroundImage.data.data.full_url + ')', }}
    >
        <div className="position-relative text-white text-center p-5 p-lg-6 rounded-xl">
            {/* Wedding Ornament */}
            <img src="/assets/images/floral-1.png" alt="" className="position-absolute top-0 left-50 x-min-50-y-min-50" width="320" />
            {/* <img src="/assets/images/floral-2.png" alt="" className="position-absolute bottom-0 left-50 x-min-50-y-50" width="320" /> */}

            <div className="bg-white position-absolute top-0 left-50 x-min-50-y-min-50 circle circle-md shadow-sm">
                <img src="/assets/images/wedding-2.svg" alt="" height="35" className="y-min-1" />
            </div>
            {/* <div className="position-absolute top-0 left-0 w-100 h-100 border-2-top" style={{ clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 58% 0, 58% 15%, 42% 15%, 42% 0)' }} /> */}
            {/* {/* {/* <div className="position-absolute top-0 left-0 w-100 h-100 border-2-left border-2-right border-2-bottom" /> */}

            <h2 className="h5 mb-1">Undangan Pernikahan</h2>
            <h1 className={cx(styles['font-secondary'], "mt-2 mb-2")}>{groomNickname} <span className="d-block d-lg-inline mb-0">&amp;</span> {brideNickname}</h1>
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