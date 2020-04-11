import PropTypes from 'prop-types';

// Import Helpers
import { range } from '../helpers';

// Import Components
import FeaturesItem from './FeaturesItem';
import { TextLoader, MultiLineTextLoader, SquareLoader } from './Loaders';

const FeaturesItemLoader = () => (
    <div className="col-lg-4 px-lg-0">
        <div className="features-item position-relative p-5">
            <h2 className="h5 font-weight-bold mb-0">
                <TextLoader height={18} width={100} />
            </h2>
            {/* <img src="/images/feature-1.svg" alt="" className="my-4" /> */}
            <div className="my-4">
                <SquareLoader side={101.5} />
            </div>
            <p className="small text-muted mb-0">
                <MultiLineTextLoader lineTotal={2} lineHeight={5.25} height={16} width="100%" />
            </p>
        </div>
    </div>
);

const Features = ({ features }) => {
    // console.log(features.length && features[0]);
    // console.log(features.length && features[0].image_data);

    return (
        <section className="features py-6">
            <div className="container">
                <div className="text-center">
                    <div className="mb-5">
                        <h1 className="font-secondary h2 text-gold mb-1">Fitus Undangan Kami</h1>
                        <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                    <div className="features-body">
                        <div className="row">
                            {features.length ? features.map((feature, i) => (<FeaturesItem feature={feature} />)) : range(0, 6).map(() => ((<FeaturesItemLoader key={Math.random()} />)))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Features.propTypes = {
    features: PropTypes.array.isRequired,
};

export default Features;