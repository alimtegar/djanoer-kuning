import PropTypes from 'prop-types';

// Import Components
import { TextLoader, ButtonLoader } from './Loaders';

const CustomDomainPricing = ({ customDomainPricing }) => (
    <section>
        <div className="container">
            <div className="card mt-min-3-1 border-0 rounded-xl shadow-reverse">
                <div className="card-body text-center text-lg-left p-5">
                    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                        <div className="mb-5 mb-lg-0">
                            <p className="small text-muted mb-1">
                                {customDomainPricing.description ? customDomainPricing.description : (<TextLoader height={18} width={300} />)}
                            </p>
                            <h3 className="h4 mb-0">
                                {customDomainPricing.price ? (
                                    <span>
                                        <sup className="small text-muted mr-1">Rp</sup>
                                        <span className="font-weight-bold">
                                            {customDomainPricing.price}
                                        </span>
                                        <sup className="small text-muted ml-1">,-</sup>
                                    </span>
                                ) : (<TextLoader height={28.38} width={136} />)}
                            </h3>
                        </div>
                        <div className="d-flex flex-column flex-lg-row align-items-center">
                            {customDomainPricing.order_url ? (
                                <a href={customDomainPricing.order_url} role="button" className="btn btn-outline-gold shadow-sm">
                                    Pesan Disini
                                </a>
                            ) : (<ButtonLoader height={50.38} width={142} />)}

                            <span className="small text-muted mx-0 mx-lg-3 my-3 my-lg-0">atau</span>
                            {customDomainPricing.order_url ? (
                                <a href={customDomainPricing.check_domain_url} role="button" target="_blank" rel="noopener" rel="noreferrer" className="btn btn-outline-gray shadow-sm">
                                    Cek Domain <i className="fa fa-external-link-alt fa-sm ml-1 y-min-1" />
                                </a>
                            ) : (<ButtonLoader height={50.38} width={143} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

CustomDomainPricing.propTypes = {
    customDomainPricing: PropTypes.object.isRequired,
};

export default CustomDomainPricing;