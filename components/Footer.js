import PropTypes from 'prop-types';

// Import Components
import { BackgroundLoader } from './Loaders';

const FooterLoader = () => (
    <footer className="position-relative text-white text-center mt-5 p-5">
        <BackgroundLoader />
        <p className="small mb-0">
            Loading...
        </p>
    </footer>
);

const Footer = ({ profile }) => profile.title ? (
    <footer className="footer text-white text-center mt-5 p-5 mask-gold">
        <p className="small mb-0">
            © <a href="#">{profile.title}</a> {new Date().getFullYear()} | {/* <span className="mx-3">|</span> */}Developed by <a href="#">Alterweb</a>
        </p>
    </footer>
) : <FooterLoader />;

FooterLoader.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default Footer;