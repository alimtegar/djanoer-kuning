import PropTypes from 'prop-types';

// Import Components
import { TopDivider, BottomDivider } from '../Dividers';
import PricingItem from './PricingItem';
import PricingLoader from './PricingLoader';

const Pricing = ({ pricing }) => pricing.length ? (
    <section className="pricing position-relative py-6 mask-gold">
        <TopDivider height={25} space={false} />

        <div className="container">
            <div className="pricing-body pb-5">
                <div className="row my-min-2">
                    {pricing.map((pricingItem) => (<PricingItem pricingItem={pricingItem} key={pricingItem.id} />))}
                </div>
            </div>
        </div>

        <BottomDivider height={25} space={false} />
    </section>
) : (<PricingLoader />);

Pricing.propTypes = {
    pricing: PropTypes.array.isRequired,
};

export default Pricing;