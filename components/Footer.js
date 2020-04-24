import PropTypes from 'prop-types';

// Import Components
import { BackgroundLoader } from './Loaders';
import { TopDivider } from './Dividers';

const FooterLoader = () => (
    <footer className="position-relative text-white text-center mt-5 p-5">
        <BackgroundLoader />
        <p className="small mb-0">
            Loading...
        </p>
    </footer>
);

const Footer = ({ profile }) => profile.title ? (
    <footer className="footer position-relative text-white text-center mt-5 p-5 mask-gold">
        <TopDivider height={25} />
        <p className="small mb-0">
            © <a href="#">{profile.title}</a> {new Date().getFullYear()} | {/* <span className="mx-3">|</span> */}Developed by <a href="#">Alterweb</a>
        </p>
    </footer>
) : <FooterLoader />;

Footer.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default Footer;