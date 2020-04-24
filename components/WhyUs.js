import PropTypes from 'prop-types';

// Import Components
import { TextLoader, MultiLineTextLoader } from './Loaders';

const WhyUs = ({ profile }) => {
    return (
        <div className="why-us pb-6">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="bg-white text-center mt-min-5 p-5 rounded-xl shadow-reverse">
                            <h1 className="font-secondary h2 text-gold mb-5">
                                {profile.title ? 'Mengapa ' + profile.title : (<TextLoader height={30} width={364} />)}
                            </h1>
                            {/* <div> */}
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis lorem nostrud exercitation ullamco lorem laboris nisi ut aliquip ex ea lorem commodo consequat. Duis aute irure dolor in lorem ipsum dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt. */}
                            {profile.content ? (
                                <div className="why-us-content small text-muted text-center" dangerouslySetInnerHTML={{ __html: profile.content }} />
                            ) : (
                                <MultiLineTextLoader lineTotal={5} lineHeight={5.25} height={16} width="100%" />
                            )}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

WhyUs.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default WhyUs;