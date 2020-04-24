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
        <TopDivider height={25} />

        <p className="small mb-0">
        © <a href="#">{process.env.APP_NAME}</a> {new Date().getFullYear()} · Developed by <a href="https://www.alter.web.id" target="_blank" rel="noopener" rel="noreferrer">Alterweb</a> · Icon made by Freepik from <a href="https://www.flaticon.com" target="_blank" rel="noopener" rel="noreferrer">www.flaticon.com</a>
        </p>
    </footer>
);

export default Footer;