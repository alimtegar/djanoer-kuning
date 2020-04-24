import cx from 'classnames';

// Import Styles
import styles from '../Gold1.module.css';

// Import Components
import { TopDivider } from '../../../components/Dividers';

const Footer = ({ backgroundImage }) => (
    <footer
        className={cx(styles['footer'], "position-relative text-white text-center p-5 mask-dark-thin")}
        style={{ backgroundImage: 'url(' + backgroundImage.data.data.full_url + ')', }}
    >
        <TopDivider height="25" />

        <p className="small mb-0">
            © <a href="#">Djanoer Kuning</a> {new Date().getFullYear()} · Developed by <a href="#">Alterweb · Icon made by Elias Bikbulatov from www.flaticon.com</a>
        </p>
    </footer>
);

export default Footer;