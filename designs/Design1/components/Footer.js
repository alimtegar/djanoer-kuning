import cx from 'classnames';

// Import Styles
import styles from '../Design1.module.css';

const Footer = () => (
    <footer className={cx(styles['footer'], "text-muted text-center p-5")}>
        <p className="small mb-0">
            © <a href="#">Djanoer Kuning</a> 2020 · Developed by <a href="#">Alterweb · Icon made by Elias Bikbulatov from www.flaticon.com</a>
        </p>
    </footer>
);

export default Footer;