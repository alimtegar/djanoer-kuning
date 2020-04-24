import PropTypes from 'prop-types';
import cx from 'classnames';
import Countdown from 'react-countdown';
import Fade from 'react-reveal/Fade';

// Import Styles
import styles from '../Gold1.module.css';

// Import Helpers
import { pad } from '../../../helpers';

const renderer = ({ days, hours, minutes, seconds, completed }) => (
    <div className="d-inline-flex justify-content-center align-items-center bg-white h2 mb-0 px-lg-5">
        <Fade bottom>
            <div className="bg-gradient-black text-white p-3 rounded-xl shadow">
                <div className={cx(styles['countdown-number'])}>
                    {pad(days)}
                </div>
                <div className="small">
                    Hari
            </div>
            </div>
        </Fade>
        <span className="mx-1 h-100" />
        <Fade bottom>
            <div className="bg-gradient-black text-white p-3 rounded-xl shadow">
                <div className={cx(styles['countdown-number'])}>
                    {pad(hours)}
                </div>
                <div className="small">
                    Jam
            </div>
            </div>
        </Fade>
        <span className="mx-1 h-100" />
        <Fade bottom>
            <div className="bg-gradient-black text-white p-3 rounded-xl shadow">
                <div className={cx(styles['countdown-number'])}>
                    {pad(minutes)}
                </div>
                <div className="small">
                    Menit
            </div>
            </div>
        </Fade>
        <span className="mx-1 h-100" />
        <Fade bottom>
            <div className="bg-gradient-black text-white p-3 rounded-xl shadow">
                <div className={cx(styles['countdown-number'])}>
                    {pad(seconds)}
                </div>
                <div className="small">
                    Detik
            </div>
            </div>
        </Fade>
    </div>
);

const MyCountdown = ({ weddingDate }) => (
    <section className="text-center pb-6">
        <div className="mb-5">
            <h1 className={cx(styles['font-secondary'], "h1 text-gold mb-1")}>Nantikan Harinya</h1>
            <h2 className="small text-muted mb-0">Akan diselenggarakan pada {new Date(weddingDate).toLocaleString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
        </div>
        <div className="d-flex justify-content-center">
            <Countdown
                zeroPadDays={2}
                zeroPadTime={2}
                date={new Date(weddingDate).getTime()}
                renderer={renderer}
            />
        </div>
    </section>
);

MyCountdown.propTypes = {
    weddingDate: PropTypes.string.isRequired,
};

export default MyCountdown;