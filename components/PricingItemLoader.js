// Import Helpers
import { range } from '../helpers';

// Import Components
import { TextLoader, ButtonLoader } from './Loaders';

const PricingItemLoader = () => (
    <div className="col-lg-4 py-2">
        <div className="card text-center border-0 rounded-xl shadow-xl">
            <div className="card-header position-relative py-4 bg-transparent">
                <h2 className="font-secondary h2 text-gold mb-0">
                    <TextLoader height={30} width={98} />
                </h2>
                <h3 className="h4 mb-3">
                    <span className="font-weight-bold">
                        <TextLoader height={28.38} width={136} />
                    </span>
                </h3>
                <div className="pricing-example-link position-absolute left-50 bottom-0 x-min-50-y-50 bg-white text-muted py-1 px-4 w-fit-content border rounded-xxl">
                    <div className="small y-min-1">
                        <TextLoader height={18} width={202} />
                    </div>
                </div>
            </div>
            <div className="card-body">
                <ul className="nav flex-column mt-3">
                    {range(0, 9).map(() => (
                        <li className="nav-item py-1" key={Math.random()}>
                            <div className="d-inline-flex align-items-center small text-muted">
                                <div style={{ paddingTop: 1.5, paddingBottom: 1.5 }}>
                                    <TextLoader height={18} width={150} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="card-footer bg-transparent mt-min-1 pt-2 pb-5 pt-0 border-top-0">
                <ButtonLoader height={50.38} width={142} />
            </div>
        </div>
    </div>
);

export default PricingItemLoader;