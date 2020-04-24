import PropTypes from 'prop-types';

// Import Components
import { BottomDivider } from '../Dividers';
import HeroLoader from './HeroLoader';

const Hero = ({ profile }) => (profile.title && profile.sub_title && profile.tagline && profile.order_url) ? (
    <section className="hero position-relative d-flex justify-content-center align-items-center vh-75 mask-gold">
        <div className="text-center text-white mt-min-5">
            <div className="pb-4">
                {/* Hero Sub-Title */}
                <p className="hero-sub-title h4 font-weight-bold mb-4 mx-3">
                    {profile.sub_title}
                </p>

                {/* Hero Title */}
                <h1 className="font-secondary mb-0">
                    {profile.title}
                </h1>

                {/* Hero Tagline */}
                <h2 className="h6 font-italic font-weight-bold mb-1">
                    {profile.tagline}
                </h2>
            </div>

            <div className="pt-2">
                <a href={profile.order_url} role="button" className="btn btn-outline-light shadow-sm">Pesan Disini</a>
            </div>
        </div>

        <BottomDivider height={25} space={false} />
    </section>
) : (<HeroLoader />);

Hero.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default Hero;