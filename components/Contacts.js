import PropTypes from 'prop-types';

// Import Components
import { TextLoader, ButtonLoader } from './Loaders';

const Contacts = ({ profile }) => (
    <section className="py-6">
        <div className="container">
            <div className="text-center mb-5">
                <h1 className="font-secondary h2 text-gold mb-1">Hubungi Kami</h1>
                <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="contacts-body">
                <ul className="nav justify-content-center px-5 px-lg-0">
                    <li className="nav-item">
                        <div className="contacts-item position-relative d-inline-flex align-items-center px-0 px-lg-5 py-3 py-lg-0">
                            <a href="#" className="btn btn-outline-gold circle mr-3 shadow-sm">
                                <i className="fab fa-whatsapp fa-1p66x" />
                            </a>
                            <div>
                                <h2 className="h6 font-weight-bold mb-0">No. Telp</h2>
                                <span className="small text-muted">
                                    {profile.phone ? profile.phone : (<TextLoader height={18} width={115} />)}
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="contacts-item position-relative d-inline-flex align-items-center px-0 px-lg-5 py-3 py-lg-0">
                            <a href="#" className="btn btn-outline-gold circle mr-3 shadow-sm">
                                <i className="far fa-envelope fa-lg" />
                            </a>
                            <div>
                                <h2 className="h6 font-weight-bold mb-0">Email</h2>
                                <span className="small text-muted">
                                    {profile.email ? profile.email : (<TextLoader height={18} width={167} />)}
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="contacts-item position-relative d-inline-flex align-items-center px-0 px-lg-5 py-3 py-lg-0">
                            <a href="#" className="btn btn-outline-gold circle mr-3 shadow-sm">
                                <i className="fab fa-instagram fa-1p66x" />
                            </a>
                            <div>
                                <h2 className="h6 font-weight-bold mb-0">Instagram</h2>
                                <span className="small text-muted">
                                    {profile.instagram ? profile.instagram : (<TextLoader height={18} width={111} />)}
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
);

Contacts.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default Contacts;