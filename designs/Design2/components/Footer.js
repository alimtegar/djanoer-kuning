import cx from 'classnames';

// Import Styles
import styles from '../Design2.module.css';

const Footer = ({ backgroundImage }) => (
    <footer
        className={cx(styles['footer'], "text-white text-center p-5 mask-dark")}
        style={{ backgroundImage: 'url(' + backgroundImage.data.data.full_url + ')', }}
    >
        <p className="small mb-0">
            © <a href="#">Djanoer Kuning</a> {new Date().getFullYear()} · Developed by <a href="#">Alterweb · Icon made by Elias Bikbulatov from www.flaticon.com</a>
        </p>
    </footer>
);

export default Footer;