import PropTypes from 'prop-types';

// Import Helpers
import { range } from '../../helpers';

// Import Components
import FeaturesItem from './FeaturesItem';
import FeaturesItemLoader from './FeaturesItemLoader';

const Features = ({ features }) => (
    <section className="features py-6">
        <div className="container">
            <div className="text-center">
                <div className="mb-5">
                    <h1 className="font-secondary h2 text-gold mb-1">Fitus Undangan</h1>
                    <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className="features-body">
                    <div className="row">
                        {features.length ? features.map((feature) => (<FeaturesItem feature={feature} key={feature.id} />)) : range(0, 6).map(() => ((<FeaturesItemLoader key={Math.random()} />)))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

Features.propTypes = {
    features: PropTypes.array.isRequired,
};

export default Features;