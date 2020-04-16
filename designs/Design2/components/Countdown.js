import PropTypes from 'prop-types';
import cx from 'classnames';
import Countdown from 'react-countdown';

// Import Styles
import styles from '../Design2.module.css';

// Import Helpers
import { pad } from '../../../helpers';

const renderer = ({ days, hours, minutes, seconds, completed }) => (
    <div className="d-inline-flex justify-content-center align-items-center bg-white h2 mb-0 py-4 px-lg-5">
        <div className="bg-dark text-white p-3 rounded-xl shadow-sm">
            <div className={cx(styles['countdown-number'])}>
                {pad(days)}
            </div>
            <div className="small">
                Hari
            </div>
        </div>
        <span className="mx-1 h-100" />
        <div className="bg-dark text-white p-3 rounded-xl shadow-sm">
            <div className={cx(styles['countdown-number'])}>
                {pad(hours)}
            </div>
            <div className="small">
                Jam
            </div>
        </div>
        <span className="mx-1 h-100" />
        <div className="bg-dark text-white p-3 rounded-xl shadow-sm">
            <div className={cx(styles['countdown-number'])}>
                {pad(minutes)}
            </div>
            <div className="small">
                Menit
            </div>
        </div>
        <span className="mx-1 h-100" />
        <div className="bg-dark text-white p-3 rounded-xl shadow-sm">
            <div className={cx(styles['countdown-number'])}>
                {pad(seconds)}
            </div>
            <div className="small">
                Detik
            </div>
        </div>
    </div>
);

const MyCountdown = ({ weddingDate }) => (
    <section className="text-center pt-6">
        <div>
            <h1 className="font-secondary text-gold mb-1">Nantikan Harinya</h1>
            <p className="small text-muted mb-4">Akan diselenggarakan pada {new Date(weddingDate).toLocaleString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
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