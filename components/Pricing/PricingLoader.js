// Import Helpers
import { range } from '../../helpers';

// Import Components
import { BackgroundLoader } from '../Loaders';
import PricingItemLoader from './PricingItemLoader';

const PricingLoader = () => (
    <section className="position-relative py-6">
        <BackgroundLoader />
        <div className="container">
            <div className="pricing-body pb-3-1">
                <div className="row my-min-2">
                    {range(0, 3).map(() => (<PricingItemLoader key={Math.random()} />))}
                </div>
            </div>
        </div>
    </section>
);

export default PricingLoader;