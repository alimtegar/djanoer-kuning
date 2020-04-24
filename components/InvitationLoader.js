import { useState } from 'react';
import PropTypes from 'prop-types';
import BarLoader from "react-spinners/BarLoader";
import Slide from 'react-reveal/Slide';

const InvitationLoader = ({ condition, isAutoOpen }) => {
    // Use State
    const [isHide, setIsHide] = useState(false);

    // Functions
    const hide = () => setIsHide(true);

    return (
        <div className="position-fixed z-99">
            <Slide top collapse when={!isHide}>
                <div
                    className="hero d-flex justify-content-center align-items-center text-white vh-100 vw-100 text-center mask-gold"
                    style={{ backgroundImage: ' url(https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80)', }}
                >
                    <div>
                        <div className="pb-4">
                            <h1 className="font-secondary mb-0">{process.env.APP_NAME}</h1>
                            <h2 className="h6 font-italic font-weight-bold mb-1">{process.env.APP_TAGLINE}</h2>
                        </div>

                        <div className="d-flex justify-content-center pt-2">
                            {!condition ? (
                                <BarLoader
                                    css={{
                                        height: 2,
                                    }}
                                    size={150}
                                    color={"#fff"}
                                    loading={true}
                                />
                            ) : (!isHide && isAutoOpen ? hide() : (
                                <button className="btn btn-outline-light shadow-sm" onClick={() => hide()}>Buka Undangan</button>
                            ))}

                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

InvitationLoader.propTypes = {
    condition: PropTypes.bool.isRequired,
    isAutoOpen: PropTypes.bool.isRequired,
};

export default InvitationLoader;

