import PropTypes from 'prop-types';

// Import Components
import HeroLoader from './HeroLoader';

const Hero = ({ profile }) => (profile.title && profile.sub_title && profile.tagline) ? (
    <section className="hero d-flex justify-content-center align-items-center vh-75 mask-gold">
        <div className="text-center text-white mt-min-3-1">
            <div className="pb-4">
                {/* Hero Sub-Title */}
                <p className="hero-sub-title h4 font-weight-bold mb-4">
                    {profile.sub_title}
                </p>

                {/* Hero Title */}
                <h1 className="font-secondary mb-0">
                    {profile.title}
                </h1>

                {/* Hero Tagline */}
                <h2 className="h5 font-weight-bold mb-1">
                    {profile.tagline}
                </h2>
            </div>

            <div className="pt-2">
                <button className="btn btn-outline-light shadow-sm">Pesan Disini</button>
            </div>
        </div>
    </section>
) : (<HeroLoader />);

Hero.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default Hero;