import PropTypes from 'prop-types';

// Import Components
import { TextLoader, ButtonLoader } from './Loaders';


const Hero = ({ profile }) => {
    return (
        <section className="hero d-flex justify-content-center align-items-center vh-75 mask-gold">
            <div className="text-center text-white mt-min-3-1">
                <div className="pb-4">
                    {/* Hero Sub-Title */}
                    <p className="hero-sub-title h4 font-weight-bold mb-4">
                        {profile.sub_title ? profile.sub_title : (<TextLoader height={30} width={566} />)}
                    </p>

                    {/* Hero Title */}
                    <h1 className="font-secondary mb-0">
                        {profile.title ? profile.title : (<TextLoader height={30} width={277} />)}
                    </h1>

                    {/* Hero Tagline */}
                    <h2 className="h5 font-weight-bold mb-1">
                        {profile.tagline ? profile.tagline : (<TextLoader height={18} width={218} />)}
                    </h2>
                </div>

                <div className="pt-2">
                    {profile.order_url ? (<button className="btn btn-outline-light shadow-sm">Pesan Disini</button>) : (<ButtonLoader height={50} width={142} />)}
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default Hero;