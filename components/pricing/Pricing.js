import PropTypes from 'prop-types';

// Import Components
import PricingItem from './PricingItem';
import PricingLoader from './PricingLoader';

const Pricing = ({ pricing }) => pricing.length ? (
    <section className="pricing py-6 mask-gold">
        <div className="container">
            <div className="pricing-body pb-3-1">
                <div className="row my-min-2">
                    {pricing.map((pricingItem) => (<PricingItem pricingItem={pricingItem} key={pricingItem.item} />))}
                </div>
            </div>
        </div>
    </section>
) : (<PricingLoader />);

Pricing.propTypes = {
    pricing: PropTypes.object.isRequired,
};

export default Pricing;