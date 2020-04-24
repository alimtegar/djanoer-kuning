import cx from 'classnames';

// Import Styles
import styles from '../Bronze1.module.css';

const Footer = () => (
    <footer className={cx(styles['footer'], "text-muted text-center p-5")}>
        <p className="small mb-0">
            © <a href="#">{process.env.APP_NAME}</a> {new Date().getFullYear()} · Developed by <a href="https://www.alter.web.id" target="_blank" rel="noopener" rel="noreferrer">Alterweb</a> · Icon made by Freepik from <a href="https://www.flaticon.com" target="_blank" rel="noopener" rel="noreferrer">www.flaticon.com</a>
        </p>
    </footer>
);

export default Footer;