import PropTypes from 'prop-types';
import cx from 'classnames';
import Countdown from 'react-countdown';

// Import Styles
import styles from '../Silver1.module.css';

// Import Helpers
import { pad } from '../../../helpers';

const renderer = ({ days, hours, minutes, seconds, completed }) => (
    <div className="d-inline-flex justify-content-center align-items-center bg-white h2 mb-0 py-3 py-lg-4 px-4 px-lg-5 rounded-xl border-2 border-dark">
        <div>
            <div className={cx(styles['countdown-number'])}>
                {pad(days)}
            </div>
            <div className="small text-muted">
                Hari
            </div>
        </div>
        <span className={cx(styles['countdown-number'], "mx-3 mx-lg-4 h-100")}>:</span>
        <div>
            <div className={cx(styles['countdown-number'])}>
                {pad(hours)}
            </div>
            <div className="small text-muted">
                Jam
            </div>
        </div>
        <span className={cx(styles['countdown-number'], "mx-3 mx-lg-4 h-100")}>:</span>
        <div>
            <div className={cx(styles['countdown-number'])}>
                {pad(minutes)}
            </div>
            <div className="small text-muted">
                Menit
            </div>
        </div>
        <span className={cx(styles['countdown-number'], "mx-3 mx-lg-4 h-100")}>:</span>
        <div>
            <div className={cx(styles['countdown-number'])}>
                {pad(seconds)}
            </div>
            <div className="small text-muted">
                Detik
            </div>
        </div>
    </div>
);

const MyCountdown = ({ weddingDate }) => (
    <section className="text-center pt-6">
        <div className="mb-5">
            <h1 className="h2 font-secondary text-gold mb-1">Nantikan Harinya</h1>
            <h2 className="small text-muted mb-0">Akan diadakan pada {new Date(weddingDate).toLocaleString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
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