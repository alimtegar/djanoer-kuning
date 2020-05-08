import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

// Import Helpers
import { isObjectEmpty } from '../../helpers';

const PricingItem = ({ pricingItem }) => (
    <div className="col-lg-4 py-2">
        <Fade bottom>
            <div className="card text-center border-0 rounded-xl shadow-xl">
                <div className="card-header position-relative py-4 bg-transparent">
                    <h2 className="font-secondary h2 text-gold mb-0">{pricingItem.title}</h2>
                    <h3 className="h4 mb-3">
                        <sup className="small text-muted mr-1">Rp</sup>
                        <span className="font-weight-bold">{new Intl.NumberFormat('en-ID', { maximumSignificantDigits: 3 }).format(pricingItem.price)}</span>
                        <sup className="small text-muted ml-1">,-</sup>
                    </h3>
                    <div className="pricing-example-link position-absolute left-50 bottom-0 x-min-50-y-50 bg-white text-muted py-1 px-4 w-fit-content border rounded-xxl">
                        <div className="small y-min-1">
                            {pricingItem.example_url}
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <ul className="nav flex-column mt-3">
                        {pricingItem.features && Object.keys(pricingItem.features).sort((a, b) => a - b).map((key) => (
                            <li className="nav-item py-1" key={Math.random()}>
                                <div className="d-inline-flex align-items-center small text-muted">
                                    <i className="fa fa-xs fa-check text-gold mr-2" />
                                    {pricingItem.features[key]}
                                </div>
                            </li>
                        ))}
                        {pricingItem.non_features && Object.keys(pricingItem.non_features).sort((a, b) => a - b).map((key) => (
                            <li className="nav-item py-1" key={Math.random()}>
                                <div className="d-inline-flex align-items-center small text-gray">
                                    <i className="fa fa-xs fa-times text-gray mr-2" />
                                    {pricingItem.non_features[key]}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card-footer bg-transparent mt-min-1 pt-2 pb-5 pt-0 border-top-0">
                    <a href={pricingItem.order_url} role="button" className="btn btn-outline-gold shadow-sm">Pesan Disini</a>
                </div>
            </div>
        </Fade>
    </div>
);

PricingItem.propTypes = {
    pricingItem: PropTypes.object.isRequired,
};

export default PricingItem;