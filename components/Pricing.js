import PropTypes from 'prop-types';

// Import Helpers
import { range } from '../helpers';

// Import Components
import PricingItem from './PricingItem';
import PricingItemLoader from './PricingItemLoader';

const Pricing = ({ pricing }) => {
    return (
        <section className="pricing py-6 mask-gold">
            <div className="container">
                <div className="pricing-body pb-3-1">
                    <div className="row my-min-2">
                        {pricing.length ? pricing.map((pricingItem) => (<PricingItem pricingItem={pricingItem} key={pricingItem.item} />)) : range(0, 3).map(() => (<PricingItemLoader key={Math.random()} />))}
                    </div>
                </div>
            </div>
        </section>
    );
};

Pricing.propTypes = {
    pricing: PropTypes.object.isRequired,
};

export default Pricing;